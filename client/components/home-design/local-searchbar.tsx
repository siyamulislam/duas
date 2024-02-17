import Image from "next/image";

const LocalSearchBar = () => {
  return (
    <div className="flex gap-2 border-2 p-2 rounded">
      <Image
        src="/assets/icons/search.svg"
        width={20}
        height={20}
        alt="search"
        
      />
      <input type="text" placeholder="Search by Categories" className="placeholder:text-sm focus-within:outline-none" />
    </div>
  );
};

export default LocalSearchBar;
