import { navMenuList, SHOW_NAV_ITEM_ON_HEADER } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ArrowIcon } from "../svg/NavigateIcons";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex select-none items-center gap-3 outline-none">
        অন্যান্য <ArrowIcon className="size-4 -rotate-90" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary-bg mr-6 min-w-[200px] rounded-lg p-3 shadow-md">
        <ul className="text-title flex flex-col">
          {navMenuList.slice(SHOW_NAV_ITEM_ON_HEADER).map((nav) => (
            <li className="w-full">
              <Link
                href={nav.href}
                className="hover:bg-secondary-bg text-title inline-block w-full rounded-md px-3 py-1"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
