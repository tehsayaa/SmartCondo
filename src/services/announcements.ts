import { supabase } from "@/lib/supabaseClient";
import { Announcement, PaginatedResult } from "@/types";

// Helper to convert snake_case from DB to camelCase for the app
const toAnnouncement = (data: any): Announcement => ({
  id: data.id,
  title: data.title,
  shortDescription: data.short_description,
  bodyHtml: data.body_html,
  category: data.category,
  priority: data.priority,
  authorName: data.author_name,
  publishedAt: data.published_at,
  isRead: false, // Assuming 'isRead' status is managed client-side or in a separate table
});

export const getAnnouncements = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Announcement>> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("announcements")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false })
    .range(start, end);

  if (error) {
    console.error("Error fetching announcements:", error);
    throw new Error(error.message);
  }

  return {
    data: data.map(toAnnouncement),
    page,
    pageSize,
    total: count || 0,
  };
};

export const getAnnouncementById = async (
  id: string
): Promise<Announcement | undefined> => {
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching announcement ${id}:`, error);
    // Return undefined if not found, throw for other errors
    if (error.code === "PGRST116") return undefined;
    throw new Error(error.message);
  }

  return data ? toAnnouncement(data) : undefined;
};

export const getAiSummary = async (announcementId: string): Promise<string> => {
  console.log("Fetching AI summary for announcement:", announcementId);
  // This remains a mock for now, as there is no real AI backend endpoint.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "The building's main water line will be shut down for maintenance on Friday, July 28th, from 9 AM to 5 PM. All residents will be without water during this time. It is advised to store water for essential needs before 9 AM on Friday."
      );
    }, 1000);
  });
};
