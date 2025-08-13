import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.3083 15.275C18.3083 15.575 18.2416 15.8833 18.1 16.1833C17.9583 16.4833 17.775 16.7666 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1666 18.0166C15.6666 18.225 15.125 18.3333 14.5416 18.3333C13.6916 18.3333 12.7833 18.1333 11.825 17.725C10.8666 17.3166 9.90829 16.7666 8.95829 16.075C7.99996 15.375 7.09163 14.6 6.22496 13.7416C5.36663 12.875 4.59163 11.9666 3.89996 11.0166C3.21663 10.0666 2.66663 9.11663 2.26663 8.17496C1.86663 7.22496 1.66663 6.31663 1.66663 5.44996C1.66663 4.88329 1.76663 4.34163 1.96663 3.84163C2.16663 3.33329 2.48329 2.86663 2.92496 2.44996C3.45829 1.92496 4.04163 1.66663 4.65829 1.66663C4.89163 1.66663 5.12496 1.71663 5.33329 1.81663C5.54996 1.91663 5.74163 2.06663 5.89163 2.28329L7.82496 5.00829C7.97496 5.21663 8.08329 5.40829 8.15829 5.59163C8.23329 5.76663 8.27496 5.94163 8.27496 6.09996C8.27496 6.29996 8.21663 6.49996 8.09996 6.69163C7.99163 6.88329 7.83329 7.08329 7.63329 7.28329L6.99996 7.94163C6.90829 8.03329 6.86663 8.14163 6.86663 8.27496C6.86663 8.34163 6.87496 8.39996 6.89163 8.46663C6.91663 8.53329 6.94163 8.58329 6.95829 8.63329C7.10829 8.90829 7.36663 9.26663 7.73329 9.69996C8.10829 10.1333 8.50829 10.575 8.94163 11.0166C9.39163 11.4583 9.82496 11.8666 10.2666 12.2416C10.7 12.6083 11.0583 12.8583 11.3416 13.0083C11.3833 13.025 11.4333 13.05 11.4916 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8416 13.1083 11.95 13.0583 12.0416 12.9666L12.675 12.3416C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4666 11.7583 13.6583 11.7 13.8666 11.7C14.025 11.7 14.1916 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9916 14.9583 12.1333L17.7166 14.0916C17.9333 14.2416 18.0833 14.4166 18.175 14.625C18.2583 14.8333 18.3083 15.0416 18.3083 15.275Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
        <path d="M15.4167 7.50004C15.4167 7.00004 15.025 6.23337 14.4417 5.60837C13.9083 5.03337 13.2 4.58337 12.5 4.58337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3333 7.49996C18.3333 4.27496 15.725 1.66663 12.5 1.66663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Calls",
    active: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16.6667 5.86663V14.1333C16.6667 15.4 16.55 16.3 16.25 16.9416C16.25 16.95 16.2417 16.9666 16.2333 16.975C16.05 17.2083 15.8083 17.325 15.525 17.325C15.0833 17.325 14.55 17.0333 13.975 16.4166C13.2917 15.6833 12.2416 15.7416 11.6416 16.5416L10.8 17.6583C10.4667 18.1083 10.025 18.3333 9.58333 18.3333C9.14167 18.3333 8.69998 18.1083 8.36665 17.6583L7.51668 16.5333C6.92502 15.7416 5.88333 15.6833 5.19999 16.4083L5.19165 16.4166C4.24998 17.425 3.41668 17.575 2.93335 16.975C2.92502 16.9666 2.91667 16.95 2.91667 16.9416C2.61667 16.3 2.5 15.4 2.5 14.1333V5.86663C2.5 4.59996 2.61667 3.69996 2.91667 3.05829C2.91667 3.04996 2.91668 3.04163 2.93335 3.03329C3.40835 2.42496 4.24998 2.57496 5.19165 3.58329L5.19999 3.59163C5.88333 4.31663 6.92502 4.25829 7.51668 3.46663L8.36665 2.34163C8.69998 1.89163 9.14167 1.66663 9.58333 1.66663C10.025 1.66663 10.4667 1.89163 10.8 2.34163L11.6416 3.45829C12.2416 4.25829 13.2917 4.31663 13.975 3.58329C14.55 2.96663 15.0833 2.67496 15.525 2.67496C15.8083 2.67496 16.05 2.79996 16.2333 3.03329C16.25 3.04163 16.25 3.04996 16.25 3.05829C16.55 3.69996 16.6667 4.59996 16.6667 5.86663Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 8.54163H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 11.4584H11.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Tickets",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1.66663 18.3334H18.3333" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.125 3.33329V18.3333H11.875V3.33329C11.875 2.41663 11.5 1.66663 10.375 1.66663H9.625C8.5 1.66663 8.125 2.41663 8.125 3.33329Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 8.33329V18.3333H5.83333V8.33329C5.83333 7.41663 5.5 6.66663 4.5 6.66663H3.83333C2.83333 6.66663 2.5 7.41663 2.5 8.33329Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1666 12.5V18.3334H17.5V12.5C17.5 11.5834 17.1666 10.8334 16.1666 10.8334H15.5C14.5 10.8334 14.1666 11.5834 14.1666 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Performance",
  },
  {
    icon: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.66663 10.7334V9.26669C1.66663 8.40003 2.37496 7.68336 3.24996 7.68336C4.75829 7.68336 5.37496 6.6167 4.61663 5.30836C4.18329 4.55836 4.44163 3.58336 5.19996 3.15003L6.64163 2.32503C7.29996 1.93336 8.14996 2.1667 8.54163 2.82503L8.63329 2.98336C9.38329 4.2917 10.6166 4.2917 11.375 2.98336L11.4666 2.82503C11.8583 2.1667 12.7083 1.93336 13.3666 2.32503L14.8083 3.15003C15.5666 3.58336 15.825 4.55836 15.3916 5.30836C14.6333 6.6167 15.25 7.68336 16.7583 7.68336C17.625 7.68336 18.3416 8.39169 18.3416 9.26669V10.7334C18.3416 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3834 15.3916 14.6917C15.825 15.45 15.5666 16.4167 14.8083 16.85L13.3666 17.675C12.7083 18.0667 11.8583 17.8334 11.4666 17.175L11.375 17.0167C10.625 15.7084 9.39163 15.7084 8.63329 17.0167L8.54163 17.175C8.14996 17.8334 7.29996 18.0667 6.64163 17.675L5.19996 16.85C4.44163 16.4167 4.18329 15.4417 4.61663 14.6917C5.37496 13.3834 4.75829 12.3167 3.24996 12.3167C2.37496 12.3167 1.66663 11.6 1.66663 10.7334Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Settings",
  },
];

const bottomItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10.0998 10.65C10.0415 10.6417 9.9665 10.6417 9.8998 10.65C8.4331 10.6 7.2665 9.4 7.2665 7.925C7.2665 6.4167 8.4831 5.1917 9.9998 5.1917C11.5081 5.1917 12.7331 6.4167 12.7331 7.925C12.7248 9.4 11.5665 10.6 10.0998 10.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.6165 16.15C14.1332 17.5084 12.1665 18.3334 9.9998 18.3334C7.8332 18.3334 5.8665 17.5084 4.3832 16.15C4.4665 15.3667 4.9665 14.6 5.8582 14C8.1415 12.4834 11.8748 12.4834 14.1415 14C15.0332 14.6 15.5332 15.3667 15.6165 16.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 10C18.3333 5.3976 14.6023 1.6666 10 1.6666C5.3976 1.6666 1.6666 5.3976 1.6666 10C1.6666 14.6023 5.3976 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "My Profile",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.5337 12.1834L16.667 10.05L14.5337 7.9167" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.1332 10.05H16.6082" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.7998 16.6666C6.1165 16.6666 3.1332 14.1666 3.1332 10C3.1332 5.8333 6.1165 3.3333 9.7998 3.3333" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Logout",
    isLogout: true,
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col w-[237px] h-screen bg-clarivoice-bg", className)}>
      {/* Logo */}
      <div className="flex items-center px-5 py-6 border-r border-b border-clarivoice-white-15 h-[90px]">
        <h1 className="text-white text-[22px] font-bold font-['Plus_Jakarta_Sans']">
          Clarivoice
        </h1>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col border-r border-clarivoice-white-15">
        <div className="flex flex-col">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 px-5 py-6 text-clarivoice-white-70 hover:text-white transition-all duration-200 cursor-pointer hover:bg-clarivoice-white-15/10 hover:translate-x-1",
                item.active && "text-clarivoice-primary"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className="text-base font-medium font-['Plus_Jakarta_Sans']">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Items */}
        <div className="mt-auto border-t border-clarivoice-white-15">
          {bottomItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 px-5 py-5 text-clarivoice-white-70 hover:text-white transition-colors cursor-pointer",
                item.isLogout && "text-clarivoice-primary hover:text-clarivoice-primary"
              )}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className="text-base font-medium font-['Plus_Jakarta_Sans']">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
