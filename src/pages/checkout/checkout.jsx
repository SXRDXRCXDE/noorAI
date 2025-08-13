// app/checkout/page.tsx

import Image from "next/image";
import bg_pricing from "@/assets/images/bg_pricing.png";
import { Check } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import Footer from "@/components/Footer/Footer";

export default function Checkout() {
    return (
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>
            <Section1 />
            <Footer />
        </div>
    );
}

function Section1() {
    return (
        <div className={`w-full h-[calc(804px+434px)] max-[420px]:h-[calc(804px+434px+200px)] relative overflow-hidden`}>

            <div className={`absolute -right-[423px] -bottom-[171px]  w-[972px] h-[972px] rounded-full blur-[824px] bg-[#501C6A]`}></div>
            <div className={`absolute -left-[288px] -bottom-[calc(171px+677px)]  w-[972px] h-[972px] rounded-full blur-[824px] bg-[#0D496F]`}></div>

            <div className={`absolute left-0 top-0 w-full h-[804px]`}>
                <div className={`w-full h-full relative`}>
                    <div className={`absolute bottom-0 left-0 w-full h-[467px] overflow-hidden`}>
                        <div className={`w-full h-full relative overflow-hidden`}>
                            <div className={`absolute -right-[423px] -bottom-[138px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#501C6A]`}></div>
                            <div className={`absolute -left-[288px] top-[310px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#0D496F]`}></div>
                        </div>
                    </div>
                    <div className={`absolute left-0 top-0 w-full h-[804px] relative overflow-hidden`}>
                        <Image
                            src={bg_pricing}
                            alt="bg"
                            className="absolute left-0 top-0 object-cover w-full h-full"
                        />
                        <div className={'absolute left-0 top-0 w-full h-full bg-[#110E55A6]'}></div>
                        <div className={`absolute -left-[252px] bottom-[90px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]`}></div>
                        <div className={`absolute -right-[335px] bottom-[6px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]`}></div>
                    </div>
                </div>
            </div>

            <div className={`absolute left-0 top-0 flex flex-col items-center w-full h-full pt-[285px] max-[980px]:pt-[185px] max-[980px]:px-[20px] max-[1200px]:px-[60px] px-[120px]`}>

                <span className={`text-white font-sfPro font-bold max-[980px]:text-[32px] text-[48px] leading-[100%] tracking-[0] text-center align-middle`}>Paiement</span>
                <span className={`text-white font-sfPro font-normal max-[980px]:text-[20px] text-[24px] leading-[150%] tracking-[0] text-center`}>Résumé de votre sélection</span>

                <div className={`checkout_card mt-[60px] w-full max-[420px]:h-[1023px] h-[603px]`}>
                    <div className={`w-full h-full bg-[#FFFFFF14] backdrop-blur-[254px] rounded-[30px] flex max-[420px]:flex-col items-center justify-between`}>

                        {/* LEFT COLUMN */}
                        <div className={`w-1/2 max-[420px]:w-full h-full flex flex-col items-start max-[980px]:px-[24px] max-[980px]:py-[44px] py-[82px] px-[64px]`}>
                            <div className={`w-full flex items-center justify-between`}>
                                <span className={`text-white font-sfPro font-[590] max-[980px]:text-[24px] text-[32px] leading-[24px] tracking-[-1.2%]`}>Résumé du forfait</span>
                                <div className={`w-[95px] h-10 bg-[#443B55] rounded-full centered text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>Manage</div>
                            </div>

                            <div className={`mt-[31px] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`flex items-center gap-[15px] mt-[31px]`}>
                                <span className={`text-white font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>Paiement unique :</span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>189 € TTC</span>
                            </div>

                            <span className={`text-white mt-[21px] font-sfPro font-normal text-[18px] leading-[24px] tracking-[-1.2%]`}>Ce qui est inclus :</span>

                            <div className={`flex flex-col items-start gap-[20px] mt-[17px]`}>
                                {[
                                    "Paiement unique",
                                    "Aucun abonnement inclus",
                                    "Vous possédez l’appareil NoorAI à vie"
                                ].map((text, i) => (
                                    <div key={i} className={`w-full flex items-center gap-[12px]`}>
                                        <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                            <Check color={`white`} size={14} />
                                        </div>
                                        <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <span className={`text-white mt-[31px] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>Abonnement pour les familles</span>

                            <div className={`flex items-center gap-[15px] mt-[31px]`}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>Abonnement mensuel :</span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>€14.90-29.90</span>
                            </div>
                        </div>

                        <div className={`w-[2px] h-full max-[420px]:hidden bg-gradient-to-t from-transparent via-white/20 to-transparent`}></div>

                        {/* RIGHT COLUMN */}
                        <div className={`w-1/2 max-[420px]:w-full h-full flex flex-col items-start max-[420px]:py-[10px] max-[980px]:py-[50px] max-[980px]:px-[24px] py-[82px] px-[84px]`}>
                            <div className={`w-full flex items-center justify-between`}>
                                <span className={`text-white font-sfPro font-[590] max-[980px]:text-[24px] text-[32px] leading-[24px] tracking-[-1.2%]`}>Résumé du forfait</span>
                            </div>

                            <div className={`mt-[31px] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            {[
                                { label: "Prix de l’appareil (achat unique)", value: "€189.00" },
                                { label: "Frais d’abonnement (mensuel)", value: "€14.90" },
                                { label: "TVA & frais", value: "€12.00" }
                            ].map((item, i) => (
                                <div key={i} className={`w-full justify-between flex items-center gap-[15px] mt-[${i === 0 ? '34px' : '30px'}]`}>
                                    <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>{item.label}</span>
                                    <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>{item.value}</span>
                                </div>
                            ))}

                            <div className={`mt-[31px] w-full h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[23px]`}>
                                <span className={`text-white font-sfPro font-normal text-[18px] leading-[24px] tracking-[-1.2%]`}>Prix total</span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>€215.90</span>
                            </div>

                            <GradientButton className={`w-full h-[44px] rounded-full mt-[60px] text-white font-sfPro font-medium text-[16px] leading-[100%] tracking-[0] align-middle`}>
                                Payer maintenant
                            </GradientButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
