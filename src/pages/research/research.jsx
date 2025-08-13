
import shape from "@/assets/images/3dshape.png";
import bg_research from "@/assets/images/bg_waves_cloud.png";
import studentsPrepare from "@/assets/images/students_prepare.png";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import LineChartComponent from "@/components/LineChartComponent/LineChartComponent";
import BarchartComponent from "@/components/BarchartComponent/BarchartComponent";
import ChartComponent from "@/components/ChartComponent/ChartComponent";
import brain from "@/assets/images/brain.png";
import book from "@/assets/images/book.png";
import earphone from "@/assets/images/earphone.png";
import library from "@/assets/images/library.png";
import Footer from "@/components/Footer/Footer";
import Switcher from "@/components/Switcher/Switcher";
import GradientBorderButton from "@/components/GradientBorderButton/GradientBorderButton";
import SvgBlobComponent from "@/components/SvgBlobComponent/SvgBlobComponent";





export default function Research() {

    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

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
            <SvgBlobComponent width={651} height={590} className=" absolute max-[420px]:bottom-[453px] max-[980px]:bottom-[281px] max-[980px]:w-[351px] max-[980px]:h-[290px] max-[1200px]:right-[5px] right-[85px] bottom-[81px] " />
            <SvgBlobComponent width={602} height={546} className="absolute max-[420px]:bottom-[472px] max-[980px]:bottom-[303px] max-[980px]:w-[302px] max-[980px]:h-[246px] max-[1200px]:right-[30px] right-[110px] bottom-[103px] " />
            <Image
                data-aos={`zoom-in`} data-aos-delay={`500`}
                src={studentsPrepare}
                alt="bg"
                className="absolute max-[420px]:bottom-[517px] max-[980px]:bottom-[345px] max-[980px]:w-[213px] max-[980px]:h-[213px] max-[1200px]:right-[69px] right-[149px] max-[1200px]:bottom-[155px] bottom-[145px] object-contain max-[1200px]:w-[463px] max-[1200px]:h-[463px] w-[513px] h-[513px]  "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start max-[420px]:pt-[412px] pt-[212px] max-[980px]:px-[20px] max-[1300px]:px-[60px] px-[120px] `}>
                <div className={`max-[1200px]:max-w-[500px] max-[1300px]:max-w-[600px] max-w-[700px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span data-aos={`fade-right`} className={`text-[#00BFFF] font-sfPro font-medium max-[420px]:text-sm max-[1200px]:text-xl text-2xl leading-none tracking-normal align-middle`}>
                                Impact social et pédagogique
                            </span>
                        <span data-aos={`fade-right`} data-aos-delay={`1000`} className={`mt-[28px] text-white font-sfPro font-bold max-[420px]:text-xl max-[1300px]:text-3xl text-[48px] leading-[120%] tracking-normal`}>
                                NoorAI réduit le stress scolaire, renforce la confiance en soi et favorise l’engagement.
                            </span>
                        <span data-aos={`fade-right`} data-aos-delay={`1500`} className={`mt-[26px] max-[420px]:mt-[13px] text-white font-sfPro font-normal max-[420px]:text-sm text-2xl leading-8 tracking-normal`}>
                                Chaque fonctionnalité est fondée sur des recherches scientifiques rigoureuses, évaluées par des pairs.
                                Combinaison des dernières avancées en matière de neurosciences, de psychologie cognitive et d'IA éducative pour construire un outil complet.
                            </span>

                        <div data-aos={`fade-right`} data-aos-delay={`2000`}>
                            <GradientButton className={`max-[420px]:w-[258px] max-[420px]:h-[55px] w-[358px] h-[69px] rounded-full mt-[32px] text-white font-sfPro font-medium max-[420px]:tet-[18px] text-[24px] leading-[100%] tracking-[0] align-middle`}>Voir NoorAI en action</GradientButton>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}


export function Section2() {

    const active = "Avec NoorAI"

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
                        <span data-aos={`fade-down`} className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                            Succès
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`1000`} className={`mt-[28px] text-white font-sfPro font-bold max-[1200px]:text-[38px] text-[48px] leading-[120%] tracking-normal`}>
                                Données & résultats
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`1500`} className={`mt-6 text-white/70 font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Rejoignez les familles qui font le choix d’un accompagnement innovant et bienveillant.
                        </span>
                </div>
                <div className={`flex max-[980px]:flex-wrap max-[980px]:justify-center items-start max-[980px]:gap-[15px] gap-[30px] max-[980px]:mt-[20px] max-[1200px]:mt-[65px] mt-[110px]`}>
                    {Options.map((value, index)=> <div data-aos={`fade-right`} data-aos-delay={`${index*500}`} key={index} className={`max-[1200px]:w-[279px] max-[1200px]:h-[212px] w-[379px] h-[312px] option_card`}>
                        <div className={`w-full h-full bg-[#FFFFFF14] flex flex-col items-center max-[1200px]:pt-[27px] max-[1200px]:px-[22px] pt-[47px] px-[35px] backdrop-blur-[254px] rounded-[29px] relative`}>

                            <div className={`max-[1200px]:w-[94px] max-[1200px]:h-[94px] w-[128px] h-[128px] rounded-full bg-[#0000001A] centered`}>
                                <span className={`text-white font-sfPro font-semibold max-[1200px]:text-[28px] text-[32px] leading-[24px] tracking-[-0.012em] text-center`}>{value.percent}%</span>
                            </div>

                            <span className={`text-white max-[1200px]:mt-[12px] mt-[28px] font-sfPro font-semibold max-[1200px]:text-xl text-2xl leading-[24px] tracking-[-0.012em] text-center`}>
                                    {value.title}
                                </span>

                        </div>
                    </div>)}
                </div>
                <div data-aos={`fade-down`} data-aos-delay={`2500`}>
                    <GradientBorderButton
                        text={`Tout voir`}
                        className={`gradient_border_button centered relative text-white w-[358px] h-[69px] max-[980px]:mt-[27px] flex-shrink-0 mt-[57px]`}
                        innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                        textClassName={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                    />
                </div>

                <span data-aos={`fade-down`} data-aos-delay={`500`} className={` max-[980px]:mt-[70px] mt-[133px] bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold max-[980px]:text-[32px] text-[48px] max-[980px]:leading-[32px] leading-[62px] tracking-normal text-center capitalize`}>
                        Progression de la concentration (12 <br/> semaines)
                    </span>
                <div data-aos={`fade-down`} data-aos-delay={`1000`} className={`flex items-center mt-[58px] max-[980px]:gap-[30px] gap-[60px]`}>
                    <Switcher
                        label="Avant NoorAI"
                        active={active === "Avant NoorAI"}
                    />
                    <Switcher
                        label="Avec NoorAI"
                        active={active === "Avec NoorAI"}
                    />
                </div>
                <div data-aos={`fade-down`} data-aos-delay={`1500`} className={`w-full max-w-[1400px] h-[450px] mt-[47px] flex flex-col items-center `}>
                    <div className={`w-full h-[350px] `}>
                        <LineChartComponent />
                    </div>
                    <span className={`text-white max-[1200px]:mt-[28px] mt-[48px] font-sfPro font-[510] text-[32px] leading-[150%] tracking-[-0.04em] text-center`}>Semaines</span>
                </div>

                <div className={`w-[calc(100%-17px)] h-[1172px] max-[980px]:px-[22px] px-[72px] bg-[#FFFFFF12] flex flex-col items-center mt-[60px]`}>

                    <div className={`w-full flex flex-col items-center pt-[112px] `}>

                            <span data-aos={`fade-down`} data-aos-delay={`500`} className={` bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold max-[980px]:text-[32px] text-[48px] leading-[62px] tracking-normal text-center capitalize`}>
                                Reduction du stress scolaire par age
                            </span>
                        <div data-aos={`fade-down`} data-aos-delay={`1000`} className={`flex items-center mt-[58px] max-[980px]:gap-[30px] gap-[60px]`}>
                            <Switcher
                                label="Avant NoorAI"
                                active={active === "Avant NoorAI"}
                            />
                            <Switcher
                                label="Avec NoorAI"
                                active={active === "Avec NoorAI"}
                            />
                        </div>

                        <div data-aos={`fade-down`} data-aos-delay={`1500`} className={`w-full max-[980px]:h-[501px] h-[701px] stats_card mt-[48px]`}>
                            <div className={`flex flex-col items-center pt-[47px] w-full h-full bg-[linear-gradient(180deg,rgba(88,86,214,0.1)_0%,rgba(148,18,209,0.1)_100%)] rounded-[32px]`}>
                                <div className={`w-full max-[980px]:h-[450px] h-[650px] pl-[40px] relative overflow-hidden`}>
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
        <div className={`w-full h-[1000px] max-[980px]:h-[700px] relative overflow-hidden`}>

            <div className={`absolute -bottom-[403px] -right-[259px] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#06303F]`}></div>
            <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-center max-[1200px]:px-[15px] max-[1200px]:pt-[42px] pt-[125px] px-[64px]`}>

                    <span data-aos={`fade-down`} className={` bg-gradient-to-t from-[#7D10D5] to-[#00BFFF] bg-clip-text text-transparent font-sfPro font-semibold max-[980px]:text-[32px] text-[48px] leading-[62px] tracking-normal text-center capitalize`}>
                        Evolution des resultats scolaires avec <br/> NoorAI
                    </span>

                <div data-aos={`fade-down`} data-aos-delay={`500`} className={`w-full  h-[560px] max-[1200px]:h-[450px] mt-[30px] flex flex-col items-center relative overflow-hidden`}>
                    <div className={`w-full h-[450px] max-[1200px]:h-[350px] max-[1200px]:pl-2 pl-[40px]`}>
                        <ChartComponent/>
                    </div>
                    <span className={`text-white font-[510] max-[420px]:-translate-y-20 font-sfPro max-[1300px]: text-[24px] leading-[150%] tracking-[-0.04em] text-center`}>Note moyenne (sur 100)</span>

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
        <div className={`w-full h-[1129px] max-[980px]:h-[1429px] max-[420px]:h-[2029px] relative overflow-hidden`}>

            <div className={`absolute -right-[259px] -top-[603px] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#06303F]`}></div>
            <div className={`absolute -left-[144px] -bottom-[212px] blur-[804px] w-[562px] h-[514px] rounded-full bg-[#053D59]`}></div>
            <div className={`absolute top-0 left-0 w-full h-full bg-[#FFFFFF12] max-[980px]:pt-[10px] pt-[78px] max-[1200px]:px-[30px] px-[120px] flex flex-col items-center`}>
                <div className={`w-full max-w-[1000px] flex flex-col items-center text-center`}>

                        <span data-aos={`fade-down`} className={`mt-[28px] text-white font-sfPro font-bold max-[1200px]:text-[38px] text-[48px] leading-[150%] tracking-normal`}>
                                Les fondements <br/> scientifiques de NoorAI
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`500`} className={`mt-4 text-white/70 font-sfPro font-normal max-[1200px]:text-xl text-2xl leading-[150%] tracking-normal`}>
                                NoorAI est le résultat d'une synthèse approfondie de recherches <br/> récentes et de grande qualité dans trois domaines clés :
                        </span>

                </div>

                <div className={`w-full flex max-[980px]:flex-wrap max-[980px]:justify-center items-start justify-center max-[1200px]:gap-[15px] max-[1200px]:mt-[30px] gap-[30px] mt-[70px] `}>

                    {Cards.map((value, index)=> <div data-aos={`fade-right`} data-aos-delay={`${index*500}`} key={index} className={`research_card flex-shrink-0 w-[380px] h-[532px] max-[1200px]:w-[300px] max-[1200px]:h-[482px] relative`}>
                        <div  className={'w-full h-full '}>
                            <div className={`w-full h-full rounded-[40px] bg-[#FFFFFF1F] pt-10 max-[1200px]:pt-5 max-[1200px]:px-[15px] px-[25px] flex flex-col items-center`}>
                                <div className={`flex flex-col items-center `}>
                                    <div className={`w-[100px] h-[100px] centered rounded-full bg-[#FFFFFF1F]`}>
                                        <Image
                                            src={value.avatar}
                                            alt="bg"
                                            className="object-cover w-[61px] h-[61px] object-cover "
                                        />
                                    </div>
                                    <span className={`mt-[18px] text-white font-sfPro max-[1200px]:text-[20px] text-[24px] font-medium leading-[100%] text-center align-middle`}>{value.title}</span>
                                    <div className={`w-full h-[2px] mt-[18px] bg-gradient-to-r from-transparent via-white/20 to-transparent `}></div>
                                </div>

                                <div className={'w-full flex flex-col items-start mt-[34px] max-[1200px]:mt-[14px] '}>
                                    <ul className={'flex flex-col items-start max-[1200px]:gap-[8px] gap-[18px] '}>
                                        {value.options.map((option, indexkey)=> <li key={indexkey} className={` flex items-center`}>
                                            <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-[#FFFFFFE5] translate-y-1`}></div>
                                            <span className={`ml-[15px] max-[1200px]:ml-[10px] text-[#FFFFFFE5] font-sfPro max-[1200px]:text-[18px] text-[20px] font-normal max-[1200px]:leading-[25pxpx] leading-[30px] align-middle`}>{option}</span>
                                        </li>)}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)}

                </div>

                <div data-aos={`fade-down`} data-aos-delay={`2500`}>
                    <GradientBorderButton
                        text={`Voir les articles`}
                        className={`gradient_border_button centered relative text-white max-[420px]:w-[280px] w-[358px] h-[69px] mt-[50px]`}
                        innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                        textClassName={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                    />
                </div>
            </div>
        </div>
    );
}

export function Section5() {
    return(
        <div className={`w-full h-[955px] relative overflow-hidden`}>

            <div className={`absolute -top-[303px] -left-[144px] w-[562px] h-[514px] rounded-full blur-[804px] bg-[#053D59]`}></div>
            <SvgBlobComponent width={651} height={590} className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:top-[83px] max-[980px]:w-[351px] max-[980px]:h-[290px] max-[1200px]:right-[10px] right-[80px] top-[183px] " />
            <SvgBlobComponent width={602} height={546} className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:top-[105px] max-[980px]:w-[302px] max-[980px]:h-[246px] max-[1200px]:right-[36px] right-[106px] top-[205px] " />
            <Image
                data-aos={`zoom-in`} data-aos-delay={`500`}
                src={library}
                alt="bg"
                className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:top-20 max-[420px]:m-auto  max-[980px]:w-[383px] max-[980px]:h-[241px] max-[1200px]:right-[15px] right-[125px] top-[220px] object-contain w-[583px] h-[441px]  "
            />


            <div className={`absolute left-0 top-0 w-full h-full flex items-start max-[420px]:pt-[360px] max-[980px]:pt-[169px] pt-[269px] max-[420px]:px-[20px] max-[1200px]:px-[60px] px-[120px] `}>
                <div className={` max-w-[540px] max-[980px]:max-w-[350px] max-[1200px]:max-w-[450px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span data-aos={`fade-right`} data-aos-delay={`500`} className={`mt-[28px] text-white font-sfPro font-bold max-[980px]:text-[32px] text-[48px] leading-[120%] tracking-normal`}>
                                Vision à long terme
                            </span>
                        <span data-aos={`fade-right`} data-aos-delay={`1000`} className={`mt-6 text-white font-sfPro font-normal text-2xl leading-[150%] tracking-normal`}>
                                Mesurer l'impact, soutenir la transformation de l'éducation, anticiper les défis de demain.
                                <br/><br/>
                                NoorAI est une EdTech responsable, au service des personnes.
                            </span>

                        <div data-aos={`fade-right`} data-aos-delay={`1500`}>
                            <GradientBorderButton
                                text={`En savoir plus`}
                                className={`gradient_border_button centered relative text-white max-[420px]:w-[258px] w-[358px] h-[69px] mt-[72px]`}
                                innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                                textClassName={`max-[420px]:text-[20px] text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                            />
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}


