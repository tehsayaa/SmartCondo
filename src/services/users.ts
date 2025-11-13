import { User } from "@/types";

const mockUsers: User[] = [
  {
    id: "user-1",
    role: "resident",
    fullName: "Olivia Chen",
    email: "olivia.chen@example.com",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-hQjBDpkLR9um2HzZvSHxL6URuu0OjSIdppSmWHHUHANFhbEDQ028QGHVm5WwEQ49CGCi9Wz_maE-hjOpA124Ln8OIn9XQigkPzfndQaY8foIJT7KanATzW9wOEKRh3eRQR_BP6NLlTl34w219hsrueZUEY7smxOlOLuOh4ViFHL2ddDcDYFJ_ra-MCFZaWWQjeExpBmi0XiA3nP2_8DQVttFQVtJdg9-d_TVE9-8rk-rzd2xgaevqPvdFKGZCK_ULowl5Ldazhz",
    languagePreference: "en",
    units: [
      {
        id: "unit-1",
        building: "Tower A",
        unitNumber: "12A",
        isPrimary: true,
      },
    ],
  },
  {
    id: "user-2",
    role: "resident",
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcBUtQ01nG5tPJACcEbs1wqV9lX0mtqSfWj-yIYyOM-S7975ostPpoQBdwpv82jAbpWBMUiq3Qv_uZR9GpS2EJQFErPx0SeS17fFcVAqxUEWlNVT2SKYZAiDHE-V7U9i4qeWKiHnvT6nO-dMH1BP5G5rfE-D5AJjBHfklok5J3qpMmpBfIYiSR-9h9wHIbJ5gzdSVso1gjunyxc8AhVyJ5W9GBwL6KqRBV193m3-llVviQM6xqB7TrujSDuxAi_5rcBuGQhnVF-hS5",
    languagePreference: "en",
    units: [
      {
        id: "unit-2",
        building: "Tower B",
        unitNumber: "502",
        isPrimary: true,
      },
    ],
  },
];

export const login = async (
  email: string,
  pass: string
): Promise<{ user: User; token: string }> => {
  console.log(`Attempting login for ${email} with password ${pass}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email === email);
      if (user && pass === "password") {
        // Simulate successful login
        resolve({ user, token: "mock-jwt-token" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

export const forgotPassword = async (email: string): Promise<{ success: true }> => {
  console.log(`Sending password reset link to ${email}`);
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email === email);
       if (user) {
        resolve({ success: true });
      } else {
        // Still resolve to prevent email enumeration
        resolve({ success: true });
      }
    }, 1000);
  });
};

export const getAuthenticatedUser = async (): Promise<User | null> => {
  // In a real app, you'd verify a token here.
  // For the mock, we'll just return the first user.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers[0]);
    }, 200);
  });
};
