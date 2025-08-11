import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import {IoLogoGithub} from "react-icons/io";
import Image from "next/image";
import twoN from "@/assets/images/2n.png";
import NoorAiLogo from "@/components/NoorAiLogo/NoorAiLogo";

export default function Footer() {

    function Logo() {
        return(
            <div className={`flex items-center `}>
                <NoorAiLogo className="text-white" width={35} height={35} />
                <span className={` ml-[7px] text-white font-sfPro font-semibold text-2xl leading-tight tracking-tight text-center align-middle`}>NoorAI</span>
            </div>
        );
    }

    return(
        <div className={`w-full h-[171px] relative overflow-hidden`}>
            <div className={`absolute -left-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#04274B]`}></div>
            <div className={`absolute -right-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#06303F]`}></div>
            <div className={`absolute left-0 top-0  w-full h-full bg-[#FFFFFF38] flex flex-col items-center`}>
                <div className={'w-full h-[93px] border-b border-[#FFFFFF0F] px-[120px] flex items-center justify-between'}>
                    <div className={``}>
                        <Logo/>
                    </div>

                    <div className={`flex items-center gap-3 `}>
                        <div className={`w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>terms and conditions</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>legal information</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>Contact Us</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                    </div>

                    <div className={`flex items-center gap-[28px]`}>
                        <FaTwitter color={`#FFFFFF`} size={20} />
                        <FaFacebookF color={`#FFFFFF`} size={20} />
                        <FaInstagram color={`#FFFFFF`} size={20} />
                        <IoLogoGithub color={`#FFFFFF`} size={20} />
                    </div>
                </div>

                <div className={`w-full h-[78px] flex items-center justify-center`}>
                    <Image
                        src={twoN}
                        alt="dots"
                        className="object-contain self-center w-8 h-8 invert"
                    />
                    <span className={`ml-2 text-white font-sfPro font-medium text-base leading-none tracking-normal text-center align-middle`}>© 2N Technologie 2025</span>
                </div>
            </div>
        </div>
    );
}

