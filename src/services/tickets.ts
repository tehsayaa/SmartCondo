import {
  Ticket,
  TicketComment,
  TicketTimelineItem,
  PaginatedResult,
} from "@/types";

const mockTickets: Ticket[] = [
  {
    id: "T-14582",
    category: "Plumbing",
    title: "Plumbing Issue: Leaky Faucet in Master Bathroom",
    description: "The faucet in the master bathroom has been dripping constantly.",
    priority: "high",
    status: "in_progress",
    building: "Tower A",
    unitNumber: "12A",
    residentId: "user-1",
    residentName: "Olivia Chen",
    createdAt: "2024-06-15T09:32:00.000Z",
    updatedAt: "2024-06-16T14:15:00.000Z",
  },
  {
    id: "T-14583",
    category: "HVAC",
    title: "AC Unit Not Cooling",
    description: "The air conditioning unit is running but not cooling the apartment.",
    priority: "normal",
    status: "resolved",
    building: "Tower B",
    unitNumber: "502",
    residentId: "user-2",
    residentName: "Jane Doe",
    createdAt: "2023-10-24T10:00:00.000Z",
    updatedAt: "2023-10-24T17:00:00.000Z",
  },
  {
    id: "T-14584",
    category: "Electrical",
    title: "Lobby light fixture is flickering",
    description: "One of the main light fixtures in the lobby is flickering.",
    priority: "normal",
    status: "open",
    building: "Tower A",
    commonArea: "Lobby",
    residentId: "user-3",
    residentName: "Admin",
    createdAt: "2023-10-27T11:00:00.000Z",
    updatedAt: "2023-10-27T11:00:00.000Z",
  },
];

const mockTimeline: TicketTimelineItem[] = [
  {
    id: "tl-1",
    title: "Status changed to In Progress",
    actorName: "John Doe",
    createdAt: "2024-06-16T14:15:00.000Z",
  },
  {
    id: "tl-2",
    title: "Maintenance visit scheduled",
    actorName: "Bldg Admin",
    createdAt: "2024-06-16T14:00:00.000Z",
    details: "Scheduled for June 16, 2024, 2:00 PM",
  },
  {
    id: "tl-3",
    title: "Assigned to Maintenance Team (John Doe)",
    actorName: "Bldg Admin",
    createdAt: "2024-06-15T09:45:00.000Z",
  },
  {
    id: "tl-4",
    title: "Ticket created by Resident",
    actorName: "Olivia Chen",
    createdAt: "2024-06-15T09:32:00.000Z",
  },
];

const mockComments: TicketComment[] = [];

export const getTickets = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Ticket>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const data = mockTickets.slice(start, end);
      resolve({
        data,
        page,
        pageSize,
        total: mockTickets.length,
      });
    }, 500);
  });
};

export const getTicketById = async (
  id: string
): Promise<Ticket | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTickets.find((t) => t.id === id));
    }, 300);
  });
};

export const getTicketTimeline = async (
  ticketId: string
): Promise<TicketTimelineItem[]> => {
  console.log("Fetching timeline for ticket:", ticketId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTimeline);
    }, 300);
  });
};

export const getTicketComments = async (
  ticketId: string
): Promise<TicketComment[]> => {
  console.log("Fetching comments for ticket:", ticketId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockComments);
    }, 300);
  });
};

export const createTicket = async (
  ticketData: Omit<Ticket, "id" | "createdAt" | "updatedAt" | "residentName">
): Promise<Ticket> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTicket: Ticket = {
        ...ticketData,
        id: `T-${Math.floor(Math.random() * 100000)}`,
        residentName: "New User", // Placeholder
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockTickets.unshift(newTicket);
      resolve(newTicket);
    }, 700);
  });
};
