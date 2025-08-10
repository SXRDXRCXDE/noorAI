"use client"
import Header from "@/components/Header/Header";
import shape from "@/assets/images/3dshape.png";
import bg_research from "@/assets/images/bg_waves_cloud.png";
import studentsPrepare from "@/assets/images/students_prepare.png";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import {Switcher} from "@/app/pages/pricing/pricing";
import {useState} from "react";
import LineChartComponent from "@/components/LineChartComponent/LineChartComponent";
import BarchartComponent from "@/components/BarchartComponent/BarchartComponent";
import ChartComponent from "@/components/ChartComponent/ChartComponent";
import brain from "@/assets/images/brain.png";
import book from "@/assets/images/book.png";
import earphone from "@/assets/images/earphone.png";
import library from "@/assets/images/library.png";
import {Footer} from "@/app/pages/landing/landing";



export default function Research() {

    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

            <Section1/>

            <Section2/>

            <Section3/>

            <Section4/>

            <Section5/>

            <Footer/>

        </div>
    );
}


export function Section1() {
    return(
        <div className={`w-full h-[879px] relative overflow-hidden`}>

            <Image
                src={bg_research}
                alt="bg"
                className="absolute left-0 top-0 object-cover w-full h-full  "
            />
            <div className={`absolute top-0 left-0 w-full h-full bg-[#090732E5] `}></div>
            <div className={`absolute top-[94px] -left-[252px] w-[620px] h-[620px] blur-[804px] bg-[#59051F] rounded-full`}></div>
            <div className={`absolute bottom-[61px] -right-[335px] w-[620px] h-[620px] blur-[804px] bg-[#053D59] rounded-full`}></div>
            <SvgBlob width={651} height={590} className="absolute right-[85px] bottom-[81px] " />
            <SvgBlob width={602} height={546} className="absolute right-[110px] bottom-[103px] " />
            <Image
                src={studentsPrepare}
                alt="bg"
                className="absolute right-[149px] bottom-[145px] object-contain w-[513px] h-[513px]  "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[212px] px-[120px] `}>
                <div className={` max-w-[700px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                                Impact social et pédagogique
                            </span>
                        <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                NoorAI réduit le stress scolaire, renforce la confiance en soi et favorise l’engagement.
                            </span>
                        <span className={`mt-[26px] text-white font-sfPro font-normal text-2xl leading-8 tracking-normal`}>
                                Chaque fonctionnalité est fondée sur des recherches scientifiques rigoureuses, évaluées par des pairs.
                                Combinaison des dernières avancées en matière de neurosciences, de psychologie cognitive et d'IA éducative pour construire un outil complet.
                            </span>

                        <GradientButton className={`w-[358px] h-[69px] rounded-full mt-[32px] text-white font-sfPro font-medium text-[24px] leading-[100%] tracking-[0] align-middle`}>Voir NoorAI en action</GradientButton>

                    </div>
                </div>

            </div>
        </div>
    );
}


export function Section2() {

    const [active, setActive] = useState("Avec NoorAI");

    const Options = [
        {
            percent:92,
            title:`des élèves se sentent mieux accompagnés`
        },
        {
            percent:87,
            title:`des parents constatent une progression`
        },
        {
            percent:95,
            title:`des enseignants recommandent NoorAI`
        },
    ];

    return(
        <div className={`w-full h-[calc(1575px+1172px+60px)] relative overflow-hidden`}>

            <Image
                src={shape}
                alt="bg"
                className="absolute -right-[232px] bottom-[876px] object-cover w-[520px] h-[520px]  "
            />
            <div className={`absolute -left-[288px] top-[255px] w-[972px] h-[972px] rounded-full bg-[#0D496F] blur-[804px]`}></div>
            <div className={`absolute -right-[423px] -top-[486px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]`}></div>
            <div className={`absolute -right-[423px] top-[56px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]`}></div>
            <div className={`absolute -right-[423px] bottom-[487px] w-[972px] h-[972px] rounded-full bg-[#0C2064] blur-[804px]`}></div>
            <div className={`absolute -left-[305px] bottom-[199px] w-[972px] h-[972px] rounded-full bg-[#0C2064] blur-[804px]`}></div>
            <div className={`absolute left-0 top-0 w-full h-full flex flex-col items-center  pt-[64px]`}>
                <div className={`w-full max-w-[1000px] flex flex-col items-center text-center`}>
                        <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                            Succès
                        </span>
                    <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                Données & résultats
                        </span>
                    <span className={`mt-6 text-white/70 font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Rejoignez les familles qui font le choix d’un accompagnement innovant et bienveillant.
                        </span>
                </div>
                <div className={`flex items-start gap-[30px] mt-[110px]`}>
                    {Options.map((value, index)=> <div key={index} className={`w-[379px] h-[312px] option_card`}>
                        <div className={`w-full h-full bg-[#FFFFFF14] flex flex-col items-center pt-[47px] px-[35px] backdrop-blur-[254px] rounded-[29px] relative`}>

                            <div className={`w-[128px] h-[128px] rounded-full bg-[#0000001A] centered`}>
                                <span className={`text-white font-sfPro font-semibold text-[32px] leading-[24px] tracking-[-0.012em] text-center`}>{value.percent}%</span>
                            </div>

                            <span className={`text-white mt-[28px] font-sfPro font-semibold text-2xl leading-[24px] tracking-[-0.012em] text-center`}>
                                    {value.title}
                                </span>

                        </div>
                    </div>)}
                </div>
                <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[57px]'}>
                    <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                        <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Tout voir</span>
                    </div>
                </div>
                <span className={`mt-[133px] bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold text-[48px] leading-[62px] tracking-normal text-center capitalize`}>
                        Progression de la concentration (12 <br/> semaines)
                    </span>
                <div className={`flex items-center mt-[58px] gap-[60px]`}>
                    <Switcher
                        label="Avant NoorAI"
                        active={active === "Avant NoorAI"}
                        onClick={() => setActive("Avant NoorAI")}
                    />
                    <Switcher
                        label="Avec NoorAI"
                        active={active === "Avec NoorAI"}
                        onClick={() => setActive("Avec NoorAI")}
                    />
                </div>
                <div className={`w-full max-w-[1400px] h-[450px] mt-[47px] flex flex-col items-center `}>
                    <div className={`w-full h-[350px] `}>
                        <LineChartComponent />
                    </div>
                    <span className={`text-white mt-[48px] font-sfPro font-[510] text-[32px] leading-[150%] tracking-[-0.04em] text-center`}>Semaines</span>
                </div>

                <div className={`w-[calc(100%-17px)] h-[1172px] px-[72px] bg-[#FFFFFF12] flex flex-col items-center mt-[60px]`}>

                    <div className={`w-full flex flex-col items-center pt-[112px] `}>

                            <span className={` bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold text-[48px] leading-[62px] tracking-normal text-center capitalize`}>
                                Reduction du stress scolaire par age
                            </span>
                        <div className={`flex items-center mt-[58px] gap-[60px]`}>
                            <Switcher
                                label="Avant NoorAI"
                                active={active === "Avant NoorAI"}
                                onClick={() => setActive("Avant NoorAI")}
                            />
                            <Switcher
                                label="Avec NoorAI"
                                active={active === "Avec NoorAI"}
                                onClick={() => setActive("Avec NoorAI")}
                            />
                        </div>

                        <div className={`w-full h-[701px] stats_card mt-[48px]`}>
                            <div className={`flex flex-col items-center pt-[47px] w-full h-full bg-[linear-gradient(180deg,rgba(88,86,214,0.1)_0%,rgba(148,18,209,0.1)_100%)] rounded-[32px]`}>
                                <div className={`w-full  h-[650px] pl-[40px] relative overflow-hidden`}>
                                    <BarchartComponent/>
                                    <span className={`absolute -left-[140px] top-0 bottom-0 m-auto rotate-[270deg] w-[377px] h-[48px] text-white font-sfPro font-[510] text-[28px] leading-[47.5px] tracking-[0%] text-center`}>Score de streess (sur 100)</span>
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
        <div className={`w-full h-[1000px] relative overflow-hidden`}>

            <div className={`absolute -bottom-[403px] -right-[259px] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#06303F]`}></div>
            <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-center pt-[125px] px-[64px]`}>

                    <span className={` bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold text-[48px] leading-[62px] tracking-normal text-center capitalize`}>
                        Evolution des resultats scolaires avec <br/> NoorAI
                    </span>

                <div className={`w-full  h-[560px] mt-[30px] flex flex-col items-center relative overflow-hidden`}>
                    <div className={`w-full h-[450px] pl-[40px]`}>
                        <ChartComponent/>
                    </div>
                    <span className={`text-white font-[510] font-sfPro text-[32px] leading-[150%] tracking-[-0.04em] text-center`}>Note moyenne (sur 100)</span>

                </div>

            </div>

        </div>
    );
}

export function Section4() {

    const Cards = [
        {
            avatar : brain,
            title : `Neurosciences et cognition`,
            options: [
                "Pupil response as a marker of cognitive load — Nature, 2022",
                "Emotion-aware tutoring systems: A meta-analysis — Frontiers in Psychology, 2023",
            ],
        },
        {
            avatar : book,
            title : `Pour les parents`,
            options: [
                "Adaptive systems in EdTech improve learning retention — Elsevier, 2024",
                "Real-time feedback boosts working memory in children — Harvard Education research, 2023",
            ],
        },
        {
            avatar : earphone,
            title : `Pour les institutions`,
            options: [
                "Multimodal voice agents enhance motivation in young learners — EdTech Quarterly, 2022",
                "AI tutors outperform standard language apps in comprehension — Journal of Applied Linguistics, 2023",
            ],
        },
    ];

    return(
        <div className={`w-full h-[1129px] relative overflow-hidden`}>

            <div className={`absolute -right-[259px] -top-[603px] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#06303F]`}></div>
            <div className={`absolute -left-[144px] -bottom-[212px] blur-[804px] w-[562px] h-[514px] rounded-full bg-[#053D59]`}></div>
            <div className={`absolute top-0 left-0 w-full h-full bg-[#FFFFFF12] pt-[78px] px-[120px] flex flex-col items-center`}>
                <div className={`w-full max-w-[1000px] flex flex-col items-center text-center`}>

                        <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[150%] tracking-normal`}>
                                Les fondements <br/> scientifiques de NoorAI
                        </span>
                    <span className={`mt-4 text-white/70 font-sfPro font-normal text-2xl leading-[150%] tracking-normal`}>
                                NoorAI est le résultat d'une synthèse approfondie de recherches <br/> récentes et de grande qualité dans trois domaines clés :
                        </span>

                </div>

                <div className={`w-full flex items-start justify-center gap-[30px] mt-[70px] `}>

                    {Cards.map((value, index)=> <div key={index} className={`research_card w-[380px] h-[532px] relative`}>
                        <div  className={'w-full h-full '}>
                            <div className={`w-full h-full rounded-[40px] bg-[#FFFFFF1F] pt-10 px-[25px] flex flex-col items-center`}>
                                <div className={`flex flex-col items-center `}>
                                    <div className={`w-[100px] h-[100px] centered rounded-full bg-[#FFFFFF1F]`}>
                                        <Image
                                            src={value.avatar}
                                            alt="bg"
                                            className="object-cover w-[61px] h-[61px] object-cover "
                                        />
                                    </div>
                                    <span className={`mt-[18px] text-white font-sfPro text-[24px] font-medium leading-[100%] text-center align-middle`}>{value.title}</span>
                                    <div className={`w-[320px] h-[2px] mt-[18px] bg-gradient-to-r from-transparent via-white/20 to-transparent `}></div>
                                </div>

                                <div className={'w-full flex flex-col items-start mt-[34px] '}>
                                    <ul className={'flex flex-col items-start gap-[18px] '}>
                                        {value.options.map((option, indexkey)=> <li key={indexkey} className={` flex items-center`}>
                                            <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-[#FFFFFFE5] translate-y-1`}></div>
                                            <span className={`ml-[15px] text-[#FFFFFFE5] font-sfPro text-[20px] font-normal leading-[30px] align-middle`}>{option}</span>
                                        </li>)}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)}

                </div>

                <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[50px]'}>
                    <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                        <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Voir les articles</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section5() {
    return(
        <div className={`w-full h-[955px] relative overflow-hidden`}>

            <div className={`absolute -top-[303px] -left-[144px] w-[562px] h-[514px] rounded-full blur-[804px] bg-[#053D59]`}></div>
            <SvgBlob width={651} height={590} className="absolute right-[80px] top-[183px] " />
            <SvgBlob width={602} height={546} className="absolute right-[106px] top-[205px] " />
            <Image
                src={library}
                alt="bg"
                className="absolute right-[125px] top-[220px] object-contain w-[583px] h-[441px]  "
            />


            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[269px] px-[120px] `}>
                <div className={` max-w-[540px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                Vision à long terme
                            </span>
                        <span className={`mt-6 text-white font-sfPro font-normal text-2xl leading-[150%] tracking-normal`}>
                                Mesurer l'impact, soutenir la transformation de l'éducation, anticiper les défis de demain.
                                <br/><br/>
                                NoorAI est une EdTech responsable, au service des personnes.
                            </span>

                        <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[72px]'}>
                            <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                                <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>En savoir plus</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}



export function SvgBlob({ width = 615, height = 581, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 615 581"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M596.184 425.888C572.597 487.257 539.099 563.032 470.583 578.759C400.261 594.9 352.945 508.161 282.264 497.944C211.383 487.699 132.773 554.835 71.8808 521.129C11.9117 487.934 -4.81238 408.271 2.55732 343.115C9.33279 283.212 79.863 248.541 108.895 193.887C140.127 135.088 117.932 49.6675 177.558 13.6593C236.517 -21.9459 310.636 23.3933 379.406 30.5257C452.659 38.123 545.286 6.3037 593.111 56.7578C641.264 107.558 593.629 188.668 594.199 257.126C594.679 314.799 617.311 370.917 596.184 425.888Z"
                fill="url(#paint0_linear_13_2414)"
                fillOpacity="0.08"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_2414"
                    x1="509.406"
                    y1="10.927"
                    x2="230.473"
                    y2="596.79"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#30BDE0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.32" />
                </linearGradient>
            </defs>
        </svg>
    );
}