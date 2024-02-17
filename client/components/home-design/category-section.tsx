import CategoryLists from "./category-lists";
import LocalSearchBar from "./local-searchbar";

const CategoriesSection = () => {
  return (
    <div className="w-full md:max-w-[350px] lg:w-full sm:w-[300px] bg-white shadow-sm rounded-md overflow-hidden sticky top-10 sm:top-20 flex-shrink-0 h-[85vh]">
      <h2 className="text-base text-center bg-secondary_green text-white py-3 font-semibold">
        Categories
      </h2>
      <div className="px-3 my-3 h-full">
        <LocalSearchBar />
        <CategoryLists />
      </div>
    </div>
  );
};

export default CategoriesSection;
