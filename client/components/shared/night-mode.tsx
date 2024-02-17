import Image from "next/image";

const NightMode = () => {
  return (
    <div className="flex w-full justify-between px-5 mt-7 text-sm items-center">
      <h2>Night Mode</h2>
      <Image
        src="/assets/icons/switcher.svg"
        width={26}
        height={26}
        alt="switcher"
        className="cursor-pointer h-auto w-auto"
      />
    </div>
  );
};

export default NightMode;
