import { supabase } from "@/lib/supabaseClient";
import {
  Ticket,
  TicketComment,
  TicketTimelineItem,
  PaginatedResult,
} from "@/types";

const toTicket = (data: any): Ticket => ({
  id: data.id,
  category: data.category,
  title: data.title,
  description: data.description,
  priority: data.priority,
  status: data.status,
  building: data.building,
  floor: data.floor,
  unitNumber: data.unit_number,
  commonArea: data.common_area,
  residentId: data.resident_id,
  residentName: data.resident_name,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

export const getTickets = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Ticket>> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("tickets")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(start, end);

  if (error) {
    console.error("Error fetching tickets:", error);
    throw new Error(error.message);
  }

  return {
    data: data.map(toTicket),
    page,
    pageSize,
    total: count || 0,
  };
};

export const getTicketById = async (id: string): Promise<Ticket | undefined> => {
  const { data, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    if (error.code === "PGRST116") return undefined;
    throw new Error(error.message);
  }

  return data ? toTicket(data) : undefined;
};

// Timeline and comments are not in the initial schema, so these remain mocks.
export const getTicketTimeline = async (
  ticketId: string
): Promise<TicketTimelineItem[]> => {
  console.log("Fetching timeline for ticket:", ticketId);
  return Promise.resolve([]);
};

export const getTicketComments = async (
  ticketId: string
): Promise<TicketComment[]> => {
  console.log("Fetching comments for ticket:", ticketId);
  return Promise.resolve([]);
};

export const createTicket = async (
  ticketData: Omit<Ticket, "id" | "createdAt" | "updatedAt" | "residentName">
): Promise<Ticket> => {
  const { data, error } = await supabase
    .from("tickets")
    .insert([
      {
        category: ticketData.category,
        title: ticketData.title,
        description: ticketData.description,
        priority: ticketData.priority,
        status: "open",
        building: ticketData.building,
        floor: ticketData.floor,
        unit_number: ticketData.unitNumber,
        common_area: ticketData.commonArea,
        resident_id: ticketData.residentId, // This should come from auth user
        resident_name: "Current User", // Placeholder
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating ticket:", error);
    throw new Error(error.message);
  }

  return toTicket(data);
};
