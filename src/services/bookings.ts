import { supabase } from "@/lib/supabaseClient";
import { Booking, Facility, PaginatedResult } from "@/types";

const toFacility = (data: any): Facility => ({
  id: data.id,
  name: data.name,
  description: data.description,
  maxCapacity: data.max_capacity,
  rules: data.rules,
  requiresApproval: data.requires_approval,
  imageUrl: data.image_url,
});

const toBooking = (data: any): Booking => ({
  id: data.id,
  facilityId: data.facility_id,
  facilityName: data.facilityName, // This would ideally be a JOIN
  residentId: data.resident_id,
  residentName: data.resident_name,
  unitLabel: data.unit_label,
  startTime: data.start_time,
  endTime: data.end_time,
  participants: data.participants,
  purpose: data.purpose,
  status: data.status,
  rejectionReason: data.rejection_reason,
  createdAt: data.created_at,
});

export const getFacilities = async (): Promise<Facility[]> => {
  const { data, error } = await supabase.from("facilities").select("*");

  if (error) {
    console.error("Error fetching facilities:", error);
    throw new Error(error.message);
  }

  return data.map(toFacility);
};

export const getFacilityById = async (
  id: string
): Promise<Facility | undefined> => {
  const { data, error } = await supabase
    .from("facilities")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching facility ${id}:`, error);
    if (error.code === "PGRST116") return undefined;
    throw new Error(error.message);
  }
  return data ? toFacility(data) : undefined;
};

export const getBookings = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Booking>> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("bookings")
    .select(
      `
      *,
      facility:facilities(name)
    `,
      { count: "exact" }
    )
    .order("start_time", { ascending: true })
    .range(start, end);

  if (error) {
    console.error("Error fetching bookings:", error);
    throw new Error(error.message);
  }

  // Manually map the facility name from the JOIN
  const bookingsWithFacilityNames = data.map((b: any) => ({
    ...toBooking(b),
    facilityName: b.facility.name,
  }));

  return {
    data: bookingsWithFacilityNames,
    page,
    pageSize,
    total: count || 0,
  };
};

export const createBooking = async (
  bookingData: Omit<
    Booking,
    "id" | "createdAt" | "residentName" | "unitLabel" | "facilityName"
  >
): Promise<Booking> => {
  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        facility_id: bookingData.facilityId,
        resident_id: bookingData.residentId, // Should come from auth
        resident_name: "Current User", // Placeholder
        unit_label: "Unit #1234", // Placeholder
        start_time: bookingData.startTime,
        end_time: bookingData.endTime,
        participants: bookingData.participants,
        purpose: bookingData.purpose,
        status: bookingData.status,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating booking:", error);
    throw new Error(error.message);
  }

  // We don't get facility name back directly, would need another query
  return {
    ...toBooking(data),
    facilityName: "Unknown",
  };
};
