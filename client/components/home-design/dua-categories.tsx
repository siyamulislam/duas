"use client";
import { DuaCategoriesType, SubCategoriesItem } from "@/app/type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DuaByCategory from "./dua-by-category";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SubCategory from "./sub-category";

const DuaCategories: React.FC<DuaCategoriesType> = ({ cat }) => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<SubCategoriesItem[]>([]);

  const catId = parseInt(searchParams.get("cat") as string, 10);

  const newUrl = `/duas/${encodeURIComponent(
    cat.cat_name_en.replace(/'/g, "").replace(/\s+/g, "-").replace(/&/g, "and")
  )}`;

  useEffect(() => {
    const getCategoriesByCatId = async () => {
      const res = await fetch(`http://localhost:4000/api/subcategories?cat_id=${catId}`);
      const subcategories = await res.json();
      setData(subcategories?.sub_category);
    };
    getCategoriesByCatId();
  }, [catId]);

  return (
    <>
      <Link
        href={`${newUrl}/?cat=${cat.cat_id}`}
        key={cat.id}
        className={cn(
          catId === cat.cat_id ? `bg-thirdColor` : `bg-white`,
          `flex justify-between w-full p-3 rounded-xl hover:bg-thirdColor transition my-1`
        )}
      >
        <DuaByCategory cat={cat} />
      </Link>

      {catId === cat.cat_id ? (
        <div className="ml-6 flex flex-col gap-5  border-dashed border-l-2 border-secondary_green pl-2 py-2 ">
          {data?.map((subcat: SubCategoriesItem) => (
            <SubCategory subcat={subcat} key={subcat.id} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default DuaCategories;
