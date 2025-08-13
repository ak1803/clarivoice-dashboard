import { cn } from "@/lib/utils";

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

const FilterDropdown = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 px-4 py-3 border border-clarivoice-white-15 rounded-lg">
    <span className="text-clarivoice-white-70 text-sm font-['Plus_Jakarta_Sans']">{label}</span>
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-clarivoice-white-70">
      <path
        d="M2 3L6 6L10 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

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
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center animate-fade-in">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 border border-clarivoice-white-15 rounded-lg overflow-hidden">
          <FilterDropdown label="All Agents" />
          <div className="border-l border-clarivoice-white-15 hidden sm:block">
            <FilterDropdown label="Status: Ongoing" />
          </div>
          <div className="border-l border-clarivoice-white-15 hidden sm:block">
            <FilterDropdown label="Duration: < 10 min" />
          </div>
        </div>
        <div className="border border-clarivoice-white-15 rounded-lg">
          <FilterDropdown label="Records: 4" />
        </div>
      </div>

      {/* Table */}
      <div className="border border-clarivoice-white-15 rounded-lg overflow-hidden animate-scale-in">
        <div className="overflow-x-auto lg:overflow-x-visible">
          <div className="min-w-[1163px] lg:min-w-0">
            <div className="flex bg-clarivoice-card">
          {/* Headers */}
          <div className="w-[193px] flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Call ID</span>
          </div>
          <div className="w-[194px] flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Agent</span>
          </div>
          <div className="w-[194px] flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Customer</span>
          </div>
          <div className="w-[194px] flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Status</span>
          </div>
          <div className="w-[194px] flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Duration</span>
          </div>
          <div className="flex-1 flex items-center justify-center px-2.5 py-6">
            <span className="text-white text-base font-medium font-['Plus_Jakarta_Sans']">Actions</span>
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
