"use client";
import { DuaListProps } from "@/app/type";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const DuasBySubCategory = ({ dua }: DuaListProps) => {
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const duaId = parseInt(searchParam.get("duaId") as string, 10);

  return (
    <>
      {dua.dua_name_en ? (
        <Link
          href={{
            pathname: pathName,
            query: {
              cat: dua.cat_id.toString(),
              subcatId: dua.subcat_id.toString(),
              duaId: dua.id.toString(),
            },
          }}
          scroll={false}
          className={cn(
            `${duaId === dua.id ? "text-secondary_green" : "text-black"}`,
            "flex items-center gap-2"
          )}
        >
          <Image
            src="/assets/icons/dua-arrow.svg"
            width={12}
            height={12}
            alt="Arrow"
          />

          <p className="text-xs pt-2">{dua.dua_name_en} </p>
        </Link>
      ) : null}
    </>
  );
};

export default DuasBySubCategory;
