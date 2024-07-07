import { navMenuList, SHOW_NAV_ITEM_ON_HEADER } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-primary">
      <div className="my-container flex items-center justify-between">
        <div>
          <Image src="/icons/logo.png" width={60} height={60} alt="Logo" />
        </div>
        <ul className="flex items-center gap-8 font-siliguri text-lg text-white">
          {navMenuList.slice(0, SHOW_NAV_ITEM_ON_HEADER).map((nav) => (
            <li>
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
          <li>
            <Link href="holding">
              <Dropdown />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
