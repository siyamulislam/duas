import Link from "next/link";
import { settings } from "@/constants";
import ShowIcon from "../shared/show-icon";
import { cn } from "@/lib/utils";
import NightMode from "../shared/night-mode";

const RightSidebar = async () => {
  return (
    <div className="sticky z-20 bg-white text-black right-5 max-h-[80vh] h-[80vh] shadow-md  flex-col mt-24 py-7 rounded-3xl px-2.5 w-[270px] hidden xl:flex">
      <div>
        <h2 className="font-semibold text-center ">Settings</h2>
        <div className="flex flex-col pt-5 gap-3.5 ">
          {settings.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex gap-2 items-center w-full bg-secondaryColor rounded-md px-2.5 py-1.5 last:text-secondary_green  last:font-extrabold last:border-l-4 last:border-secondary_green"
            >
              <ShowIcon icon={item.icon} />
              <p
                className={cn(item.id === 114 ? "font-medium" : "text-gray-500 ","text-sm hover:text-black")}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <NightMode />
      </div>
    </div>
  );
};

export default RightSidebar;
