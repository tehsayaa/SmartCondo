import { Announcement, PaginatedResult } from "@/types";

const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Emergency Water Shut-off Notice",
    shortDescription:
      "Urgent: Water will be shut off today from 2 PM to 4 PM for emergency pipe repairs in the main building.",
    category: "Maintenance",
    priority: "emergency",
    bodyHtml: `<p>Dear Residents,</p><p>Please be advised that there will be a scheduled maintenance of the main water line for the entire building. This is essential work to ensure the long-term reliability of our water supply.</p><p><strong>Date:</strong> Friday, July 28, 2024<br/><strong>Time:</strong> 9:00 AM to 5:00 PM</p><p>During this period, there will be a complete water shutdown. Please make the necessary arrangements to store water for your essential needs. We recommend:</p><ul><li>Storing water for drinking, cooking, and sanitation.</li><li>Completing any water-dependent tasks (like laundry or dishwashing) before 9:00 AM.</li><li>Ensuring all taps are turned off to prevent flooding when the water supply is restored.</li></ul><p>We understand this is an inconvenience and appreciate your cooperation. This preventative maintenance is crucial to avoid more significant, unplanned disruptions in the future. For more details on why this is necessary, you can read the <a href="#">Chief Engineer's report</a>.</p><p>Thank you for your understanding.</p>`,
    authorName: "Condo Administration",
    publishedAt: "2024-07-22T14:00:00.000Z",
    isRead: false,
    attachments: [
      {
        id: "attach1",
        fileName: "Official_Notice.pdf",
        url: "#",
        type: "pdf",
      },
    ],
  },
  {
    id: "2",
    title: "Annual Fire Alarm System Testing",
    shortDescription:
      "Please be advised that the annual fire alarm testing will take place on Friday, July 26th, between 10 AM and 1 PM.",
    category: "Maintenance",
    priority: "high",
    bodyHtml: "<p>Details about the fire alarm testing.</p>",
    authorName: "Condo Administration",
    publishedAt: "2024-07-20T10:00:00.000Z",
    isRead: true,
  },
  {
    id: "3",
    title: "Community BBQ & Pool Party",
    shortDescription:
      "Join us for our annual summer BBQ! We'll have food, music, and fun for the whole family.",
    category: "Events",
    priority: "normal",
    bodyHtml: "<p>More details about the BBQ party.</p>",
    authorName: "Social Committee",
    publishedAt: "2024-07-18T12:00:00.000Z",
    isRead: true,
  },
  {
    id: "4",
    title: "Reminder: New Recycling Rules",
    shortDescription:
      "This is a friendly reminder about the new recycling guidelines that started this month.",
    category: "Rules",
    priority: "normal",
    bodyHtml: "<p>Please review the new recycling guidelines.</p>",
    authorName: "Condo Administration",
    publishedAt: "2024-07-15T09:00:00.000Z",
    isRead: false,
  },
];

export const getAnnouncements = async (
  page = 1,
  pageSize = 10
): Promise<PaginatedResult<Announcement>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const data = mockAnnouncements.slice(start, end);
      resolve({
        data,
        page,
        pageSize,
        total: mockAnnouncements.length,
      });
    }, 500);
  });
};

export const getAnnouncementById = async (
  id: string
): Promise<Announcement | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAnnouncements.find((a) => a.id === id));
    }, 300);
  });
};

export const getAiSummary = async (announcementId: string): Promise<string> => {
  console.log("Fetching AI summary for announcement:", announcementId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "The building's main water line will be shut down for maintenance on Friday, July 28th, from 9 AM to 5 PM. All residents will be without water during this time. It is advised to store water for essential needs before 9 AM on Friday."
      );
    }, 1000);
  });
};
