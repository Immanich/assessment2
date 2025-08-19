import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Bell, CircleUserRound, Mail, Moon, Search } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-black w-full">
        <div className="flex flex-row py-3 px-3 items-center border-b border-gray-700">
          <SidebarTrigger className="text-white" />
          <div className="relative max-w-md ml-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-500 cursor-pointer duration-200" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-10 py-1 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent text-white w-48"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 bg-gray-500 text-gray-300 hover:bg-gray-600 hover:bg-gray-200 duration-200 px-2 py-0.5 rounded-full text-xs cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                <span>K</span>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 flex flex-row items-center gap-3">
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-gray-200 duration-200">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-gray-200 duration-200">
            <Bell className="text-white w-5 h-5" />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-gray-200 duration-200">
            <Moon className="text-white w-5 h-5" />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-gray-200 duration-200">
            <CircleUserRound className="text-white w-5 h-5" />
          </div>
        </div>

        {/* Main content */}
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
}
