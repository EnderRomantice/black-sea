"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


const tabs = [
  { path: "/", label: "首页", icon: "/page.png" },
  { path: "/community", label: "社区", icon: "/community.png" },
  { path: "/study", label: "学习", icon: "/study.png" },
  { path: "/my", label: "我的", icon: "/my.png" },
];

export default function Tabbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--background)] border-t border-[var(--border-color)] pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1
                ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={24}
                height={24}
                unoptimized
                className={isActive ? "opacity-100" : "opacity-60"}
              />
              <span className="text-xs">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
