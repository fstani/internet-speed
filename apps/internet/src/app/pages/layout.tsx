import React from "react";
import { InternetFooter } from "../components/footer/footer";
import { InternetSidebar } from "../components/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <InternetSidebar />
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <header className="header bg-white shadow py-4 px-4">
          <div className="header-content flex items-center flex-row">
            <div className="flex ml-auto">
              <a href="#" className="flex flex-row items-center">
                <img
                  src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                  alt="Normal"
                  className="h-10 w-10 bg-gray-200 border rounded-full"
                />
                <span className="flex flex-col ml-2">
                  <span className="truncate w-20 font-semibold tracking-wide leading-none">John Doe</span>
                  <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Manager</span>
                </span>
              </a>
            </div>
          </div>
        </header>
        <div className="main-content flex flex-col flex-grow p-4">
          {children}
        </div>
        <InternetFooter />
      </main>
    </div>
  )
}

export default Layout
