import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MetricCard } from "./MetricCard";
import { CallLogsTable } from "./CallLogsTable";
import { MobileSidebar } from "./MobileSidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DashboardProps {
  className?: string;
}

export function Dashboard({ className }: DashboardProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={cn("flex h-screen bg-clarivoice-bg overflow-hidden", className)}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block animate-slide-in-left">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="animate-fade-in">
          <Header
            onMenuToggle={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto animate-slide-in-up">
          <div className="max-w-[1164px] mx-auto space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Title Section */}
            <div className="space-y-2 animate-slide-in-up">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl font-bold font-['Plus_Jakarta_Sans']">
                Live Call Logs
              </h1>
              <p className="text-clarivoice-white-70 text-sm sm:text-base font-['Plus_Jakarta_Sans']">
                Monitor ongoing calls and agent performance in real-time.
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[19px]">
              <div className="animate-stagger-1">
                <MetricCard
                  title="Total Calls"
                  value="17"
                  change="5 Calls Extra"
                  trend="up"
                />
              </div>
              <div className="animate-stagger-2">
                <MetricCard
                  title="Average Duration"
                  value="06:45"
                  change="15% Duration"
                  trend="up"
                />
              </div>
              <div className="animate-stagger-3 sm:col-span-2 lg:col-span-1">
                <MetricCard
                  title="Resolve Today"
                  value="18"
                  change="2% Extra Resolve"
                  trend="up"
                />
              </div>
            </div>

            {/* Call Logs Table */}
            <div className="animate-slide-in-up">
              <CallLogsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
