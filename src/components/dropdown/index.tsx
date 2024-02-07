import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { FiMoreVertical } from "react-icons/fi";

interface DropdownProps {
  items: { label: string; onClick: () => void }[];
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, label }) => {
  return (
    <Menu>
      <Menu.Button className="text-typography inline-flex justify-center w-full px-4 py-2">
        <span className="flex items-center">
          {label ? label : null}
          <FiMoreVertical className="h-5 w-5 text-buttons " />
        </span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-primary divide-y divide-gray-100 rounded-md shadow-xl focus:outline-none">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            <button
              onClick={item.onClick}
              className={`text-typography group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {item.label}
            </button>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
