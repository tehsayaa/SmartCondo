import { Booking, Facility, PaginatedResult } from "@/types";

const mockFacilities: Facility[] = [
  {
    id: "gym",
    name: "Sky Gym",
    description: "Fitness center with panoramic city views.",
    maxCapacity: 20,
    rules: "No glass bottles",
    requiresApproval: false,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqGA_cj-_lXXql8fbb1-g_bZd1ktdx5pqrSOCYn6mouKjwqpsSULrRjkJzC2H1qfQSUuHYfONnZkNuHKA9KZ6UPTGcQPhzZQY_gGuxRCzefLaUFIIQnr5DuJW9VYapEENevBj11CjrBu6Z77qf4CppQ2G63qdGYp6uGICG5eVk8R0Jgr-qcT7l76SfBc4xCCvfb746wGvisn8b7Ir2Y6uMaa7zx5TpnlyKmSPSF4SbQWv7mFyuW7_hPkxT1BKBeZGft50FesLvac36",
  },
  {
    id: "pool",
    name: "Rooftop Infinity Pool",
    description: "Heated pool open year-round.",
    maxCapacity: 15,
    rules: "Shower before entry",
    requiresApproval: true,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBri8jb7R5KW1g4GhD-LpqiAe9q-nAwczLSCyvFDpZW88oWA-aTBMZlhIawMk826f-wmHaGMHA3Vv_JW_Eha4SJWBwOjE0ASzhkq-I4L1o53YfdcmZoClNBWpKeAEZrs8_rdk5stbXqVvFzAwr3kh4O3hfloSiFEMW3ZjqOpan6U8iJfRn0Af0sFl1fWumuwRjWjsxokNrg6cwXbAO-m0M858FqRVEYOYuWFmz1vqwcYmiG8YXtKJoxD34ryugHoE6tPZVPUkxJN2zS",
  },
  {
    id: "bbq1",
    name: "Grill & Chill Pavilion",
    description: "Private outdoor barbecue areas.",
    maxCapacity: 8,
    rules: "Clean after use",
    requiresApproval: true,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrtqQKC05qn6PXyirCWLyGFB84ezJnktua0ncbpBaPnLtB3FHe1-MB_pKKgpUniA_z7tT4KQZ4UGuT4-ZN8-Fh24g1x0G-3g51F2TUANM1DULwrQkcmk3wt2s6k8lNeC8j8PLaL0Z19Ta6UntubblogWbSkL_AqNaGIQBsIGxTpaAFD72Rv7Mu_mCmUHQfIX_SdM87az2Q2cuohkTfp3G-K7fZmBhFjoAnieKDQaF-HaFFIeLR5QX6eY75wuS1BjW9SdjYh_gC8fXQ",
  },
];

const mockBookings: Booking[] = [
  {
    id: "BK-20241125-A",
    facilityId: "pool",
    facilityName: "Rooftop Pool",
    residentId: "user-4",
    residentName: "Alex Chen",
    unitLabel: "Unit #1204",
    startTime: "2024-11-25T16:00:00.000Z",
    endTime: "2024-11-25T17:00:00.000Z",
    status: "approved",
    createdAt: "2024-11-20T10:00:00.000Z",
  },
  {
    id: "BK-20241127-B",
    facilityId: "gym",
    facilityName: "Gym - Zone 1",
    residentId: "user-4",
    residentName: "Alex Chen",
    unitLabel: "Unit #1204",
    startTime: "2024-11-27T08:00:00.000Z",
    endTime: "2024-11-27T09:00:00.000Z",
    status: "pending",
    createdAt: "2024-11-26T11:00:00.000Z",
  },
  {
    id: "BK-20241201-C",
    facilityId: "lounge",
    facilityName: "Sky Lounge",
    residentId: "user-4",
    residentName: "Alex Chen",
    unitLabel: "Unit #1204",
    startTime: "2024-12-01T19:00:00.000Z",
    endTime: "2024-12-01T22:00:00.000Z",
    status: "approved",
    createdAt: "2024-11-25T15:00:00.000Z",
  },
];

export const getFacilities = async (): Promise<Facility[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFacilities);
    }, 400);
  });
};

export const getFacilityById = async (
  id: string
): Promise<Facility | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFacilities.find((f) => f.id === id));
    }, 200);
  });
};

export const getBookings = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Booking>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const data = mockBookings.slice(start, end);
      resolve({
        data,
        page,
        pageSize,
        total: mockBookings.length,
      });
    }, 600);
  });
};

export const createBooking = async (
  bookingData: Omit<Booking, "id" | "createdAt" | "residentName" | "unitLabel">
): Promise<Booking> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBooking: Booking = {
        ...bookingData,
        id: `BK-${Date.now()}`,
        residentName: "Current User", // Placeholder
        unitLabel: "Unit #1234", // Placeholder
        createdAt: new Date().toISOString(),
      };
      mockBookings.unshift(newBooking);
      resolve(newBooking);
    }, 800);
  });
};
