type SidebarLink = {
  id: number;
  name: string;
  path: string;
  icon: string;
};
export const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: "/home.svg",
  },
  {
    id: 2,
    name: "All Duas",
    path: "/all-duas",
    icon: "/all-duas.svg",
  },
  {
    id: 3,
    name: "Memorize",
    path: "/memorize",
    icon: "/memorize.svg",
  },
  {
    id: 4,
    name: "Bookmark",
    path: "/bookmark",
    icon: "/bookmark.svg",
  },
  {
    id: 5,
    name: "Ruqyah",
    path: "/ruqyah",
    icon: "/ruqyah.svg",
  },
  {
    id: 6,
    name: "Dua Q&A",
    path: "/qna",
    icon: "/qna.svg",
  },
  {
    id: 7,
    name: "Book",
    path: "/book",
    icon: "/book.svg",
  },
];

type SettingsType = {
  id: number;
  name: string;
  icon: string;
  href: string;
};
export const settings: SettingsType[] = [
  {
    id: 111,
    name: "Language Settings",
    icon: "/language.svg",
    href:"/settings/language"
  },
  {
    id: 112,
    name: "General Settings",
    icon: "/general.svg",
    href:"/settings/general"
  },
  {
    id: 113,
    name: "Font Settings",
    icon: "/appearance.svg",
    href: "/settings/font"
  },
  {
    id: 114,
    name: "Appearance Settings",
    icon: "/appearance-green.svg",
    href: "/settings/appearance"
  },
];
