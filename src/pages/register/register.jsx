import Header from "@/components/Header/Header";
import BackgroundIntro from "@/components/BackgroundIntro";
import { Input } from "@/components/ui/input"
import InputWithIcon from "@/components/InputWithIcon";
import {Lock, Mail} from "lucide-react";
import GradientButton from "@/components/GradientButton";
import {GrGoogle} from "react-icons/gr";
import {FaApple} from "react-icons/fa";

export default function Register() {
    return(
        <div className={'w-full h-screen bg-[#0E0C15] overflow-x-hidden '}>
            <Header/>
            <div className={'w-full h-full relative '}>
                <div className={'w-full h-full absolute top-0 left-0 z-20'}>
                    <div className={'w-full h-full relative'}>

                        <div className={'absolute left-[248px] top-[207px] w-[376px] h-[530px] py-[48px] flex flex-col justify-between items-start '}>
                            <span className={`font-SfPro_title font-[860] text-white `}>Rejoignez la révolution pédagogique avec NoorAI</span>
                            <span className={`font-sfPro_description font-[860] text-[#B6B6B7] `}>Commencez dès aujourd'hui avec NoorAI - AI Education app et découvrez la puissance de l'IA dans votre apprentissage du futur !</span>
                        </div>

                        <div className={`absolute right-[248px] top-[207px] w-[488px] h-[610px] `}>
                            <div className={`w-full h-full relative`}>
                                <div className={` form_background1 absolute right-0 top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[422px] `}></div>
                                <div className={` form_background2 absolute right-[24px] top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[522px] `}></div>
                                <div className="form_back3 border border-white absolute right-[48px] top-0 bottom-0 m-auto rounded-3xl w-[440px] h-[610px] py-0.5 px-0.5">
                                    <div className={`form_background3_content`}>
                                        <div className={'font-sfPro  w-full flex flex-col items-start gap-6 '}>
                                            <InputWithIcon
                                                icon={<Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                                placeHolder={`Name`}
                                            />
                                            <InputWithIcon
                                                icon={<Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                                placeHolder={`Email`}
                                            />
                                            <InputWithIcon
                                                placeHolder="Password"
                                                type="password"
                                                icon={<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                            />
                                            <GradientButton>Sign Up</GradientButton>
                                        </div>

                                        <div className={'font-sfPro  w-full flex flex-col items-center gap-[26px] '}>
                                            <span className={'text-[#757185] text-[16px] font-[590]'}>Or start your NoorAI with</span>
                                            <div className={'flex items-center justify-center gap-7'}>
                                                <div className={'w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered'}>
                                                    <GrGoogle color={`#757185`} size={25} />
                                                </div>
                                                <div className={'w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered'}>
                                                    <FaApple color={`#757185`} size={25} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full h-full relative px-10  '}>
                    <div className={'absolute left-0 top-0 w-10 h-full light_left_border'}></div>
                    <div className={'absolute right-0 top-0 w-10 h-full light_right_border'}></div>
                    <BackgroundIntro/>
                </div>
            </div>

        </div>
    );
}