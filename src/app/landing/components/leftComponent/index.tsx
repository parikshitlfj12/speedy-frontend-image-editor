import React from "react";
import {
  AiOutlineHome,
  AiFillFolderOpen,
  AiOutlineClockCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";

const MenuItem = ({
  icon,
  text,
}: {
  icon: React.JSX.Element;
  text: string;
}) => (
  <div className="flex items-center gap-x-1">
    {icon}
    <span className="text-typography text-base font-semibold">{text}</span>
  </div>
);

const index = () => {
  const menuItems = [
    { icon: <AiOutlineHome className="text-buttons text-lg" />, text: "Home" },
    { icon: <AiFillFolderOpen />, text: "My Files" },
    { icon: <AiOutlineClockCircle />, text: "Recent" },
    { icon: <AiOutlineSetting />, text: "Settings" },
    { icon: <RiDeleteBin7Line />, text: "Recycle bin" },
  ];

  return (
    <div className="p-5 shadow-md">
      {menuItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} text={item.text} />
      ))}

      <div className="mt-12 text-typography">
        <b>25.32 GB</b> used of 1TB <br />
        <div className="w-full mt-4 ml-1">
          <div className="bg-gray-700 h-2">
            <div className="bg-buttons h-2 w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-typography">
        <b>Get the SPEEDY.IO App</b>
      </div>
    </div>
  );
};

export default index;
