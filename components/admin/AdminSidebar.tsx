import DropMenu from "../common/DropMenu";
import LinkCard from "./LinkCard";

const taxArray = [
  { name: "সদস্য নিবন্ধন করুন", href: "/create-holding" },
  { name: "ওয়ার্ড ভিত্তিক দেখুন", href: "/create-holding" },
  { name: "সবগুলো দেখুন", href: "/create-holding" },
];

const taxHolder = [
  { name: "সদস্য নিবন্ধন করুন", href: "/create-holding" },
  { name: "ওয়ার্ড ভিত্তিক দেখুন", href: "/create-holding" },
  { name: "সবগুলো দেখুন", href: "/create-holding" },
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
