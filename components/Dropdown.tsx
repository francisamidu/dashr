import React, { useRef } from "react";
import { clickOutsideRef } from "../helpers";

type DropdownProps = {
  badge: string;
  icon: JSX.Element;
  customToggle: () => {};
  content: Array<any>;
  render: (item: any, index) => {};
};

const Dropdown = ({
  icon,
  badge,
  customToggle,
  content,
  render,
}: Partial<DropdownProps>) => {
  const dropdownToggle = useRef(null);
  const dropdownContent = useRef(null);
  clickOutsideRef(dropdownContent, dropdownToggle);
  return (
    <div className="dropdown relative z-[99]">
      <button
        ref={dropdownToggle}
        className="dropdown-toggle border-none outline-none bg-transparent relative"
      >
        <>
          {icon && icon}
          {badge && <span className="toggle-badge">{badge}</span>}
          {customToggle && customToggle()}
        </>
      </button>
      <div
        ref={dropdownContent}
        className="dropdown-content absolute right-0 max-w-[400px] bg-white rounded-md overflow-hidden p-2"
      >
        {content && render ? (
          <> {content.map((item, index) => render(item, index))} </>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
