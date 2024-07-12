"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";

interface LinkCardProps {
  href?: string;
  name: string;
}

export default function LinkCard({ name, href = "/" }: LinkCardProps) {
  return (
    <div className={cn("w-full cursor-pointer select-none")}>
      <Link
        href={`/admin/${href}`}
        className={cn(
          "flex h-10 w-full items-center rounded-md px-3 text-dark hover:bg-primary-bg",
        )}
      >
        {name}
      </Link>
    </div>
  );
}
