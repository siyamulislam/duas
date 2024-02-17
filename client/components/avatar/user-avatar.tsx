import Image from "next/image";

const UserAvatar = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/icons/avatar.svg"
        width={45}
        height={45}
        alt="avatar"
      />
      <Image
        src="/assets/icons/down-arrow.svg"
        width={10}
        height={10}
        className="w-auto h-auto"
        alt="avatar"
      />
    </div>
  );
};

export default UserAvatar;
