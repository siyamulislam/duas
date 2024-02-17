import DuaCategories from "./dua-categories";
type Category = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};
const CategoryList = async () => {
  let url='http://localhost:4000/api'
  const duas = await fetch(
    `${url}/categories`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col items-start h-full sm:h-full overflow-y-scroll pb-7 bg-white">
      {duas.category.map((cat: Category) => (
        <DuaCategories key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CategoryList;
