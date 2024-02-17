"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShowIcon from "../shared/show-icon";
const LeftSidebar = () => {
  const NavContent = () => {
    return (
      <section className="flex flex-col gap-4 w-full items-center h-full">
        {sidebarLinks?.map((link: any) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className={cn(
                " flex items-center w-fit shadow-none  hover:ring-2 rounded-full cursor-pointer "
              )}
            >
              <ShowIcon icon={link.icon} />
            </Link>
          );
        })}
      </section>
    );
  };
  return (
    <div className="hidden sm:sticky left-7 top-0 sm:flex flex-col justify-between bottom-0 max-h-[95vh] w-fit items-center z-20">
      <div className=" flex flex-col h-full items-center w-full justify-between gap-4 py-4 relative top-5 bg-white rounded-3xl">
        <Image src="/assets/icons/logo.svg" width={73} height={73} alt="logo" />

        <div>
          <NavContent />
        </div>
        <div className="bg-secondary_green p-2 rounded-xl ">
          <Image
            src="/assets/icons/support.svg"
            width={25}
            height={25}
            alt="support"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
