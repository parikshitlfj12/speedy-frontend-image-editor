import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownProps {
  items: { label: string; onClick: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="bg-buttons text-typography inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2">
        <span className="flex items-center">
          Options
          <FiChevronDown className="ml-2 h-5 w-5" />
        </span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <button
                onClick={item.onClick}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                {item.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
