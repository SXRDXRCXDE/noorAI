import Header from "@/components/Header/Header";
import Image from "next/image";
import bg_pricing from "@/assets/images/bg_pricing.png";
import {BadgePercent, Check, ChevronRight} from "lucide-react";
import GradientButton from "@/components/GradientButton";
import paypal from "@/assets/images/paypal.png"
import payooner from "@/assets/images/payooner.png"
import {Input} from "@/components/ui/input";


export default function PaymentPage() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

            <Section1/>

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

                <div className={`checkout_card mt-[60px] w-full h-[724px]`}>
                    <div className={`w-full h-full bg-[#FFFFFF14] backdrop-blur-[254px] rounded-[30px] flex items-center justify-between `}>

                        <div className={`w-2/3 h-full flex flex-col items-start py-[82px] px-[64px]`}>

                            <div className={`w-full flex items-center justify-between`}>

                                <span className={`text-white font-sfPro font-[590] text-[24px] leading-[24px] tracking-[-1.2%]`}>Méthode de paiement</span>

                            </div>

                            <div className={`mt-[31px] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`flex items-center gap-4 mt-5`}>

                                <div className={`w-5 h-5 rounded-full bg-[#754BF3] centered`}>
                                    <div className={`w-[6px] h-[6px] rounded-full bg-white`}></div>
                                </div>

                                <Image alt={`paypal`} className={`w-[100px] h-[67px] object-cover`} src={paypal}/>

                                <div className={`flex flex-col items-start `}>
                                    <span className={`text-white font-sfPro font-[590] text-[20px] leading-[140%] tracking-[1px]`}>Paypal</span>
                                    <span className={`text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[1px]`}>yelenastacia99@gmail.com</span>
                                </div>

                            </div>

                            <div className={`flex items-center gap-4 mt-5`}>

                                <div className={`w-5 h-5 rounded-full border-2  centered`}>
                                    <div className={`w-[6px] h-[6px] rounded-full bg-white opacity-0`}></div>
                                </div>

                                <Image alt={`payooner`} className={`w-[100px] h-[67px] object-cover`} src={payooner}/>

                                <div className={`flex flex-col items-start `}>
                                    <span className={`text-white font-sfPro font-[590] text-[20px] leading-[140%] tracking-[1px]`}>Payoneer</span>
                                    <span className={`text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[1px]`}>8329 3288 823 ****</span>
                                </div>

                            </div>

                            <div className={`w-full flex items-center justify-between mt-[30px]`}>

                                <span className={`text-white font-sfPro font-[590] text-[20px] leading-[24px] tracking-[-1.2%]`}>Méthode de paiement</span>

                            </div>

                            <div className={`mt-[0px] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full flex items-start gap-[15px]  `}>

                                <div className={`w-1/2 flex flex-col items-start`}>

                                    <div className={`w-full flex flex-col items-start mt-[10px] gap-2`}>

                                        <span className={` text-white font-sfPro font-[590] text-[16px] leading-[140%] tracking-[-0.2px]`}>Nom du titulaire</span>

                                        <Input placeholder={`Saisissez votre nom`} className={`w-full bg-[#FFFFFF1A] h-[46px] rounded-[12px] border border-[#E4E9EE80] text-white placeholder:text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[0px]`}/>

                                    </div>

                                    <div className={`w-full flex flex-col items-start mt-[27px] gap-2`}>

                                        <span className={` text-white font-sfPro font-[590] text-[16px] leading-[140%] tracking-[-0.2px]`}>Date d’expiration</span>

                                        <Input placeholder={`Sélectionnez la date d’exp.`} type={`date`} className={`w-full bg-[#FFFFFF1A] h-[46px] rounded-[12px] border border-[#E4E9EE80] text-white placeholder:text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[0px]`}/>

                                    </div>

                                </div>

                                <div className={`w-1/2 flex flex-col items-start`}>

                                    <div className={`w-full flex flex-col items-start mt-[10px] gap-2`}>

                                        <span className={` text-white font-sfPro font-[590] text-[16px] leading-[140%] tracking-[-0.2px]`}>Numéro de carte</span>

                                        <Input placeholder={`0000 - 0000 - 0000 - 0000`} className={`w-full bg-[#FFFFFF1A] h-[46px] rounded-[12px] border border-[#E4E9EE80] text-white placeholder:text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[0px]`}/>

                                    </div>

                                    <div className={`w-full flex flex-col items-start mt-[27px] gap-2`}>

                                        <span className={` text-white font-sfPro font-[590] text-[16px] leading-[140%] tracking-[-0.2px]`}>CVV</span>

                                        <Input placeholder={`Saisissez votre code CVV`} className={`w-full bg-[#FFFFFF1A] h-[46px] rounded-[12px] border border-[#E4E9EE80] text-white placeholder:text-[#818B9C] font-sfPro font-normal text-[16px] leading-[160%] tracking-[0px]`}/>

                                    </div>

                                </div>

                            </div>

                            <div className={`flex items-center gap-4 mt-[30px] self-end`}>

                                <div className={'gradient_border_button centered relative text-white w-[160px] h-[46px] '}>
                                    <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                                        <span className={`text-[16px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Annuler</span>
                                    </div>
                                </div>

                                <GradientButton className={` text-white rounded-full  w-[160px] h-[46px] font-sfPro font-bold text-[16px] leading-[140%] tracking-[-0.2px] text-center`}>Ajouter la carte</GradientButton>

                            </div>
                        </div>

                        <div className={`w-[2px] h-[431px] bg-gradient-to-t from-transparent via-white/20 to-transparent`}></div>

                        <div className={`w-1/3 h-full flex flex-col items-start py-[82px] px-[42px]`}>
                            <div className={`w-full flex items-center justify-between`}>

                                <span className={`text-white font-sfPro font-[590] text-[32px] leading-[24px] tracking-[-1.2%]`}>Résumé du paiement</span>

                            </div>
                            <div className={`mt-[31px] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[34px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    Prix
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>
                                    €189.00
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
                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[30px] `}>
                                <span className={`text-white font-sfPro font-normal text-[16px] leading-[24px] tracking-[-1.2%]`}>
                                    TVA & frais
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[20px] leading-[24px] tracking-[-1.2%]`}>
                                    €12.00
                                </span>
                            </div>

                            <div className={`mt-[31px] w-full h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>

                            <div className={`w-full justify-between flex items-center gap-[15px] mt-[23px] `}>
                                <span className={`text-white font-sfPro font-normal text-[18px] leading-[24px] tracking-[-1.2%]`}>
                                    Prix total
                                </span>
                                <span className={`text-[#F6EB13] font-sfPro font-normal text-[24px] leading-[24px] tracking-[-1.2%]`}>
                                    €215.90
                                </span>
                            </div>

                            <div className={`w-full h-[63px] gradient_border_card mt-[30px] `}>
                                <div className={`w-full h-full rounded-[12px] bg-[#FFFFFF26] flex items-center pl-3 relative`}>
                                    <GradientBadgePercent size={20}/>
                                    <div className={`ml-3 flex flex-col items-start`}>
                                        <span className={`text-white font-sfPro font-[590] text-[14px] leading-[140%] tracking-[-0.2px]`}>Promotion appliquée</span>
                                        <span className={`text-white/70 font-sfPro font-normal text-[12px] leading-[160%] tracking-[0px]`}>1 réduction de frais de port utilisée</span>
                                    </div>
                                    <ChevronRight className={`absolute right-3 top-0 bottom-0 m-auto`} color={`#FFFFFF`} size={20} />
                                </div>
                            </div>

                            <div className={`w-full flex items-start mt-5`}>
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#008000] centered`}>
                                    <Check color={`#FFFFFF`} size={14}/>
                                </div>
                                <span className={`ml-[10px] text-white font-sfpro font-normal text-[16px] leading-[24px] tracking-[0]`}>Notre processus de paiement est sécurisé et sans risque.</span>
                            </div>

                            <GradientButton className={`w-full h-[44px] rounded-full mt-[60px] text-white font-sfPro font-medium text-[16px] leading-[100%] tracking-[0] align-middle`}>Payer maintenant</GradientButton>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}



export function GradientBadgePercent({ size = 20 }) {
    return (
        <svg
            width={size}
            height={(size * 21) / 20} // keep original ratio
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.32408 12.717L2.05742 11.4503C1.54076 10.9337 1.54076 10.0837 2.05742 9.56698L3.32408 8.3003C3.54075 8.08363 3.71575 7.65863 3.71575 7.35863V5.56694C3.71575 4.83361 4.31575 4.23363 5.04909 4.23363H6.84075C7.14075 4.23363 7.56575 4.05865 7.78242 3.84199L9.04908 2.57531C9.56574 2.05864 10.4158 2.05864 10.9324 2.57531L12.1991 3.84199C12.4158 4.05865 12.8407 4.23363 13.1407 4.23363H14.9324C15.6658 4.23363 16.2657 4.83361 16.2657 5.56694V7.35863C16.2657 7.65863 16.4407 8.08363 16.6574 8.3003L17.9241 9.56698C18.4408 10.0837 18.4408 10.9337 17.9241 11.4503L16.6574 12.717C16.4407 12.9337 16.2657 13.3587 16.2657 13.6587V15.4503C16.2657 16.1836 15.6658 16.7837 14.9324 16.7837H13.1407C12.8407 16.7837 12.4158 16.9587 12.1991 17.1753L10.9324 18.442C10.4158 18.9587 9.56574 18.9587 9.04908 18.442L7.78242 17.1753C7.56575 16.9587 7.14075 16.7837 6.84075 16.7837H5.04909C4.31575 16.7837 3.71575 16.1836 3.71575 15.4503V13.6587C3.71575 13.3503 3.54075 12.9253 3.32408 12.717Z"
                stroke="url(#paint0_linear)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 13L12.5 8"
                stroke="url(#paint1_linear)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.0791 12.5834H12.0866"
                stroke="url(#paint2_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.91209 8.41667H7.91957"
                stroke="url(#paint3_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient id="paint0_linear" x1="10.2805" y1="18.8295" x2="14.4306" y2="3.20665" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B355FF" />
                    <stop offset="1" stopColor="#00BFFF" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="10.0871" y1="13" x2="11.3339" y2="8.30611" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B355FF" />
                    <stop offset="1" stopColor="#00BFFF" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="12.0973" y1="13" x2="12.3055" y2="12.2179" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B355FF" />
                    <stop offset="1" stopColor="#00BFFF" />
                </linearGradient>
                <linearGradient id="paint3_linear" x1="7.93031" y1="8.83333" x2="8.13849" y2="8.05123" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B355FF" />
                    <stop offset="1" stopColor="#00BFFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
