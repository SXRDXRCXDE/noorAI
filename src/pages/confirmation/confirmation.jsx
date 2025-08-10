import Image from "next/image";
import bg_pricing from "@/assets/images/bg_pricing.png";
import Header from "@/components/Header/Header";
import {Footer} from "@/app/pages/landing/landing";
import {FaCircleCheck} from "react-icons/fa6";
import GradientButton from "@/components/GradientButton";


export default function Confirmation() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

            <div className={`w-full h-screen relative overflow-hidden`}>

                <div className={`absolute left-0 top-0 w-full h-full `}>
                    <div className={`w-full h-full relative `}>
                        <div className={`absolute bottom-0 left-0 w-full h-[467px] overflow-hidden`}>
                            <div className={`w-full h-full relative overflow-hidden`}>
                                <div className={`absolute -right-[423px] -bottom-[138px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#501C6A]`}></div>
                                <div className={`absolute -left-[288px] top-[310px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#0D496F]`}></div>
                            </div>
                        </div>
                        <div className={`absolute left-0 top-0 w-full h-full  relative overflow-hidden`}>
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

                <div className={`absolute left-0 top-0 pt-[212px] w-full flex flex-col items-center`}>

                    <div className={`max-w-[880px] flex flex-col items-center `}>

                        <FaCircleCheck color={`#20E643`} size={`138`}/>

                    </div>

                    <div className={`flex flex-col items-center mt-[32px]`}>
                        <span className={`text-white font-sfPro font-[860] text-[32px] leading-[140%] tracking-[-0.2px] text-center`}>Votre paiement a été effectué avec succès</span>
                        <span className={`text-[#818B9C] mt-[12px] max-w-[600px] font-sfPro font-[510] text-[18px] leading-[160%] tracking-[0px] text-center`}>Votre paiement sera traité dans les 30 minutes.<br/> En cas de problème, veuillez contacter le service client par chat.<br/> Les informations détaillées seront affichées ci-dessous.</span>


                        <div className={`flex items-center gap-4 mt-[62px] `}>

                            <div className={'gradient_border_button centered relative text-white w-[160px] h-[46px] '}>
                                <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                                    <span className={`text-[16px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Voir les détails</span>
                                </div>
                            </div>

                            <GradientButton className={` text-white rounded-full  w-[160px] h-[46px] font-sfPro font-bold text-[16px] leading-[140%] tracking-[-0.2px] text-center`}>Retour à l’accueil</GradientButton>

                        </div>
                    </div>

                </div>


            </div>

            <Footer/>

        </div>
    );
}