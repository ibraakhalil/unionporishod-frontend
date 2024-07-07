import { importantLinks, otherLinks } from "@/lib/constants";
import LocationMap from "./LocationMap";

const Footer = () => {
  return (
    <footer className="mt-10 bg-primary py-5 text-white">
      <div className="my-container flex min-h-10 gap-12">
        <div>
          <h2 className="mb-2 border-b-[1px] py-2 text-2xl">
            গুরুত্বপূর্ণ লিংক
          </h2>
          <ul className="grid grid-cols-2 gap-x-4">
            {importantLinks.map((link) => (
              <li className="rounded text-sm hover:bg-white/20">
                <a className="block p-2" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-[240px]">
          <h2 className="mb-2 border-b-[1px] py-2 text-2xl">অন্যান্য লিংক</h2>
          <ul className="gap-x-4">
            {otherLinks.map((link) => (
              <li className="rounded text-sm hover:bg-white/20">
                <a className="block p-2" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[400px]">
          <LocationMap />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
