import React from "react";
import { DuaItem, DuaParams } from "@/app/type";
import DuaList from "@/components/home-design/dua-list";

export default async function Dua({ params, searchParams }: DuaParams) {
  const catId = parseInt(searchParams.cat as string, 10);
  const duas = await fetch(
    `http://localhost:4000/api/duas?cat_id=${catId}`
  ).then((res) => res.json());
console.log('process.env.GET_DATA_FROM_SERVER');
console.log(process.env.GET_DATA_FROM_SERVER);
  return (
    <div className="w-full rounded-xl shadow-sm max-h-screen h-full overflow-scroll scroll- flex flex-col gap-3 hide__scroll">
      {duas?.dua.map((dua: DuaItem) => (
        <DuaList dua={dua} key={dua.dua_id} />
      ))}
    </div>
  );
}
export async function generateStaticParams() {
  const response = await fetch(
    "http://localhost:4000/api/duas"
  );
  const allDuas = await response.json();
  return allDuas.dua.map((dua: DuaItem) => ({
    name: dua.id.toString(),
  }));
}
