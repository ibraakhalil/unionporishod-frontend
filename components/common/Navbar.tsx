import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-green-700">
      <div className="my-container flex items-center justify-between">
        <div>
          <Image src="/icons/logo.png" width={60} height={60} alt="Logo" />
        </div>
        <ul className="font-siliguri flex items-center gap-8 text-lg text-white">
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href="holding">হোল্ডিং সার্চ</Link>
          </li>
          <li>
            <Link href="holding">ফটো গ্যালারি</Link>
          </li>
          <li>
            <Link href="holding">অন্যান্য</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
