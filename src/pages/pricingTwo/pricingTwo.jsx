import family from "@/assets/images/family.png";
import house from "@/assets/images/house.png";
import Image from "next/image";
import bg_pricing from "@/assets/images/bg_pricing.png";
import {ArrowLeft, ArrowRight, Check} from "lucide-react";
import GradientButton from "@/components/GradientButton";
import phone from "@/assets/images/phone_catcher.png";
import heart from "@/assets/images/hart_shape_hand.png";
import teacher from "@/assets/images/robot_teach_kids.jpg";
import ai from "@/assets/images/ai_language.jpg";
import robotTeacher from "@/assets/images/robo_teach.jpg";
import Footer from "@/components/Footer/Footer";
import NewsCard from "@/components/NewsCard/NewsCard";
import Switcher from "@/components/Switcher/Switcher";
import GradientBorderButton from "@/components/GradientBorderButton/GradientBorderButton";



export default function PricingTwo() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Section1/>

            <Section2/>

            <Section3/>

            <Footer/>
        </div>
    );
}

export function Section1() {

    const Services = [
        {
            title:`For Families`,
            image:family,
            description: <div className={`w-full flex items-center justify-between`}>
                <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>Monthly Subscription: </span>
                <span className={` text-[#F6EB13] font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>€14.90-29.90 </span>
            </div>,
            options : [
                `Unlimited App Access`,
                `Regular Update`,
                `Personalised Tracking`,
                `24/7 Support`,
            ]
        },
        {
            title:`For School & Institutions`,
            image:house,
            description: <div className={`w-full flex flex-col `}>
                <div className={`w-full flex items-center justify-between`}>
                    <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>Volume License: </span>
                    <span className={` text-[#F6EB13] font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>€200-500/class</span>
                </div>
                <div className={`w-full flex items-center justify-between`}>
                    <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>Monthly Subscription: </span>
                    <span className={` text-[#F6EB13] font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>€200-500/class</span>
                </div>
            </div>,
            options : [
                `Dashboard`,
                `CSV Export`,
                `Rights Management`,
                `ENT Integration`,
            ]
        },
        {
            title:`Need Customise Package`,
            image:family,
            description: <div className={`w-full flex items-center justify-between`}>
                <span className={`text-white/70 font-sfPro font-normal text-base leading-[24px] tracking-[-0.012em]`}>
                    Not sure yet? Contact us for a tailored offer and discover how NoorAI can
                    support your family.
                </span>
            </div>,
            options : [
                `Leasing`,
                `Multi-Station Installation`,
                `Training Included`,
            ]
        },
    ];

    return(
        <div className={`w-full max-[420px]:h-[calc(804px+467px+100px+600px)] max-[980px]:h-[calc(804px+467px+100px)] h-[calc(804px+467px)] relative `}>
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
            <div className={`absolute top-0 left-0 w-full h-full max-[1200px]:pt-[160px] pt-[236px] flex flex-col items-center `}>

                <div className={`flex flex-col items-center`}>
                    <span data-aos={`fade-down`} className={`text-[#00BFFF] font-sfPro font-medium max-[1200px]:text-lg text-2xl leading-none tracking-normal text-center align-middle  `}>ABONNEMENTS</span>
                    <span data-aos={`fade-down`} data-aos-delay={`1000`} className={`text-[#FFFFFF] max-w-[950px] mt-[28px] font-sfPro font-bold max-[1200px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle  `}>Choisissez le plan qui vous convient</span>
                    <span data-aos={`fade-down`} data-aos-delay={`1500`} className={`text-[#FFFFFF]/70 max-w-[950px] mt-[24px] font-sfPro font-normal max-[1200px]:text-lg text-2xl leading-8 tracking-normal text-center align-middle  `}>Whether you're a parent, educator, or school, we offer flexible pricing plans tailored to your needs — so you can get the most out of NoorAI at your own pace.</span>
                </div>

                <div className={`flex max-[980px]:flex-wrap max-[980px]:justify-center items-start gap-[30px] max-[980px]:mt-[20px] max-[1200px]:mt-[150px] mt-[69px]`}>

                    {Services.map((value, index)=> <div data-aos={`fade-right`} data-aos-delay={`${index*500}`} key={index} className={`max-[1200px]:w-[279px] max-[980px]:h-[467px] max-[1200px]:h-[567px] w-[379px] h-[667px] pricing_card`}>
                        <div className={`w-full h-full bg-[#FFFFFF14] flex flex-col items-center max-[1200px]:pt-[20px] pt-[47px] max-[1200px]:px-[15px] px-[35px] backdrop-blur-[254px] rounded-[29px] relative`}>

                            <div className={` max-[1200px]:w-[88px] max-[1200px]:h-[88px] w-[128px] h-[128px] rounded-full bg-[#0000001A] centered`}>
                                <Image
                                    src={value.image}
                                    alt="bg"
                                    className="object-cover max-[1200px]:w-[52px] max-[1200px]:h-[52px] w-[92px] h-[92px]  "
                                />
                            </div>

                            <span className={`text-white mt-[28px] max-[1200px]:mt-[12px] font-sfPro font-semibold max-[1200px]:text-xl text-2xl leading-[24px] tracking-[-0.012em] text-center`}>
                                    {value.title}
                                </span>

                            <div className={`w-full h-[1px] mt-[31px] max-[1200px]:mt-[16px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent`}></div>

                            <div className={`w-full h-[72px] mt-[22px] max-[980px]:mt-[11px] flex flex-col items-center `}>
                                {value.description}
                            </div>

                            <div className={`w-full flex flex-col items-start`}>
                                    <span className={`text-white  font-sfPro font-semibold text-base leading-[24px] tracking-[-0.012em]`}>
                                        Include:
                                    </span>
                                <div className={`w-full flex flex-col items-start max-[980px]:mt-[7px] mt-[17px] gap-y-3 `}>

                                    {value.options.map((inner,e)=> <div key={e} className={`w-full flex items-center max-[980px]:gap-[6px] gap-[12px] `}>
                                        <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                            <Check color={`white`} size={14} />
                                        </div>
                                        <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>{inner}</span>
                                    </div>)}


                                </div>
                            </div>

                            <GradientButton className={`absolute bottom-[34px] left-0 right-0 m-auto w-[250px] h-[44px] rounded-full a text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Choose Plan</GradientButton>

                        </div>
                    </div>)}


                </div>

            </div>
        </div>
    );
}


export function Section2() {
    const active = "Renting"
    return(
        <div className={`w-full h-[1254px] bg-[#FFFFFF14] relative overflow-hidden`}>
            <div className={`absolute -left-[288px] -top-[192px] blur-[804px] w-[972px] h-[972px] rounded-full bg-[#0D496F] `}></div>
            <div className={`absolute -right-[423px] -top-[391px] blur-[824px] w-[972px] h-[972px] rounded-full bg-[#501C6A] `}></div>
            <div className={`absolute left-0 top-0 w-full h-full flex flex-col items-center  pt-[56px]`}>

                <div className={`w-full max-[980px]:px-[10px] max-w-[1000px] flex flex-col items-center text-center`}>

                        <span data-aos={`fade-down`} data-aos-delay={`500`} className={`text-[#00BFFF] font-sfPro font-medium max-[1200px]:text-xl text-2xl leading-none tracking-normal align-middle`}>
                            DISPOSITIF
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`1000`} className={`mt-[28px] text-white font-sfPro font-bold max-[1200px]:text-[32px] text-[48px] leading-[120%] tracking-normal`}>
                                Optez pour une tarification simple et flexible
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`1500`} className={`mt-6 max-[1200px]:mt-3 text-white/70 font-sfPro font-normal max-[1200px]:text-xl text-2xl leading-none tracking-normal`}>
                                Choisissez la formule qui correspond à vos besoins et à votre budget.
                                Que vous préfériez louer ou acheter, NoorAI s'adapte à votre famille.
                        </span>

                </div>

                <div className={`w-full max-w-[1200px] flex flex-col items-center max-[1200px]:mt-[25px] mt-[69px]`}>
                    <div data-aos={`fade-down`} data-aos-delay={`500`} className={`flex items-center gap-[60px]`}>
                        <Switcher
                            label="Renting"
                            active={active === "Renting"}
                        />
                        <Switcher
                            label="Buying"
                            active={active === "Buying"}
                        />
                    </div>
                </div>
                <div className={'w-full max-[420px]:px-[15px] max-[1200px]:px-[60px] px-[120px] flex flex-col items-center mt-[59px] gap-[51px] '}>
                    <div data-aos={`fade-down`} data-aos-delay={`500`} className={`w-full max-w-[1200px] h-[752px] pricing_card2`}>
                        <div className={`w-full h-full rounded-[29px] flex max-[420px]:flex-col items-start justify-center bg-[#FFFFFF0A]`}>

                            <Image
                                src={phone}
                                alt="bg"
                                className="self-center object-contain scale-x-[-1] max-[420px]:w-[126px] max-[420px]:h-[204px] max-[1200px]:w-[346px] max-[1200px]:h-[484px] w-[446px] h-[584px]  "
                            />

                            <div className={`self-center w-[1px] h-[80%] max-[420px]:hidden bg-gradient-to-b from-transparent via-[#E7E7E7] to-transparent`}></div>

                            <div className={`max-w-[455px] w-full mt-[65px] max-[420px]:mt-[0px] max-[980px]:ml-[0px] max-[980px]:px-[15px] max-[1200px]:ml-[30px] ml-[80px] flex flex-col max-[420px]:items-center items-start `}>

                                <Image
                                    src={heart}
                                    alt="bg"
                                    className="object-contain w-[108px] h-[108px]  "
                                />

                                <div className={`w-full flex flex-col max-[420px]:items-center items-start`}>

                                    <span className={`text-white font-sfPro font-semibold max-[980px]:text-[24px] text-[32px] leading-[24px] tracking-[-0.012em]`}>Achat unique</span>

                                    <div className={`w-full h-[1px] max-[980px]:mt-[16px] mt-[31px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent `}></div>

                                    <div className={`w-full flex items-center max-[980px]:mt-[16px] mt-[31px] justify-between`}>
                                        <span className={`text-white font-sfPro font-normal max-[980px]:text-[18px] text-[24px] leading-[24px] tracking-[-0.012em]`}>Paiement unique : </span>
                                        <span className={` text-[#F6EB13]  font-sfPro font-normal max-[980px]:text-[18px] text-[24px] leading-[24px] tracking-[-0.012em]`}>189 € TTC</span>
                                    </div>

                                    <div className={`w-full flex flex-col items-start max-[420px]:mt-[20px] mt-[65px]`}>
                                    <span className={`text-white font-sfPro font-semibold text-[18px] leading-[24px] tracking-[-0.012em]`}>
                                        Inclus:
                                    </span>
                                        <div className={`w-full flex flex-col items-start mt-[17px] gap-y-3 `}>

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
                                                <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Abonnement non inclus</span>
                                            </div>
                                            <div className={`w-full flex items-center gap-[12px] `}>
                                                <div className={`w-6 h-6 rounded-full bg-[#FFFFFF1A] centered`}>
                                                    <Check color={`white`} size={14} />
                                                </div>
                                                <span className={`text-white font-sfPro font-normal text-base leading-[24px] tracking-normal`}>Vous possédez l’appareil NoorAI à vie.</span>
                                            </div>
                                            <GradientButton className={`w-[250px] h-[44px] rounded-full max-[420px]:self-center max-[420px]:mt-[30px] mt-[94px]`}>Choose Plan</GradientButton>


                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export function Section3() {
    return(
        <div className={`w-full h-[898px] max-[420px]:h-[2000px] max-[980px]:h-[1450px] relative overflow-hidden`}>
            <div className={`w-full h-full flex flex-col items-center pt-[83px] max-[420px]:px-[10px] max-[1200px]:px-[40px] px-[120px]`}>

                <div  data-aos={`fade-down`} data-aos-delay={`500`} className={`w-full flex items-center justify-between `}>
                    <span className={`text-white font-inter font-bold max-[1200px]:text-[32px] text-[50.91px] leading-[54.55px] tracking-[-0.02em]`}>Dernières nouvelles</span>
                    <div className={`flex items-center max-[980px]:hidden gap-[14px]`}>
                        <div className={`text-white w-[55px] h-[55px] rounded-[12px] bg-[#FFFFFF33] centered`}>
                            <ArrowLeft size={27} />
                        </div>
                        <div className={`text-white w-[55px] h-[55px] rounded-[12px] bg-[#FFFFFF33] centered`}>
                            <ArrowRight size={27} />
                        </div>
                    </div>
                </div>

                <div data-aos={`fade-down`} data-aos-delay={`1000`} className={`flex items-center max-[980px]:flex-wrap justify-center gap-[22px] mt-[64px]`}>

                    <NewsCard
                        image={teacher}
                        tag="ai revelation"
                        date="15 Sep, 2021"
                        title="NoorAI Set to Revolutionize Classrooms with ..."

                    />
                    <NewsCard
                        image={ai}
                        tag="education"
                        date="15 Sep, 2021"
                        title="AI-Powered Learning Goes Multilingual with NoorAI’s ..."

                    />
                    <NewsCard
                        image={robotTeacher}
                        tag="AI Empower"
                        date="15 Sep, 2021"
                        title="AI-Powered Learning Goes Multilingual with NoorAI’s ..."

                    />

                </div>

                <div data-aos={`fade-down`} data-aos-delay={`1500`}>
                    <GradientBorderButton
                        text={`Tout voir`}
                        className={`gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[37px]`}
                        innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                        textClassName={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                    />
                </div>

            </div>
        </div>
    );
}