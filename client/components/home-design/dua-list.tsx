"use client";
import { DuaListProps } from "@/app/type";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const DuaList = ({ dua }: DuaListProps) => {
  const searchParams = useSearchParams();
  const catId = parseInt((searchParams.get("cat") || 1) as string, 10);
  const duaId = parseInt((searchParams.get("duaId") || 1) as string, 10);

  const duaListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to the DuaList component when duaId matches
    if (duaListRef.current && duaId === dua.id) {
      duaListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [duaId, dua.id]);
  return (
    <div
      className="flex flex-col gap-4 "
      id={dua.id.toString()}
      ref={duaListRef}
    >
      {dua.dua_id === 1 ? (
        <p className="bg-white py-2 px-3 rounded-lg ">
          <span className="text-secondary_green font-semibold">Section: </span>
          {dua.dua_name_en}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 bg-white rounded-lg px-4 py-3 ">
        <div className=" flex items-center gap-2">
          <Image
            src="/assets/icons/title-logo.svg"
            width={30}
            height={30}
            alt="title-logo"
          />

          <p className="text-secondary_green font-semibold">
            <span>{dua.dua_id}. </span>
            {dua.dua_name_en}
          </p>
        </div>
        <div className=" flex flex-col gap-6 leading-8">
          <p className="text-lg">{dua.top_en}</p>
          <p className="w-full text-right text-xl sm:text-3xl leading-10">
            {dua.dua_arabic}
          </p>
          {dua.translation_en && (
            <p className="italic text-lg leading-8">
              <span className="italic font-medium">Transliteration:</span>
              {dua.translation_en}
            </p>
          )}
        </div>
        <div>
          <p className="text-secondary_green font-semibold">Reference:</p>
          <p className="font-medium">{dua.refference_en}</p>
        </div>
      </div>
    </div>
  );
};

export default DuaList;
