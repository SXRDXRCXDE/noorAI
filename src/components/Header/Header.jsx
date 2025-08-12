// app/components/Header/Header.jsx (SERVER COMPONENT by default)
import Link from "next/link";
import NoorAiLogo from "@/components/NoorAiLogo/NoorAiLogo";
import GradientButton from "@/components/GradientButton";
import CartIcon from "@/components/CartIcon/CartIcon";
import HeaderMobileMenu from "@/components/HeaderMobileMenu/HeaderMobileMenu";

const Navbar = [
    { title: "Accueil", link: "/register" },
    { title: "Technologies", link: "/technology" },
    { title: "À propos", link: "/about" },
    { title: "Recherches", link: "/research" },
    { title: "Tarifs", link: "/pricing" },
];

export default function Header({ currentPathname = "/" }) {
    const isAuthPage =
        currentPathname === "/login" || currentPathname === "/register";
    const bgClass = isAuthPage ? "bg-[#28262e]" : "bg-black/30";

    return (
        <header
            className={`z-50 fixed top-0 left-0 w-full h-[104px] duration-300 ${bgClass}`}
        >
            {/* Mobile */}
            <div className="w-full h-full min-[1200px]:hidden">
                <HeaderMobileMenu navbar={Navbar} bgClass={bgClass} />
            </div>

            {/* Desktop */}
            <div className="w-full h-full items-center max-[1200px]:hidden flex px-[133px] max-[1300px]:px-[50px] justify-between">
                <Link href="/" className="flex items-center">
                    <NoorAiLogo className="text-white shrink-0" width={35} height={35} />
                    <span className="ml-[7px] text-white font-sfPro font-semibold text-2xl leading-tight tracking-tight">
            NoorAI
          </span>
                </Link>

                <nav className="flex items-center gap-10 ml-[41px]">
                    {Navbar.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            className={`pb-1 border-b-2 border-transparent text-white hover:opacity-80 font-sfPro font-[440] text-[16px] tracking-[1px]`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="gradient_border_button centered relative text-white w-[160px] h-[46px]">
                        <div className="w-full h-full bg-[#FFFFFF33] rounded-[19px] centered">
                            <span className="text-[16px] font-sfPro font-medium">Voir la démo</span>
                        </div>
                    </div>

                    <GradientButton className="text-white rounded-full w-[160px] h-[46px] font-sfPro font-bold text-[16px]">
                        Se connecter
                    </GradientButton>

                    <div className="w-[48px] h-[48px] gradient_border_circle">
                        <div className="w-full h-full rounded-full bg-[linear-gradient(349.35deg,rgba(125,16,213,0.1)_7.23%,rgba(0,191,255,0.1)_91.51%)] centered">
                            <CartIcon width={20} height={20} color="#FFFFFF" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
