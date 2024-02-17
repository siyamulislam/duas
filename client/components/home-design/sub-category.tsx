"use client";
import { DuaItem, SubCategoriesItem } from "@/app/type";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DuasBySubCategory from "./duas-by-subcategory";
import { cn } from "@/lib/utils";

const SubCategory = ({ subcat }: { subcat: SubCategoriesItem }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [duas, setDuas] = useState([]);

  const catId = parseInt(searchParams.get("cat") as string, 10);

  const subcatId = parseInt(searchParams.get("subcatId") as string, 10);
  const duaId = parseInt(searchParams.get("duaId") as string, 10);

  const isActive = subcatId === subcat.subcat_id;
  useEffect(() => {
    const getDuasBySubCatId = async () => {
      const res = await fetch(
        `http://localhost:4000/api/duas?subcat_id=${subcatId}`
      );
      const duas = await res.json();
      setDuas(duas.dua);
    };

    getDuasBySubCatId();
  }, [catId, subcatId]);

  return (
    <div className="flex flex-col gap-1">
      <Link
        href={{
          pathname: pathName,
          query: {
            cat: subcat.cat_id.toString(),
            subcatId: subcat.subcat_id.toString(),
          },
        }}
        className=" flex w-full relative"
        key={subcat.id}
      >
        <span className="custom_class" />
        <p
          className={cn(
            isActive ? "font-semibold text-secondary_green" : "text-black",
            "text-xs font-medium"
          )}
        >
          {subcat.subcat_name_en}
        </p>
      </Link>
      {subcatId && subcatId === subcat.subcat_id
        ? duas?.map((dua: DuaItem) => (
            <DuasBySubCategory key={dua.dua_name_en} dua={dua} />
          ))
        : null}
    </div>
  );
};

export default SubCategory;
