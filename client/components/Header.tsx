import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <div className={cn("flex items-center justify-between px-5 py-6 border-b border-clarivoice-white-15 h-[90px]", className)}>
      {/* Search Bar */}
      <div className="flex items-center gap-3 px-4 md:px-5 py-3 bg-clarivoice-card rounded-lg w-full max-w-[350px] md:w-auto md:min-w-[350px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-clarivoice-primary flex-shrink-0">
          <path
            d="M9.33333 16.3334C13.647 16.3334 17.3333 12.6471 17.3333 8.3334C17.3333 4.0197 13.647 0.333374 9.33333 0.333374C5.01952 0.333374 1.33333 4.0197 1.33333 8.3334C1.33333 12.6471 5.01952 16.3334 9.33333 16.3334Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6199 16.7932C17.9732 17.8599 18.7799 17.9666 19.3999 17.0332C19.9665 16.1799 19.5932 15.4799 18.5665 15.4799C17.8065 15.4732 17.3799 16.0666 17.6199 16.7932Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-clarivoice-white-70 text-sm font-['Plus_Jakarta_Sans'] hidden md:block">
          Search calls by ID, agent, or customer
        </span>
        <span className="text-clarivoice-white-70 text-sm font-['Plus_Jakarta_Sans'] md:hidden">
          Search...
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-end gap-4 md:gap-6">
        {/* Notification */}
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
            <path
              d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13112C12.5979 2.19344 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19344 6.46447 3.13112C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42113 18.2537 9.16816 18.1079C8.91519 17.9622 8.70485 17.7526 8.55835 17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-clarivoice-primary"></div>
          <div className="flex flex-col">
            <span className="text-white text-base font-bold font-['Plus_Jakarta_Sans']">
              Support Center
            </span>
            <span className="text-clarivoice-white-70 text-sm font-['Mulish']">
              Agent - Alex
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
