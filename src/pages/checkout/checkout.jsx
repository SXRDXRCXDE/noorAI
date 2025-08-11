import Header from "@/components/Header/Header";
import Image from "next/image";
import bg_pricing from "@/assets/images/bg_pricing.png";
import {Check} from "lucide-react";
import GradientButton from "@/components/GradientButton";
import Footer from "@/components/Footer/Footer";



export default function Checkout() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

            <Section1/>

            <Footer/>

        </div>
    );
}

export function Section1() {
    return(
        <div className={`w-full h-[calc(804px+434px)] relative overflow-hidden`}>

            <div className={`absolute -right-[423px] -bottom-[171px]  w-[972px] h-[972px] rounded-full blur-[824px] bg-[#501C6A]`}></div>
            <div className={`absolute -left-[288px] -bottom-[calc(171px+677px)]  w-[972px] h-[972px] rounded-full blur-[824px] bg-[#0D496F]`}></div>

            <div className={`absolute left-0 top-0 w-full h-[804px] `}>
                <div className={`w-full h-full relative `}>
                    <div className={`absolute bottom-0 left-0 w-full h-[467px] overflow-hidden`}>
                        <div className={`w-full h-full relative overflow-hidden`}>
                            <div className={`absolute -right-[423px] -bottom-[138px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#501C6A]`}></div>
                            <div className={`absolute -left-[288px] top-[310px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#0D496F]`}></div>
                        </div>
                    </div>
                    <div className={`absolute left-0 top-0 w-full h-[804px]  relative overflow-hidden`}>
                        <Image
                            src={bg_pricing}
                            alt="bg"
                            className="absolute left-0 top-0 object-cover w-full h-full  "
                        />
                        <div className={'absolute left-0 top-0 w-full h-full bg-[#110E55A6]'}></div>
                        <div className={`absolute -left-[252px] bottom-[90px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]`}></div>
                        <div className={`absolute -right-[335px] bottom-[6px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]`}></div>
                    </div>
                </div>
            </div>

            <div className={`absolute left-0 top-0 flex flex-col items-center w-full h-full pt-[285px] px-[120px]`}>

                <span className={`text-white font-sfPro font-bold text-[48px] leading-[100%] tracking-[0] text-center align-middle`}>Paiement</span>
                <span className={`text-white font-sfPro font-normal text-[24px] leading-[150%] tracking-[0] text-center`}>Résumé de votre sélection</span>

                <div className={`checkout_card mt-[60px] w-full h-[603px]`}>
                    <div className={`w-full h-full bg-[#FFFFFF14] backdrop-blur-[254px] rounded-[30px] flex items-center justify-between `}>

                        <div className={`w-1/2 h-full flex flex-col items-start py-[82px] px-[64px]`}>

                            <div className={`w-full flex items-center justify-between`}>

                                <span className={`text-white font-sfPro font-[590] text-[32px] leading-[24px] tracking-[-1.2%]`}>Résumé du forfait</span>
                                <div className={`w-[95px] h-10 bg-[#443B55] rounded-full centered text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>Manage</div>

                            </div>

                            <div className={`mt-[31px] w-[454px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`flex items-center gap-[15px] mt-[31px] `}>
                                <span className={`text-white font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>
                                    Paiement unique :
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>
                                    189 € TTC
                                </span>
                            </div>
                            <span className={`text-white mt-[21px] font-sfPro font-normal text-[18px] leading-[24px] tracking-[-1.2%]`}>
                                    Ce qui est inclus :
                            </span>

                            <div className={`flex flex-col items-start gap-[20px] mt-[17px]`}>

                                <div className={`w-full flex items-center gap-[12px] `}>
                                    <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                        <Check color={`white`} size={14} />
                                    </div>
                                    <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Paiement unique</span>
                                </div>
                                <div className={`w-full flex items-center gap-[12px] `}>
                                    <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                        <Check color={`white`} size={14} />
                                    </div>
                                    <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Aucun abonnement inclus</span>
                                </div>
                                <div className={`w-full flex items-center gap-[12px] `}>
                                    <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                        <Check color={`white`} size={14} />
                                    </div>
                                    <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Vous possédez l’appareil NoorAI à vie</span>
                                </div>

                            </div>

                            <span className={`text-white mt-[31px] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>
                                    Abonnement pour les familles
                            </span>

                            <div className={`flex items-center gap-[15px] mt-[31px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    Abonnement mensuel :
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    €14.90-29.90
                                </span>
                            </div>

                        </div>

                        <div className={`w-[2px] h-[431px] bg-gradient-to-t from-transparent via-white/20 to-transparent`}></div>

                        <div className={`w-1/2 h-full flex flex-col items-start py-[82px] px-[84px]`}>
                            <div className={`w-full flex items-center justify-between`}>

                                <span className={`text-white font-sfPro font-[590] text-[32px] leading-[24px] tracking-[-1.2%]`}>Résumé du forfait</span>

                            </div>
                            <div className={`mt-[31px] w-[454px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[34px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    Prix de l’appareil (achat unique)
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>
                                    €189.00
                                </span>
                            </div>
                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[30px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    Frais d’abonnement (mensuel)
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>
                                    €14.90
                                </span>
                            </div>
                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[30px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    TVA & frais
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>
                                    €12.00
                                </span>
                            </div>

                            <div className={`mt-[31px] w-[454px] h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[23px] `}>
                                <span className={`text-white font-sfPro font-normal text-[18px] leading-[24px] tracking-[-1.2%]`}>
                                    Prix total
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>
                                    €215.90
                                </span>
                            </div>

                            <GradientButton className={`w-full h-[44px] rounded-full mt-[60px] text-white font-sfPro font-medium text-[16px] leading-[100%] tracking-[0] align-middle`}>Payer maintenant</GradientButton>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}