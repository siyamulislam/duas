import { redirect } from "next/navigation";

const HomePage = () => {
  redirect(`duas/Duas-Importance?cat=1`);

  return null;
};

export default HomePage;
