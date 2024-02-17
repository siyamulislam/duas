import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="max-w-[23.1875rem] w-full p-0.5 bg-white rounded-md flex items-center justify-between shadow-sm flex-1">

      <input
        className="hidden sm:block pl-2.5 w-full focus:border-0 focus-within:outline-none"
        type="text"
        placeholder="Search by Dua Name"
      />

      <div className="bg-primaryColor p-2 rounded-md">
        <Image
          src="/assets/icons/search.svg"
          width={25}
          height={25}
          alt="search"
          className=" "
        />
      </div>
    </div>
  );
};

export default SearchBar;
