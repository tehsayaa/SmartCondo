export type UserRole = "resident" | "bql" | "admin";

export interface Unit {
  id: string;
  building: string;
  tower?: string | null;
  floor?: string | null;
  unitNumber: string;
  isPrimary: boolean;
}

export interface User {
  id: string;
  role: UserRole;
  fullName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  languagePreference: "vi" | "en";
  units: Unit[]; // populated for residents
}

export type AnnouncementPriority = "normal" | "high" | "emergency";

export interface Announcement {
  id: string;
  title: string;
  shortDescription: string;
  category: string; // Maintenance, Policy, Event, etc.
  priority: AnnouncementPriority;
  bodyHtml: string; // or markdown
  authorName: string;
  publishedAt: string; // ISO string
  isRead?: boolean;
  attachments?: {
    id: string;
    fileName: string;
    url: string;
    type: "image" | "pdf" | "other";
  }[];
}

export interface AnnouncementReadStats {
  totalResidents: number;
  totalRead: number;
  percentageRead: number;
}

export type BookingStatus = "pending" | "approved" | "rejected" | "cancelled";

export interface Facility {
  id: string;
  name: string;
  description: string;
  maxCapacity?: number;
  rules?: string;
  requiresApproval: boolean;
  imageUrl?: string;
}

export interface Booking {
  id: string;
  facilityId: string;
  facilityName: string;
  residentId: string;
  residentName: string;
  unitLabel: string; // e.g. "Tower A • Unit 1204"
  startTime: string; // ISO
  endTime: string; // ISO
  participants?: number;
  purpose?: string;
  status: BookingStatus;
  rejectionReason?: string;
  createdAt: string;
}

export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";
export type TicketPriority = "normal" | "urgent";

export interface Ticket {
  id: string;
  category: string; // Plumbing, Electricity, etc.
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  building: string;
  floor?: string;
  unitNumber?: string;
  commonArea?: string;
  residentId: string;
  residentName: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketTimelineItem {
  id: string;
  title: string; // "Status changed to In Progress"
  actorName: string; // "John Doe"
  createdAt: string; // ISO
  details?: string; // optional extra info
}

export interface TicketComment {
  id: string;
  authorName: string;
  authorRole: UserRole;
  message: string;
  createdAt: string;
  isInternal: boolean; // true = BQL only
}

export interface PaginatedResult<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
}
