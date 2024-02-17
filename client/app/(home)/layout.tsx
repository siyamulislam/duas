import CategoriesSection from "@/components/home-design/category-section";
import Navbar from "@/components/nav/nav-bar";
import LeftSidebar from "@/components/sidebar/leftside-bar";
import RightSidebar from "@/components/sidebar/rightside-bar";

import React from "react";
const LayoutDesign = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-primaryColor relative w-full">
      <Navbar />
      <div className="flex justify-between relative">
        <LeftSidebar />
        <section className="relative flex min-h-screen flex-1 flex-col max-w-full overflow-x-hidden">
          <div className="sm:pl-9 lg:pl-[3rem] w-full max-w-[1160px]">
            <div className="flex gap-4 px-1.5 sm:px-4 flex-col sm:flex-row md:max-h-screen">
              <CategoriesSection />
              <div className="pt-16 sm:pt-20">{children}</div>
            </div>
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default LayoutDesign;
