import DropMenu from "../common/DropMenu";
import LinkCard from "./LinkCard";

const taxHolder = [
  { name: "সদস্য নিবন্ধন করুন", href: "/holding/create-holding" },
  { name: "ওয়ার্ড ভিত্তিক দেখুন", href: "/holding/create-holding" },
  { name: "সবগুলো দেখুন", href: "/holding" },
];

const taxArray = [
  { name: "কর আদায় ফর্ম", href: "/holding/tax-collection" },
  { name: "কর আদায় লিস্ট", href: "/holding/all-transaction" },
];

export default function LeftSidebar() {
  return (
    <div className="sticky top-0 h-[100dvh] bg-secondary-bg">
      <ul className="flex w-[250px] flex-col gap-1 p-4">
        <LinkCard name="ড্যাশবোর্ড" href="/" />
        <DropMenu name="করদাতা সদস্য" items={taxHolder} />
        <DropMenu name="কর আদায়" items={taxArray} />
        <LinkCard name="কমপ্লেইন" href="/complain" />
      </ul>
    </div>
  );
}
