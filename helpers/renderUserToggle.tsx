import Image from "next/image";
const renderUserToggle = ({ display, image }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Image
        alt="User Image"
        src={image}
        width="35"
        height="35"
        className="rounded-full overflow-hidden"
        layout="intrinsic"
      />
      <span className="hidden sm:block ml-3">{display}</span>
    </div>
  );
};
export default renderUserToggle;
