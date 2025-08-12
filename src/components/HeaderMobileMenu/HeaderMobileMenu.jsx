// app/components/Header/HeaderMobileMenu.jsx (CLIENT COMPONENT)
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NoorIcon from "@/components/NoorIcon/NoorIcon";
import { AlignJustify, X } from "lucide-react";

export default function HeaderMobileMenu({ navbar, bgClass }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div
            className={`w-full h-full ${bgClass} flex items-center justify-between px-8 relative`}
        >
            {/* Top bar */}
            <Link href="/" className="flex items-center shrink-0">
                <NoorIcon className="text-white" size={35} />
                <span className="ml-[7px] text-white font-sfPro font-semibold text-2xl">
          NoorAI
        </span>
            </Link>
            <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                className="p-2"
            >
                {menuOpen ? (
                    <X color="#FFFFFF" size={25} />
                ) : (
                    <AlignJustify color="#FFFFFF" size={25} />
                )}
            </button>

            {/* Overlay */}
            <div
                className={`absolute left-0 top-[104px] w-full h-screen bg-black/60 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-out menu */}
            <div
                className={`absolute right-0 top-[104px] w-[280px] h-[calc(100%-104px)] bg-[#28262e] p-10 transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <nav className="flex flex-col items-start gap-10">
                    {navbar.map((item) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                                className={`pb-1 transition ${
                                    isActive
                                        ? "border-b-2 border-[#00BFFF] text-white"
                                        : "border-b-2 border-transparent text-white hover:opacity-80"
                                } font-sfPro font-[440] text-[16px] tracking-[1px]`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
