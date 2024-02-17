import React from "react";
export type DuaParams = {
  params: {
    cat_id: number;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export type DuaItem = {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic?: string | null;
  dua_indopak?: string | null;
  clean_arabic?: string | null;
  transliteration_bn?: string | null;
  transliteration_en?: string | null;
  translation_bn?: string | null;
  translation_en?: string | null;
  bottom_bn?: string | null;
  bottom_en?: string | null;
  refference_bn?: string | null;
  refference_en?: string | null;
  audio?: string | null;
};
export type DuaResponse = {
  dua: DuaItem[];
};

export type DuaListProps = {
  dua: DuaItem;
  targetRef?: any;
};
export type DuaCategoriesType = {
  cat: {
    id: number;
    cat_id: number;
    cat_name_bn: string;
    cat_name_en: string;
    no_of_subcat: number;
    no_of_dua: number;
    cat_icon: string;
  };
};

export type SubCategoriesItem = {
  cat_id: number;
  id: number;
  no_of_dua: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
};
export type SubCategoryResponse = {
  sub_category: SubCategoriesItem[];
};
export type SubCategoryListProps = {
  sub_category: SubCategoriesItem;
};
