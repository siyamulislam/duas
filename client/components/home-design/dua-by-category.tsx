import { DuaCategoriesType } from "@/app/type";
import Image from "next/image";

const DuaByCategory = ({cat}:DuaCategoriesType) => {
  return (
    <>
      <div className="flex gap-2">
        <Image src="/assets/icons/user.svg" width={40} height={40} alt="dua" />
        <div className="">
          <h3 className="text-sm text-semibold">{cat.cat_name_en}</h3>
          <p className="text-xs text-gray-500">
            Subcategory:{cat.no_of_subcat}
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <span>{cat.no_of_dua}</span>
        <span className="text-xs text-gray-500">duas</span>
      </div>
    </>
  );
};

export default DuaByCategory;
