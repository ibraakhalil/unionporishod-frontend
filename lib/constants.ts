export interface Link {
  name: string;
  href: string;
}

export const SHOW_NAV_ITEM_ON_HEADER = 3;

export const navMenuList: Link[] = [
  { name: "হোম", href: "/" },
  { name: "বর্তমান পরিষদ", href: "/porisodh" },
  { name: "হোল্ডিং সার্চ", href: "/holding" },
  { name: "নোটিশ", href: "/notice" },
  { name: "অভিযোগ", href: "/complain" },
  { name: "প্রকল্প", href: "/project" },
  { name: "ফটো গ্যালারি", href: "/photo" },
  { name: "ভিডিও গ্যালারি", href: "/video" },
  { name: "ড্যাশবোর্ড", href: "/admin" },
  { name: "লগিন", href: "/auth/login" },
];

export const importantLinks: Link[] = [
  { name: "প্রধানমন্ত্রীর কার্যালয়", href: "https://pmo.gov.bd/" },
  {
    name: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    href: "http://www.bangladesh.gov.bd/",
  },
  { name: "বাংলাদেশ পর্যটন বোর্ড", href: "http://www.tourismboard.gov.bd/" },
  { name: "বাংলাদেশ ব্যাংক", href: "https://www.bb.org.bd/" },
  { name: "বাংলাদেশ পরিসংখ্যান ব্যুরো", href: "http://www.bbs.gov.bd/" },
  { name: "জাতীয় তথ্য বাতায়ন", href: "https://bangladesh.gov.bd/" },
  { name: "নির্বাচন কমিশন", href: "http://www.ecs.gov.bd/" },
  { name: "বাংলাদেশ পুলিশ", href: "https://www.police.gov.bd/" },
  { name: "পররাষ্ট্র মন্ত্রণালয়", href: "https://mofa.gov.bd/" },
  { name: "জাতীয় সংসদ", href: "http://www.parliament.gov.bd/" },
  { name: "বাংলাদেশ রেলওয়ে", href: "https://www.railway.gov.bd/" },
  { name: "স্বাস্থ্য অধিদপ্তর", href: "https://dghs.gov.bd/" },
];

export const otherLinks: Link[] = [
  { name: "বাংলাদেশ ফরম", href: "http://forms.gov.bd/" },
  //   { name: "ই-বুক", href: "http://ebook.gov.bd/" },
  {
    name: "সকল ই-সেবা",
    href: "https://www.bangladesh.gov.bd/site/page/5c238920-a65f-4168-9c2b-70c39dc7cb1c",
  },
  { name: "পাসপোর্টের আবেদন", href: "https://www.epassport.gov.bd/" },
  { name: "ই-চালান", href: "https://echallan.gov.bd/" },
  { name: "ভূমি সেবা", href: "https://land.gov.bd/" },
  { name: "এটুআই", href: "https://a2i.gov.bd/" },
];
