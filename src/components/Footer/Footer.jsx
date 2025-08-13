import Image from "next/image";
import twoN from "@/assets/images/2n.png";
import NoorAiLogo from "@/components/NoorAiLogo/NoorAiLogo";
import {Instagram} from "lucide-react";
import TwitterIcon from "@/components/TwitterIcon/TwitterIcon";
import FacebookIcon from "@/components/FacebookIcon/FacebookIcon";
import GithubIcon from "@/components/GithubIcon/GithubIcon";
import NoorIcon from "@/components/NoorIcon/NoorIcon";

export default function Footer() {

    function Logo() {
        return(
            <div className={`flex items-center`}>
                <NoorIcon className={`text-white min-[1200px]:hidden`} width={35} height={35}/>
                <NoorAiLogo className="text-white max-[1200px]:hidden" width={35} height={35} />
                <span className={` ml-[7px] text-white font-sfPro font-semibold max-[450px]:text-xl text-2xl leading-tight tracking-tight text-center align-middle`}>NoorAI</span>
            </div>
        );
    }

    return(
        <div className={`w-full h-[171px] relative overflow-hidden`}>
            <div className={`absolute -left-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#04274B]`}></div>
            <div className={`absolute -right-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#06303F]`}></div>
            <div className={`absolute left-0 top-0  w-full h-full bg-[#FFFFFF38] flex flex-col items-center`}>
                <div className={'w-full h-[93px] max-[450px]:flex-wrap max-[450px]:justify-center border-b border-[#FFFFFF0F] max-[420px]:px-2 max-[980px]:px-[5px] px-[120px] flex items-center justify-between'}>
                    <div className={`max-[450px]:mr-5`}>
                        <Logo/>
                    </div>

                    <div className={`flex max-[450px]:hidden items-center max-[450px]:gap-1 gap-3 `}>
                        <div className={`w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>terms and conditions</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>legal information</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>Contact Us</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                    </div>

                    <div className={`flex max-[450px]:ml-5 items-center max-[450px]:gap-[10px] gap-[28px]`}>
                        <TwitterIcon fill={`#FFFFFF`} width={20} height={20} />
                        <FacebookIcon fill={`#FFFFFF`} width={20} height={20} />
                        <Instagram color={`#FFFFFF`} size={20} />
                        <GithubIcon fill={`#FFFFFF`} width={20} height={20} />
                    </div>

                    <div className={`flex  min-[450px]:hidden items-center max-[450px]:gap-1 gap-3 `}>
                        <div className={`w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>terms and conditions</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>legal information</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium max-[450px]:text-xs text-base leading-none align-middle capitalize`}>Contact Us</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
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

