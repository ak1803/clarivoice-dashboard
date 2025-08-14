import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface CallLog {
  callId: string;
  agent: string;
  customer: string;
  status: "Ongoing" | "Completed" | "Missed";
  duration: string;
}

const callLogs: CallLog[] = [
  { callId: "#12334", agent: "Alex", customer: "Sarah", status: "Ongoing", duration: "04:32" },
  { callId: "#12334", agent: "Alex", customer: "Sarah", status: "Ongoing", duration: "04:32" },
  { callId: "#12334", agent: "Alex", customer: "Sarah", status: "Ongoing", duration: "04:32" },
  { callId: "#12334", agent: "Alex", customer: "Sarah", status: "Ongoing", duration: "04:32" },
  { callId: "#12334", agent: "Alex", customer: "Sarah", status: "Ongoing", duration: "04:32" },
];

interface FilterDropdownProps {
  label: string;
  options: string[];
  variant?: "grouped" | "standalone";
}

const FilterDropdown = ({ label, options, variant = "standalone" }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClasses = variant === "grouped"
    ? "flex items-center justify-between gap-2 py-3 hover:bg-clarivoice-white-15/10 transition-colors cursor-pointer min-h-[44px] w-full"
    : "flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-3 border border-clarivoice-white-15 rounded-lg cursor-pointer hover:bg-clarivoice-white-15/10 transition-colors min-h-[44px]";

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={buttonClasses}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-clarivoice-white-70 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] truncate flex-1 min-w-0">{selected}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={cn("text-clarivoice-white-70 transition-transform flex-shrink-0", isOpen && "rotate-180")}
        >
          <path
            d="M2 3L6 6L10 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-clarivoice-card border border-clarivoice-white-15 rounded-lg shadow-lg z-50 animate-fade-in max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-clarivoice-white-70 hover:bg-clarivoice-white-15/20 hover:text-white cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ActionIcons = () => (
  <div className="flex items-center gap-6">
    {/* View Icon */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-clarivoice-white-70 cursor-pointer hover:text-white transition-colors">
      <path
        d="M11.685 9C11.685 10.485 10.485 11.685 9 11.685C7.515 11.685 6.315 10.485 6.315 9C6.315 7.515 7.515 6.315 9 6.315C10.485 6.315 11.685 7.515 11.685 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.2025C11.6475 15.2025 14.115 13.6425 15.8325 10.9425C16.5075 9.885 16.5075 8.1075 15.8325 7.05C14.115 4.35 11.6475 2.79 9 2.79C6.3525 2.79 3.885 4.35 2.1675 7.05C1.4925 8.1075 1.4925 9.885 2.1675 10.9425C3.885 13.6425 6.3525 15.2025 9 15.2025Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    
    {/* Edit Icon */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-clarivoice-white-70 cursor-pointer hover:text-white transition-colors">
      <path
        d="M9.945 2.59994L3.7875 9.11744C3.555 9.36494 3.33 9.85244 3.285 10.1899L3.0075 12.6199C2.91 13.4974 3.54 14.0974 4.41 13.9474L6.825 13.5349C7.1625 13.4749 7.635 13.2274 7.8675 12.9724L14.025 6.45494C15.09 5.32994 15.57 4.04744 13.9125 2.47994C12.2625 0.927443 11.01 1.47494 9.945 2.59994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9175 3.6875C9.24 5.7575 10.92 7.34 13.005 7.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 16.2H15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

interface CallLogsTableProps {
  className?: string;
}

export function CallLogsTable({ className }: CallLogsTableProps) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      {/* Filters */}
      <div className="animate-fade-in">
        {/* Mobile/Tablet View - Grouped Layout */}
        <div className="lg:hidden space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Main Filters Group */}
            <div className="flex-1 border border-clarivoice-white-15 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="border-b sm:border-b-0 sm:border-r border-clarivoice-white-15">
                  <div className="p-3">
                    <FilterDropdown
                      label="All Agents"
                      variant="grouped"
                      options={[
                        "All Agents",
                        "Alex Thompson",
                        "Sarah Johnson",
                        "Mike Davis",
                        "Emma Wilson",
                        "John Smith"
                      ]}
                    />
                  </div>
                </div>
                <div className="border-b sm:border-b-0 sm:border-r border-clarivoice-white-15">
                  <div className="p-3">
                    <FilterDropdown
                      label="Status: Ongoing"
                      variant="grouped"
                      options={[
                        "Status: All",
                        "Status: Ongoing",
                        "Status: Completed",
                        "Status: Missed",
                        "Status: On Hold"
                      ]}
                    />
                  </div>
                </div>
                <div>
                  <div className="p-3">
                    <FilterDropdown
                      label="Duration: < 10 min"
                      variant="grouped"
                      options={[
                        "Duration: All",
                        "Duration: < 5 min",
                        "Duration: < 10 min",
                        "Duration: 10-30 min",
                        "Duration: > 30 min"
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Records Filter - Separate and smaller */}
            <div className="w-full sm:w-32">
              <FilterDropdown
                label="Records: 4"
                options={[
                  "Records: 4",
                  "Records: 10",
                  "Records: 25",
                  "Records: 50",
                  "Records: 100"
                ]}
              />
            </div>
          </div>
        </div>

        {/* Desktop View - Grouped Layout as per Figma */}
        <div className="hidden lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center border border-clarivoice-white-15 rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-r border-clarivoice-white-15">
              <FilterDropdown
                label="All Agents"
                variant="grouped"
                options={[
                  "All Agents",
                  "Alex Thompson",
                  "Sarah Johnson",
                  "Mike Davis",
                  "Emma Wilson",
                  "John Smith"
                ]}
              />
            </div>
            <div className="px-4 py-3 border-r border-clarivoice-white-15">
              <FilterDropdown
                label="Status: Ongoing"
                variant="grouped"
                options={[
                  "Status: All",
                  "Status: Ongoing",
                  "Status: Completed",
                  "Status: Missed",
                  "Status: On Hold"
                ]}
              />
            </div>
            <div className="px-4">
              <FilterDropdown
                label="Duration: < 10 min"
                variant="grouped"
                options={[
                  "Duration: All",
                  "Duration: < 5 min",
                  "Duration: < 10 min",
                  "Duration: 10-30 min",
                  "Duration: > 30 min"
                ]}
              />
            </div>
          </div>

          {/* Records Filter - Separate and aligned right */}
          <div className="w-auto">
            <FilterDropdown
              label="Records: 4"
              options={[
                "Records: 4",
                "Records: 10",
                "Records: 25",
                "Records: 50",
                "Records: 100"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-clarivoice-white-15 rounded-lg overflow-hidden animate-scale-in">
        <div className="overflow-x-auto lg:overflow-x-visible">
          <div className="min-w-[800px] lg:min-w-0 w-full">
            <div className="flex bg-clarivoice-card">
          {/* Headers */}
          <div className="w-[120px] lg:w-[193px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Call ID</span>
          </div>
          <div className="w-[100px] lg:w-[194px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Agent</span>
          </div>
          <div className="w-[110px] lg:w-[194px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Customer</span>
          </div>
          <div className="w-[120px] lg:w-[194px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Status</span>
          </div>
          <div className="w-[100px] lg:w-[194px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Duration</span>
          </div>
          <div className="flex-1 min-w-[100px] flex items-center justify-center px-1.5 lg:px-2.5 py-4 lg:py-6">
            <span className="text-white text-sm lg:text-base font-medium font-['Plus_Jakarta_Sans']">Actions</span>
          </div>
        </div>

        {/* Rows */}
        {callLogs.map((log, index) => (
          <div key={index} className="flex">
            <div className="w-[193px] flex items-center justify-center px-2.5 py-4">
              <span className="text-clarivoice-white-70 text-base font-['Plus_Jakarta_Sans']">
                {log.callId}
              </span>
            </div>
            <div className="w-[194px] flex items-center justify-center px-2.5 py-4">
              <span className="text-clarivoice-white-70 text-base font-['Plus_Jakarta_Sans']">
                {log.agent}
              </span>
            </div>
            <div className="w-[194px] flex items-center justify-center px-2.5 py-4">
              <span className="text-clarivoice-white-70 text-base font-['Plus_Jakarta_Sans']">
                {log.customer}
              </span>
            </div>
            <div className="w-[194px] flex items-center justify-center px-2.5 py-4">
              <div className="w-[97px] px-3 py-2 bg-clarivoice-primary-10 rounded-full flex items-center justify-center">
                <span className="text-clarivoice-primary text-sm font-['Plus_Jakarta_Sans']">
                  {log.status}
                </span>
              </div>
            </div>
            <div className="w-[194px] flex items-center justify-center px-2.5 py-4">
              <span className="text-clarivoice-white-70 text-base font-['Plus_Jakarta_Sans']">
                {log.duration}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center px-2.5 py-4">
              <ActionIcons />
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}
