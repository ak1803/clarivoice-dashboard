import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  className?: string;
}

const TrendIcon = () => (
  <svg width="12" height="6" viewBox="0 0 14 7" fill="none">
    <path
      d="M5.125 3.125L5.42603 2.8616L5.17121 2.57037L4.8717 2.81542L5.125 3.125ZM7.75 6.125L7.44897 6.3884L7.74043 6.72149L8.04242 6.39793L7.75 6.125ZM13.3998 0.486215C13.3921 0.265432 13.207 0.0926244 12.9862 0.100238L9.38835 0.224302C9.16757 0.231915 8.99476 0.417066 9.00238 0.637849C9.00999 0.858632 9.19514 1.03144 9.41592 1.02383L12.614 0.913547L12.7243 4.11165C12.7319 4.33243 12.9171 4.50524 13.1378 4.49762C13.3586 4.49001 13.5314 4.30486 13.5238 4.08408L13.3998 0.486215ZM1 6.5L1.2533 6.80958L5.37829 3.43458L5.125 3.125L4.8717 2.81542L0.746705 6.19042L1 6.5ZM5.125 3.125L4.82397 3.3884L7.44897 6.3884L7.75 6.125L8.05103 5.8616L5.42603 2.8616L5.125 3.125ZM7.75 6.125L8.04242 6.39793L13.2924 0.772927L13 0.5L12.7076 0.227073L7.45758 5.85207L7.75 6.125Z"
      fill="currentColor"
    />
  </svg>
);

const ChartSvg = () => (
  <svg width="115" height="34" viewBox="0 0 117 35" fill="none">
    <path
      d="M1.33337 18.044C3.02601 20.5376 8.14376 25.3251 15.0736 24.5272C23.736 23.5298 21.0477 18.044 26.4243 18.044C31.8009 18.044 31.8009 21.7843 35.9827 21.7843C40.1645 21.7843 36.8788 14.0544 42.2555 14.3038C47.6321 14.5531 43.749 30.0129 53.0087 29.7636C62.2684 29.5142 59.2814 9.06748 67.0477 9.56618C74.8139 10.0649 67.9438 16.0491 73.6191 18.044C79.2944 20.0389 76.6061 27.7688 81.9827 27.7688C87.3593 27.7688 85.2684 15.0519 93.3334 15.0519C101.398 15.0519 98.1281 24.6245 105.58 25.0259C114.84 25.5246 105.58 1.33765 116.333 1.33765"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M15.0736 24.5272C8.14376 25.3251 3.02601 20.5376 1.33337 18.044V35H116.333V1.33765C105.58 1.33765 114.84 25.5246 105.58 25.0259C98.1281 24.6245 101.398 15.0519 93.3334 15.0519C85.2684 15.0519 87.3593 27.7688 81.9827 27.7688C76.6061 27.7688 79.2944 20.0389 73.6191 18.044C67.9438 16.0491 74.8139 10.0649 67.0477 9.56618C59.2814 9.06748 62.2684 29.5142 53.0087 29.7636C43.749 30.0129 47.6321 14.5531 42.2555 14.3038C36.8788 14.0544 40.1645 21.7843 35.9827 21.7843C31.8009 21.7843 31.8009 18.044 26.4243 18.044C21.0477 18.044 23.736 23.5298 15.0736 24.5272Z"
      fill="url(#paint0_linear_7_665)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7_665"
        x1="69.4373"
        y1="-0.407808"
        x2="69.4373"
        y2="34.7506"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity="0.25" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export function MetricCard({ title, value, change, trend, className }: MetricCardProps) {
  return (
    <div className={cn("flex flex-col gap-2 sm:gap-2.5 p-3 sm:p-4 bg-clarivoice-card rounded-md w-full sm:w-auto sm:flex-1 lg:w-[376px] animate-scale-in hover:scale-105 transition-transform duration-200", className)}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-clarivoice-white-70 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans']">
          {title}
        </span>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="text-clarivoice-white-70 sm:w-[18px] sm:h-[18px] flex-shrink-0">
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 10.5V4.5H7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col min-w-0">
          <span className="text-white text-2xl sm:text-3xl lg:text-[40px] font-bold font-['Plus_Jakarta_Sans'] leading-none">
            {value}
          </span>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-clarivoice-primary text-xs font-['Plus_Jakarta_Sans'] truncate">
              {change}
            </span>
            <div className="text-clarivoice-primary flex-shrink-0">
              <TrendIcon />
            </div>
          </div>
        </div>
        <div className="text-clarivoice-primary flex-shrink-0 ml-2">
          <div className="w-16 sm:w-20 lg:w-[115px]">
            <ChartSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
