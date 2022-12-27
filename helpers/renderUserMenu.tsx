const renderUserMenu = ({ icon, name }, index) => (
  <div
    className="cursor-pointer flex flex-row items-center hover:text-sky-800 mb-3 px-2"
    key={index}
  >
    {icon}
    <span className="ml-2 text-inherit">{name}</span>
  </div>
);
export default renderUserMenu;
