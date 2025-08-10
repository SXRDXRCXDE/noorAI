"use client"
import Header from "@/components/Header/Header";
import bg_pricing from "@/assets/images/bg_pricing.png";
import family from "@/assets/images/family.png";
import house from "@/assets/images/house.png";
import robotTeacher from "@/assets/images/robo_teach.jpg";
import ai from "@/assets/images/ai_language.jpg";
import teacher from "@/assets/images/robot_teach_kids.jpg";
import Image from "next/image";
import {ArrowLeft, ArrowRight, CalendarRange, Check} from "lucide-react";
import GradientButton from "@/components/GradientButton";
import {useState} from "react";
import {Footer} from "@/app/pages/landing/landing";


export default function Pricing() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

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
        <div className={`w-full h-[calc(804px+467px)] relative `}>
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
            <div className={`absolute top-0 left-0 w-full h-full pt-[236px] flex flex-col items-center `}>

                <div className={`flex flex-col items-center`}>
                    <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal text-center align-middle  `}>ABONNEMENTS</span>
                    <span className={`text-[#FFFFFF] max-w-[950px] mt-[28px] font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle  `}>Choisissez le plan qui vous convient</span>
                    <span className={`text-[#FFFFFF]/70 max-w-[950px] mt-[24px] font-sfPro font-normal text-2xl leading-8 tracking-normal text-center align-middle  `}>Whether you're a parent, educator, or school, we offer flexible pricing plans tailored to your needs — so you can get the most out of NoorAI at your own pace.</span>
                </div>

                <div className={`flex items-start gap-[30px] mt-[69px]`}>

                    {Services.map((value, index)=> <div key={index} className={`w-[379px] h-[667px] pricing_card`}>
                        <div className={`w-full h-full bg-[#FFFFFF14] flex flex-col items-center pt-[47px] px-[35px] backdrop-blur-[254px] rounded-[29px] relative`}>

                            <div className={`w-[128px] h-[128px] rounded-full bg-[#0000001A] centered`}>
                                <Image
                                    src={value.image}
                                    alt="bg"
                                    className="object-cover w-[92px] h-[92px]  "
                                />
                            </div>

                            <span className={`text-white mt-[28px] font-sfPro font-semibold text-2xl leading-[24px] tracking-[-0.012em] text-center`}>
                                    {value.title}
                                </span>

                            <div className={`w-full h-[1px] mt-[31px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent`}></div>

                            <div className={`w-full h-[72px] mt-[22px] flex flex-col items-center `}>
                                {value.description}
                            </div>

                            <div className={`w-full flex flex-col items-start`}>
                                    <span className={`text-white font-sfPro font-semibold text-base leading-[24px] tracking-[-0.012em]`}>
                                        Include:
                                    </span>
                                <div className={`w-full flex flex-col items-start mt-[17px] gap-y-3 `}>

                                    {value.options.map((inner,e)=> <div key={e} className={`w-full flex items-center gap-[12px] `}>
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
    const [active, setActive] = useState("Location");
    return(
        <div className={`w-full h-[873px] bg-[#FFFFFF14] relative overflow-hidden`}>
            <div className={`absolute -left-[288px] bottom-[58px] blur-[804px] w-[972px] h-[972px] rounded-full bg-[#0D496F] `}></div>
            <div className={`absolute -right-[423px] bottom-[257px] blur-[804px] w-[972px] h-[972px] rounded-full bg-[#501C6A] `}></div>
            <div className={`absolute left-0 top-0 w-full h-full flex flex-col items-center  pt-[56px]`}>

                <div className={`w-full max-w-[1000px] flex flex-col items-center text-center`}>

                        <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                            DISPOSITIF
                        </span>
                    <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                Optez pour une tarification simple et flexible
                        </span>
                    <span className={`mt-6 text-white/70 font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Choisissez la formule qui correspond à vos besoins et à votre budget.
                                Que vous préfériez louer ou acheter, NoorAI s'adapte à votre famille.
                        </span>

                </div>

                <div className={`w-full max-w-[1200px] flex flex-col items-center mt-[69px]`}>
                    <div className={`flex items-center gap-[60px]`}>
                        <Switcher
                            label="Location"
                            active={active === "Location"}
                            onClick={() => setActive("Location")}
                        />
                        <Switcher
                            label="AChat"
                            active={active === "AChat"}
                            onClick={() => setActive("AChat")}
                        />
                    </div>
                </div>
                <div className={'w-full px-[120px] flex flex-col items-center mt-[59px] gap-[51px] '}>
                    <div className={`w-full flex flex-col items-center `}>
                        <div className={`w-full flex items-center justify-between`}>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Type de formule</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Durée d’engagement</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Tarif mensuel</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Engagemment</span>
                        </div>
                        <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent mt-[31px]`}></div>
                    </div>
                    <div className={`w-full flex flex-col items-center `}>
                        <div className={`w-full flex items-center justify-between`}>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Option-A</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>12 Mois</span>
                            <span className={`text-[#F6EB13] font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>€17.60/mois</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>1  an</span>
                        </div>
                        <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent mt-[31px]`}></div>
                    </div>
                    <div className={`w-full flex flex-col items-center `}>
                        <div className={`w-full flex items-center justify-between`}>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>Option-B</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>24 Mois</span>
                            <span className={`text-[#F6EB13] font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>€9.80/mois</span>
                            <span className={`text-white font-sfPro font-semibold text-[24px] leading-[24px] tracking-[-0.012em]`}>2 ans</span>
                        </div>
                        <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[#E7E7E7] to-transparent mt-[31px]`}></div>
                    </div>
                </div>
                <span className={`text-white max-w-[850px] mt-[80px] font-sfPro font-bold text-[24px] leading-[170%] tracking-[0] text-center`}>
                            💡 Un investissement intelligent Avec l'abonnement de 24 mois, NoorAI coûte moins de 0,33 €/jour, appareil compris.
                        </span>

            </div>
        </div>
    );
}


export function Section3() {
    return(
        <div className={`w-full h-[898px] relative overflow-hidden`}>
            <div className={`w-full h-full flex flex-col items-center pt-[83px] px-[120px]`}>

                <div className={`w-full flex items-center justify-between `}>
                    <span className={`text-white font-inter font-bold text-[50.91px] leading-[54.55px] tracking-[-0.02em]`}>Dernières nouvelles</span>
                    <div className={`flex items-center gap-[14px]`}>
                        <div className={`text-white w-[55px] h-[55px] rounded-[12px] bg-[#FFFFFF33] centered`}>
                            <ArrowLeft size={27} />
                        </div>
                        <div className={`text-white w-[55px] h-[55px] rounded-[12px] bg-[#FFFFFF33] centered`}>
                            <ArrowRight size={27} />
                        </div>
                    </div>
                </div>

                <div className={`flex items-center justify-center gap-[22px] mt-[64px]`}>

                    <NewsCard
                        image={teacher}
                        tag="ai revelation"
                        date="15 Sep, 2021"
                        title="NoorAI Set to Revolutionize Classrooms with ..."
                        onReadMore={() => console.log("Read More Clicked")}
                    />
                    <NewsCard
                        image={ai}
                        tag="education"
                        date="15 Sep, 2021"
                        title="AI-Powered Learning Goes Multilingual with NoorAI’s ..."
                        onReadMore={() => console.log("Read More Clicked")}
                    />
                    <NewsCard
                        image={robotTeacher}
                        tag="AI Empower"
                        date="15 Sep, 2021"
                        title="AI-Powered Learning Goes Multilingual with NoorAI’s ..."
                        onReadMore={() => console.log("Read More Clicked")}
                    />

                </div>

                <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[37px]'}>
                    <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                        <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Tout voir</span>
                    </div>
                </div>

            </div>
        </div>
    );
}


export function Switcher({ label, active, onClick }) {
    return (
        <div
            className="flex items-center gap-[14px] cursor-pointer"
            onClick={onClick}
        >
            {active ? (
                <div className="switcher_active w-[34px] h-[34px]">
                    <div className="w-full h-full centered p-[4px]">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7D10D5] via-[#4150CD] to-[#00BFFF]"></div>
                    </div>
                </div>
            ) : (
                <div className="border-white border-[2px] rounded-full w-[32px] h-[32px]">
                    <div className="w-full h-full centered p-[4px] opacity-0">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7D10D5] via-[#4150CD] to-[#00BFFF]"></div>
                    </div>
                </div>
            )}

            <span className="text-white font-sfPro font-medium text-2xl leading-[150%] tracking-[-0.04em] capitalize">
        {label}
      </span>
        </div>
    );
}

export function NewsCard({
                                     image,
                                     tag = "ai revelation",
                                     date = "15 Sep, 2021",
                                     title,
                                     onReadMore
                                 }) {
    return (
        <div className="w-[385px] h-[487px] rounded-[30px] relative overflow-hidden">
            {/* Background Image */}
            <Image
                src={image}
                alt="news"
                className="object-cover w-full h-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-black/70 flex items-end w-full h-[243px]">
                <div className="w-full h-[182px] p-[28px] flex flex-col items-start">

                    {/* Tag + Date */}
                    <div className="flex items-center">
                        <div className="px-[10px] py-[5px] rounded-full bg-[#FFC759] font-inter font-medium text-[10.91px] leading-[100%] tracking-[0.01em] text-center uppercase">
                            {tag}
                        </div>
                        <div className="flex items-center ml-[15px] text-white gap-[6px] font-sfPro font-medium text-[14.55px] leading-[21.82px] tracking-[0] text-center">
                            <CalendarRange size={15} />
                            <span>{date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <span className="text-white line-clamp-2 mt-[11px] font-sfPro font-medium text-[18px] leading-[25.45px] tracking-[0]">
            {title}
          </span>

                    {/* Read More */}
                    <button
                        onClick={onReadMore}
                        className="text-white flex items-center gap-[7px] mt-[11px] font-sfPro font-medium text-[18px] leading-[25.45px] tracking-[0]"
                    >
                        Read More <ArrowRight size={21} />
                    </button>
                </div>
            </div>
        </div>
    );
}