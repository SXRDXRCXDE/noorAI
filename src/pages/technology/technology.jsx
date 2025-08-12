import rasm from "@/assets/images/bg_dots.png";
import robot from "@/assets/images/robot_card.png";
import right from "@/assets/images/right_arrow.png";
import phone from "@/assets/images/phone_catcher.png";
import robotbot from "@/assets/images/robot.png";
import note from "@/assets/images/note.png";
import phonestat from "@/assets/images/phonebox.png";
import qr from "@/assets/images/qr.png";
import bg_new from "@/assets/images/bg_new.png";
import online from "@/assets/images/online.png";
import cartoon from "@/assets/images/cartoon_kids.png";
import fist from "@/assets/images/best_fist.png";
import graduate from "@/assets/images/something.png";
import emptyFist from "@/assets/images/empty_fis.png";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import SvgBlob from "@/components/SvgBlob";
import Footer from "@/components/Footer/Footer";
import WhiteGradientBlob from "@/components/WhiteGradientBlob/WhiteGradientBlob";
import GradientBlob from "@/components/GradientBlob/GradientBlob";
import BlobBackground from "@/components/BlobBackground/BlobBackground";
import BlurredBlob from "@/components/BlurredBlob/BlurredBlob";
import GradientBorderButton from "@/components/GradientBorderButton/GradientBorderButton";



export default function Technology() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            {/*Section 1*/}
            <Section1/>

            {/*Section 2*/}
            <Section2/>

            {/*Section 3*/}
            <Section3/>

            {/*Section 4*/}
            <Section4/>

            {/*Section 5*/}
            <Section5/>

            <Footer/>

        </div>
    );
}

export function Section1() {
    return(
        <div className={`w-full h-[775px] relative bg-[#08063EA6] overflow-hidden`}>
            <Image
                src={rasm}
                alt="bg"
                className="absolute left-0 top-0 object-cover w-full h-full  "
            />
            <div className={'absolute left-0 top-0 w-full h-full bg-[#08063EA6]'}></div>
            <div className={'absolute left-[166px] top-[217px] blur-[154px] w-[321px] h-[321px] rounded-full bg-[#00BFFF]'}></div>
            <BlobBackground width={520} height={554} className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:top-28 max-[420px]:m-auto max-[420px]:w-[220px] max-[420px]:h-[254px] max-[980px]:w-[420px] max-[980px]:h-[454px] max-[980px]:left-[9px] max-[1200px]:left-[59px] top-[144px] left-[109px]" />
            <BlobBackground width={470} height={502} className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:top-[138px] max-[420px]:m-auto max-[420px]:w-[170px] max-[420px]:h-[202px] max-[980px]:w-[370px] max-[980px]:h-[402px] max-[980px]:left-[34px] max-[1200px]:left-[84px] top-[170px]  left-[134px]" />
            <Image
                data-aos={`zoom-in`}
                data-aos-delay={`500`}
                src={robot}
                alt="bg"
                className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:top-44 max-[420px]:m-auto max-[420px]:w-[152px] max-[420px]:h-[152px] max-[980px]:w-[302px] max-[980px]:h-[302px] max-[980px]:left-[68px] max-[1200px]:left-[118px] left-[168px] top-[211px] object-cover w-[402px] h-[402px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[104px] max-[980px]:px-[20px] px-[109px] `}>
                <div className={`w-1/2 max-[420px]:hidden h-full`}></div>
                <div className={`w-1/2 max-[420px]:w-full max-[420px]:pt-[220px] max-w-[608px] h-full flex flex-col items-start pt-[90px] `}>
                    <div className={`w-full flex flex-col items-start`}>

                        <span data-aos={`fade-left`} className={`text-white font-sfPro font-bold max-[980px]:text-4xl text-5xl leading-none tracking-normal align-middle`}>Un robot éducatif, pensé pour l’humain.</span>
                        <span data-aos={`fade-left`} data-aos-delay={`500`} className={`mt-8 max-[420px]:mt-3 text-white font-sfPro font-normal max-[980px]:text-xl text-2xl leading-none tracking-normal align-middle`}>
                                NoorAI combine design, intelligence et sensibilité pour accompagner chaque élève, chaque jour.
                                <br/>
                                <br/>
                                Imaginez un compagnon qui comprend, encourage et guide votre enfant, à chaque étape de son apprentissage.
                            </span>

                        <div data-aos={`fade-left`} data-aos-delay={`1000`}>
                            <GradientButton  className={`rounded-full text-white max-[420px]:mt-[30px] mt-[70px] font-sfPro font-medium max-[980px]:text-xl text-2xl leading-none tracking-normal align-middle max-[980px]:w-[258px] max-[980px]:h-[55px] w-[358px] h-[69px]`}>Découvrez NoorAI</GradientButton>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section2() {

    const Options = [
        {
            title:`Camera 8MP  : `,
            description:`Vision précise pour l’analyse des devoirs `
        },
        {
            title:`Bras articulé`,
            description:`Interactions naturelles `
        },
        {
            title:`Détection émotionnelle`,
            description:`Adapte son accompagnement à l’état d’esprit de l’élève`
        },
        {
            title:`Multilingue`,
            description:`Français, anglais, arabe`
        },
        {
            title:`Écran tactile`,
            description:`Interface intuitive, adaptée à tous les âges`
        },
        {
            title:`Voix interactive`,
            description:`Échanges fluides, naturels et bienveillants`
        },
    ]


    return(
        <div className={`w-full h-[1044px] max-[420px]:h-[1444px] relative overflow-hidden`}>
            <div className={`absolute top-[95px] -left-[288px] w-[972px] h-[972px] bg-[#0D496F] rounded-full blur-[804px]`}></div>
            <div className={`absolute bottom-[156px] -right-[526px] w-[972px] h-[972px] bg-[#0E4D59] rounded-full blur-[804px]`}></div>
            <GradientBlob width={635} height={542} className={`absolute max-[420px]:-translate-x-5 max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:bottom-[20px] max-[980px]:w-[435px] max-[980px]:h-[342px] max-[980px]:right-0 right-[22px] bottom-[124px] `} />
            <GradientBlob width={587} height={501} className={`absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:bottom-[40px] max-[980px]:w-[387px] max-[980px]:h-[301px] max-[980px]:right-[24px] right-[46px] bottom-[144px] `} />
            <Image
                data-aos={`zoom-in`}
                data-aos-delay={500}
                src={phone}
                alt="bg"
                className="absolute max-[420px]:w-[325px] max-[420px]:h-[361px] max-[420px]:bottom-[89px] max-[980px]:w-[455px] max-[980px]:h-[491px] max-[980px]:right-[0px] right-[92px] scale-x-[-1] bottom-[189px] w-[555px] h-[591px] object-contain  "
            />
            <div className={`absolute top-0 left-0 w-full h-full max-[980px]:pt-[46px] pt-[96px] flex flex-col items-center  `}>
                <div className={`max-w-[950px] max-[420px]:px-2 flex flex-col items-center`}>
                        <span data-aos={`fade-down`} className={`text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.48)] font-sfPro font-bold max-[980px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle`}>
                            Caractéristiques techniques
                        </span>
                    <span data-aos={`fade-down`} data-aos-delay={`500`} className={`text-white/70 font-sfPro font-normal max-[980px]:text-xl text-2xl leading-[150%] tracking-normal text-center align-middle`}>Conçu à Paris avec une technologie intelligente et centrée sur l'humain pour améliorer l'apprentissage, la communication et la connexion émotionnelle - le tout dans un seul et même compagnon intelligent.</span>
                </div>
                <div className={`w-full flex items-start mt-[74px] max-[980px]:pl-[20px] pl-[131px]`}>
                    <div className={`w-1/2 max-[420px]:w-full flex flex-col items-start gap-[32px]`}>
                        {Options.map((value, index)=> <div data-aos={`fade-down`} data-aos-delay={`${index*300}`} key={index} className={`flex items-center `}>
                            <Image
                                src={right}
                                alt="bg"
                                className="flex-shrink-0 w-[35px] h-[35px] object-contain  "
                            />
                            <div className={`flex flex-col items-start ml-10 gap-3`}>
                                <span className={`text-white font-sfPro font-semibold text-2xl leading-none tracking-normal align-middle`}>{value.title}</span>
                                <span className={`text-white/70 font-sfPro font-semibold text-2xl leading-none tracking-normal align-middle`}>{value.description}</span>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section3() {

    const Cards = [
        {
            image:robotbot,
            description: `Guidance vocale multilingue`
        },
        {
            image:note,
            description: `Analyse intelligente des devoirs`
        },
        {
            image:phonestat,
            description: `Adaptation en temps réel`
        },
        {
            image:qr,
            description: `Reconnaissance émotionnelle avancée`
        },
    ];

    return(
        <div className={`w-full h-[976px] max-[420px]:h-[1600px] relative overflow-hidden bg-[#FFFFFF1A]`}>

            <div className={`absolute -left-[288px] -bottom-[234px] w-[847px] h-[847px] rounded-full bg-[#0C511191] blur-[474px]`}></div>
            <div className={`absolute -right-[279px] bottom-[147px] w-[761px] h-[761px] rounded-full bg-[#29043B] blur-[474px]`}></div>
            <div className={`absolute left-0 top-0 w-full h-full max-[980px]:pt-[30px] max-[1200px]:pt-[64px] pt-[114px] flex flex-col items-center`}>

                <div className={`flex flex-col  items-center`}>
                    <span data-aos={`fade-down`} className={`text-white font-sfPro font-bold max-[420px]:text-2xl max-[1200px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle`}>Fonctionnalités clés</span>
                    <span data-aos={`fade-down`} data-aos-delay={`500`} className={`mt-4 max-[1200px]:mt-2 text-white/70 font-sfPro font-normal max-[1200px]:text-xl text-2xl leading-[150%] tracking-normal text-center align-middle`}>NoorAI, c’est plus qu’un outil : c’est un partenaire de confiance pour la réussite de votre enfant.</span>
                </div>

                <div className={`w-full flex flex-col items-center max-[1200px]:mt-[20px] mt-[72px] px-[120px]`}>
                    <div className={`flex max-[1200px]:flex-wrap max-[1200px]:justify-center items-start max-[1200px]:gap-4 gap-[29px] `}>
                        {Cards.map((value, index)=>  <div data-aos={`fade-down`} data-aos-delay={`${index*400}`} key={index} className={`max-[1200px]:w-[208px] w-[278px] flex flex-col items-center`}>
                            <div className={`functional_card max-[1200px]:w-[208px] max-[1200px]:h-[234px] w-[278px] h-[304px] `}>
                                <div className={`w-full h-full centered rounded-[28px] bg-[#FFFFFF0F]`}>
                                    <div className={'w-[200px] h-[200px] centered '}>
                                        <Image
                                            src={value.image}
                                            alt="bg"
                                            className="object-contain w-full h-full "
                                        />
                                    </div>
                                </div>
                            </div>
                            <span className={`text-white mt-5 font-sfPro font-semibold text-2xl leading-none tracking-normal text-center align-middle`}>
                                    {value.description}
                                </span>
                        </div>)}
                    </div>
                    <div data-aos={`fade-down`}>
                        <GradientButton className={` max-[980px]:w-[298] max-[980px]:h-[55px] w-[358px] h-[69px] max-[1200px]:mt-[20px] mt-[108px] text-white rounded-full font-sfPro font-medium max-[980px]:text-xl text-2xl leading-none tracking-normal align-middle`}>Voir NoorAI en action</GradientButton>
                    </div>
                </div>

            </div>

        </div>
    );
}

export function Section4() {
    return(
        <div className={`w-full h-[786px] relative overflow-hidden `}>
            <Image
                src={bg_new}
                alt="bg"
                className="absolute left-0 top-0 object-cover w-full h-full "
            />
            <div className={`absolute left-0 top-0 w-full h-full bg-[#030728BD]`}></div>
            <div className={`absolute -left-[288px] -top-[613px] w-[847px] h-[847px] rounded-full bg-[#0C511191] blur-[474px]`}></div>
            <BlurredBlob width={531} height={534} className="absolute max-[420px]:-translate-y-[400px] max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:w-[231px] max-[420px]:h-[234px] max-[980px]:w-[431px] max-[980px]:h-[434px] max-[1200px]:left-[24px] bottom-[108px] left-[84px] backdrop_blur-[123px]" />
            <BlurredBlob width={444} height={448} className="absolute max-[420px]:-translate-y-[400px] max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:w-[144px] max-[420px]:h-[148px] max-[980px]:w-[344px] max-[980px]:h-[348px] max-[1200px]:left-[68px] bottom-[153px] left-[128px] backdrop_blur-[123px]" />
            <Image
                data-aos={`zoom-in`}
                data-aos-delay={`500`}
                src={online}
                alt="bg"
                className="absolute max-[420px]:top-16 max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[980px]:top-[281px] max-[1200px]:left-[68px] left-[168px] top-[211px] object-cover max-[420px]:w-[152px] max-[420px]:h-[152px] max-[980px]:w-[302px] max-[980px]:h-[302px] w-[402px] h-[402px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[104px] max-[980px]:px-[20px] px-[109px] `}>
                <div className={`w-1/2 max-[420px]:hidden h-full`}></div>
                <div className={`w-1/2 max-[420px]:w-full  max-w-[608px]  h-full flex flex-col items-start max-[420px]:pt-[180px] max-[1200px]:pt-[20px] pt-[90px] `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span data-aos={`fade-left`} className={`text-white font-sfPro font-bold max-[420px]:text-2xl max-[1200px]:text-3xl text-5xl leading-none tracking-normal align-middle`}>
                                Un design épuré, moderne,pensé pour s’intégrer harmonieusement partout.
                            </span>
                            <span data-aos={`fade-left`} data-aos-delay={`500`} className={`mt-8 max-[420px]:mt-4 text-white font-sfPro font-normal max-[1200px]:text-xl text-2xl leading-none tracking-normal align-middle`}>
                                NoorAI n'est pas seulement intelligent, il est aussi magnifiquement conçue. Avec son design épuré et minimaliste, ce compagnon IA s'intègre naturellement dans les salles de classe et les foyers.
                                                                <br/><br/>
                                Chaque courbe et élément d'interface est conçu pour que l'interaction soit intuitive, sûre et accueillante pour les apprenants de tous âges.
                            </span>

                        <div data-aos={`fade-left`} data-aos-delay={`1200`}>
                            <GradientBorderButton
                                text={`En savoir plus`}
                                className={`gradient_border_button centered relative text-white max-[420px]:w-[280px]  w-[358px] h-[69px] mt-[37px]`}
                                innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                                textClassName={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export function Section5() {

    const Services = [
        {
            image:fist,
            title: `Renforce la confiance et l’estime de soi`
        },
        {
            image: graduate,
            title: `Favorise l’autonomie et la curiosité`
        },
        {
            image:emptyFist,
            title: `Engagement personnalisé, motivation durable`
        },
    ];

    return(
        <div className={`w-full h-[989px] overflow-hidden relative`}>

            {Array.from({ length: 8 }).map((_, i) => {
                const left = -633 - i * 13;
                const top = -0.67 - i * 20;
                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            left: `${left}px`,
                            top: `${top}px`,
                            width: "617px",
                            height: "312px",
                        }}
                        className={'rotate-[15.6deg]'}
                    >
                        <SvgBlob />
                    </div>
                );
            })}
            <div className={`absolute -left-[451px] top-0 blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#063532]`}></div>
            <div className={`absolute -right-[249px] -top-[14px] blur-[794px] w-[761px] h-[761px] rounded-full bg-[#240379]`}></div>
            <div className={`absolute -right-[259px] -bottom-[calc(171px+289px)] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#06303F]`}></div>
            <WhiteGradientBlob width={488} height={460} className="absolute max-[420px]:top-[615px] max-[980px]:w-[388px] max-[980px]:h-[360px] max-[980px]:right-[18px] max-[1200px]:right-[48px] top-[265px] right-[148px] backdrop_blur-[123px]" />
            <WhiteGradientBlob width={437} height={412} className="absolute max-[420px]:top-[639px] max-[980px]:w-[337px] max-[980px]:h-[312px] max-[980px]:right-[34px] max-[1200px]:right-[74px] top-[289px] right-[174px] backdrop_blur-[123px]" />
            <Image
                data-aos={`zoom-in`}
                data-aos-delay={`500`}
                src={cartoon}
                alt="bg"
                className="absolute max-[420px]:top-[566px] max-[980px]:w-[376px] max-[980px]:h-[419px] max-[980px]:right-[30px] max-[1200px]:right-[80px] right-[180px] top-[216px] object-cover w-[476px] h-[519px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full pt-[114px] flex flex-col items-center`}>

                <div className={`flex flex-col items-center`}>
                    <span data-aos={`fade-down`} className={`text-white font-sfPro font-bold max-[420px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle`}>Les avantages de NoorAI</span>
                    <span data-aos={`fade-down`} data-aos-delay={`500`} className={`max-w-[720px] mt-4 text-white/70 font-sfPro font-normal max-[420px]:text-[18px] text-[24px] leading-[150%] tracking-normal text-center align-middle`}>Offrez à votre enfant un environnement où il se sent compris, encouragé et valorisé.</span>
                </div>

                <div className={`w-full flex items-start max-[420px]:mt-[24px] mt-[74px] max-[420px]:pl-3 max-[1200px]:pl-[41px] pl-[131px]`}>
                    <div className={`w-1/2 max-[420px]:w-full flex flex-col items-start max-[420px]:gap-[16px] gap-[32px]`}>
                        {Services.map((value, index)=> <div data-aos={`fade-down`} data-aos-delay={`${index*500}`} key={index} className={`flex items-center `}>
                            <div className={`w-[72px] h-[72px] bg-[#FFFFFF1A] flex-shrink-0 rounded-[20px] centered`}>
                                <Image
                                    src={value.image}
                                    alt="bg"
                                    className="flex-shrink-0 w-[54px] h-[54px] object-contain  "
                                />
                            </div>

                            <div className={`flex flex-col items-start ml-10 gap-3`}>
                                <span className={`text-white font-sfPro font-semibold text-[24px] leading-none tracking-normal align-middle`}>{value.title}</span>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div data-aos={`fade-down`} data-aos-delay={`1000`}>
                    <GradientButton className={` max-[420px]:w-[258px] w-[358px] max-[420px]:h-[55px] h-[69px] max-[420px]:mt-[75px] mt-[175px] text-white rounded-full font-sfPro font-medium max-[420px]:text-xl text-2xl leading-none tracking-normal align-middle`}>Voir NoorAI en action</GradientButton>
                </div>
            </div>
        </div>
    );
}






