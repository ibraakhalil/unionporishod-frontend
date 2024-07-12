"use client";
import { cn } from "@/lib/cn";
import { LinkProps } from "@/types/adminType";
import { HTMLProps, useState } from "react";
import LinkCard from "../admin/LinkCard";
import { ArrowIcon } from "../svg/NavigateIcons";

interface DropMenuProps extends HTMLProps<HTMLDivElement> {
  name: string;
  items: LinkProps[];
}

const DropMenu = ({ name, items }: DropMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "select-none overflow-hidden rounded-md hover:bg-primary-bg",
        { "bg-primary-bg": isOpen },
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between px-3 py-1.5"
      >
        <p>{name}</p>
        <ArrowIcon className="-rotate-90" />
      </div>
      <div className={cn("ml-1 h-0 [&>div]:text-sm", { "h-auto": isOpen })}>
        {items.map((item) => (
          <LinkCard name={item.name} href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
