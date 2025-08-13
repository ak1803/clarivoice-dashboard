import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <div className={cn("flex items-center justify-between px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-6 border-b border-clarivoice-white-15 min-h-[70px] sm:min-h-[80px] lg:h-[90px]", className)}>
      {/* Search Bar */}
      <div className="relative flex-1 max-w-[180px] sm:max-w-[280px] md:max-w-[350px] lg:w-auto lg:min-w-[350px]">
        <div className="absolute inset-y-0 left-3 sm:left-4 lg:left-5 flex items-center pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-clarivoice-primary sm:w-5 sm:h-5">
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
        </div>
        <input
          type="text"
          placeholder="Search calls by ID, agent, or customer"
          className="w-full bg-clarivoice-card rounded-lg pl-9 sm:pl-11 lg:pl-14 pr-3 sm:pr-4 lg:pr-5 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-['Plus_Jakarta_Sans'] placeholder:text-clarivoice-white-70 border-none outline-none focus:ring-2 focus:ring-clarivoice-primary/50 transition-all"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 ml-3 sm:ml-4">
        {/* Notification */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white sm:w-5 sm:h-5">
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
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-clarivoice-primary flex-shrink-0"></div>
          <div className="hidden sm:flex flex-col min-w-0">
            <span className="text-white text-sm lg:text-base font-bold font-['Plus_Jakarta_Sans'] truncate">
              Support Center
            </span>
            <span className="text-clarivoice-white-70 text-xs lg:text-sm font-['Mulish'] truncate">
              Agent - Alex
            </span>
          </div>
          {/* Mobile - Show only on small screens */}
          <div className="flex sm:hidden flex-col min-w-0">
            <span className="text-white text-xs font-bold font-['Plus_Jakarta_Sans'] truncate">
              Support
            </span>
            <span className="text-clarivoice-white-70 text-xs font-['Mulish'] truncate">
              Alex
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
