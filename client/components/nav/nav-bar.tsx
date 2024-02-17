import UserAvatar from "../avatar/user-avatar";
import SearchBar from "../search/search-bar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <nav className="sticky md:fixed right-0 left-0 h-[4rem] flex justify-center px-4 md:px-[4rem] mx-auto items-center pt-4 z-10  bg-primaryColor">
      <header className="flex justify-between items-center gap-4 w-full ">
        <h1 className={`text-2xl font-semibold md:pl-[5rem] whitespace-nowrap ${poppins.className}`}>
          Dua Page
        </h1>
        <div className="flex max-w-[700px] w-max lg:w-full justify-between items-center gap-3">
          <SearchBar />
          <UserAvatar />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
