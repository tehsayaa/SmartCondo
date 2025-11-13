import { getAuthenticatedUser } from "@/services/users";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const fetchedUser = await getAuthenticatedUser();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 w-full border-b border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">
                apartment
              </span>
              <span className="text-xl font-bold text-charcoal dark:text-white">
                Smart Condo
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative rounded-full p-2 text-text-secondary-light hover:bg-gray-200 dark:text-text-secondary-dark dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute right-1 top-1 block size-2.5 rounded-full bg-danger ring-2 ring-background-light dark:ring-background-dark"></span>
            </button>
            {loading ? (
              <div className="h-9 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                <img
                  alt={user.fullName}
                  className="size-9 rounded-full object-cover"
                  src={user.avatarUrl}
                />
                <div className="hidden sm:flex flex-col text-right">
                  <p className="text-sm font-semibold">{user.fullName}</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {user.role}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <main className="w-full flex-grow bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppShell;
