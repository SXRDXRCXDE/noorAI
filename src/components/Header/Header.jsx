"use client"; // Needed for usePathname

import Link from "next/link";
import GradientButton from "@/components/GradientButton";
import NoorAiLogo from "@/components/NoorAiLogo/NoorAiLogo";
import CartIcon from "@/components/CartIcon/CartIcon";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const Navbar = [
        { title: "Accueil", link: "/register" },
        { title: "Technologies", link: "/technology" },
        { title: "À propos", link: "/about" },
        { title: "Recherches", link: "/research" },
        { title: "Tarifs", link: "/pricing" },
    ];

    function Logo() {
        return (
            <Link href="/" className="flex items-center">
                <NoorAiLogo className="text-white" width={35} height={35} />
                <span className="ml-[7px] text-white font-sfPro font-semibold text-2xl leading-tight tracking-tight text-center align-middle">
                    NoorAI
                </span>
            </Link>
        );
    }

    return (
        <div className={`z-50 fixed top-0 left-0 w-full h-[104px] duration-300 ${pathname === "/login" || pathname === "/register" ? "bg-[#28262e]" : "bg-[#FFFFFF1C]"}` }>
            <div className="w-full h-full flex items-center px-[133px] justify-between">
                <Logo />

                <div className="flex items-center gap-10 ml-[41px]">
                    {Navbar.map((value, index) => {
                        const isActive = pathname === value.link;
                        return (
                            <Link
                                key={index}
                                href={value.link}
                                className={`pb-1 transition ${
                                    isActive
                                        ? "border-b-2 border-[#00BFFF] text-white"
                                        : "border-b-2 border-transparent text-white hover:opacity-80"
                                } font-sfPro font-[440] text-[16px] leading-[100%] tracking-[1px] align-middle`}
                            >
                                {value.title}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <div className="gradient_border_button centered relative text-white w-[160px] h-[46px]">
                        <div className="w-full h-full bg-[#FFFFFF33] rounded-[19px] centered">
                            <span className="text-[16px] font-sfPro font-medium leading-[100%] text-center align-middle">
                                Voir la démo
                            </span>
                        </div>
                    </div>

                    <GradientButton className="text-white rounded-full w-[160px] h-[46px] font-sfPro font-bold text-[16px] leading-[140%] tracking-[-0.2px] text-center">
                        Se connecter
                    </GradientButton>

                    <div className="w-[48px] h-[48px] gradient_border_circle">
                        <div className="w-full h-full rounded-full bg-[linear-gradient(349.35deg,rgba(125,16,213,0.1)_7.23%,rgba(0,191,255,0.1)_91.51%)] centered">
                            <CartIcon width={20} height={20} color="#FFFFFF" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
