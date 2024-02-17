import Image from "next/image";

const ShowIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="bg-primaryColor rounded-full p-2">
      <Image src={`/assets/icons${icon}`} width={18} height={18} alt="icon" className="w-auto h-auto" />
    </div>
  );
};

export default ShowIcon;
