import Header from "@/components/Header/Header";
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
import {Footer} from "@/app/pages/landing/landing";



export default function Technology() {
    return(
        <div className={'w-full min-h-screen h-auto bg-[#000000] relative'}>

            <Header/>

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
            <BlobBackground width={520} height={554} className="absolute top-[144px] left-[109px]" />
            <BlobBackground width={470} height={502} className="absolute top-[170px] left-[134px]" />
            <Image
                src={robot}
                alt="bg"
                className="absolute left-[168px] top-[211px] object-cover w-[402px] h-[402px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[104px] px-[109px] `}>
                <div className={`w-1/2 h-full`}></div>
                <div className={`w-1/2 max-w-[608px] h-full flex flex-col items-start pt-[90px] `}>
                    <div className={`w-full flex flex-col items-start`}>

                        <span className={`text-white font-sfPro font-bold text-5xl leading-none tracking-normal align-middle`}>Un robot éducatif, pensé pour l’humain.</span>
                        <span className={`mt-8 text-white font-sfPro font-normal text-2xl leading-none tracking-normal align-middle`}>
                                NoorAI combine design, intelligence et sensibilité pour accompagner chaque élève, chaque jour.
                                <br/>
                                <br/>
                                Imaginez un compagnon qui comprend, encourage et guide votre enfant, à chaque étape de son apprentissage.
                            </span>

                        <GradientButton className={`rounded-full text-white mt-[70px] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle w-[358px] h-[69px]`}>Découvrez NoorAI</GradientButton>

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
        <div className={`w-full h-[1044px] relative overflow-hidden`}>
            <div className={`absolute top-[95px] -left-[288px] w-[972px] h-[972px] bg-[#0D496F] rounded-full blur-[804px]`}></div>
            <div className={`absolute bottom-[156px] -right-[526px] w-[972px] h-[972px] bg-[#0E4D59] rounded-full blur-[804px]`}></div>
            <GradientBlob className={`absolute right-[22px] bottom-[124px] `} />
            <GradientBlob width={587} height={501} className={`absolute right-[46px] bottom-[144px] `} />
            <Image
                src={phone}
                alt="bg"
                className="absolute right-[92px] scale-x-[-1] bottom-[189px] w-[555px] h-[591px] object-contain  "
            />
            <div className={`absolute top-0 left-0 w-full h-full pt-[96px] flex flex-col items-center  `}>
                <div className={`max-w-[950px] flex flex-col items-center`}>
                        <span className={`text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.48)] font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle`}>
                            Caractéristiques techniques
                        </span>
                    <span className={`text-white/70 font-sfPro font-normal text-2xl leading-[150%] tracking-normal text-center align-middle`}>Conçu à Paris avec une technologie intelligente et centrée sur l'humain pour améliorer l'apprentissage, la communication et la connexion émotionnelle - le tout dans un seul et même compagnon intelligent.</span>
                </div>
                <div className={`w-full flex items-start mt-[74px] pl-[131px]`}>
                    <div className={`w-1/2 flex flex-col items-start gap-[32px]`}>
                        {Options.map((value, index)=> <div key={index} className={`flex items-center `}>
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
        <div className={`w-full h-[976px] relative overflow-hidden bg-[#FFFFFF1A]`}>

            <div className={`absolute -left-[288px] -bottom-[234px] w-[847px] h-[847px] rounded-full bg-[#0C511191] blur-[474px]`}></div>
            <div className={`absolute -right-[279px] bottom-[147px] w-[761px] h-[761px] rounded-full bg-[#29043B] blur-[474px]`}></div>
            <div className={`absolute left-0 top-0 w-full h-full pt-[114px] flex flex-col items-center`}>

                <div className={`flex flex-col items-center`}>
                    <span className={`text-white font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle`}>Fonctionnalités clés</span>
                    <span className={`mt-4 text-white/70 font-sfPro font-normal text-2xl leading-[150%] tracking-normal text-center align-middle`}>NoorAI, c’est plus qu’un outil : c’est un partenaire de confiance pour la réussite de votre enfant.</span>
                </div>

                <div className={`w-full flex flex-col items-center mt-[72px] px-[120px]`}>
                    <div className={`flex items-start gap-[29px] `}>
                        {Cards.map((value, index)=>  <div key={index} className={`w-[278px] flex flex-col items-center`}>
                            <div className={`functional_card w-[278px] h-[304px] `}>
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
                    <GradientButton className={`w-[358px] h-[69px] mt-[108px] text-white rounded-full font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>Voir NoorAI en action</GradientButton>
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
            <BlurredBlob width={531} height={534} className="absolute bottom-[108px] left-[84px] backdrop_blur-[123px]" />
            <BlurredBlob width={444} height={448} className="absolute bottom-[153px] left-[128px] backdrop_blur-[123px]" />
            <Image
                src={online}
                alt="bg"
                className="absolute left-[168px] top-[211px] object-cover w-[402px] h-[402px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[104px] px-[109px] `}>
                <div className={`w-1/2 h-full`}></div>
                <div className={`w-1/2 max-w-[608px] h-full flex flex-col items-start pt-[90px] `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span className={`text-white font-sfPro font-bold text-5xl leading-none tracking-normal align-middle`}>
                                Un design épuré, moderne,pensé pour s’intégrer harmonieusement partout.
                            </span>
                            <span className={`mt-8 text-white font-sfPro font-normal text-2xl leading-none tracking-normal align-middle`}>
                                NoorAI n'est pas seulement intelligent, il est aussi magnifiquement conçue. Avec son design épuré et minimaliste, ce compagnon IA s'intègre naturellement dans les salles de classe et les foyers.
                                                                <br/><br/>
                                Chaque courbe et élément d'interface est conçu pour que l'interaction soit intuitive, sûre et accueillante pour les apprenants de tous âges.
                            </span>

                        <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[37px]'}>
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
            <WhiteGradientBlob width={488} height={460} className="absolute top-[265px] right-[148px] backdrop_blur-[123px]" />
            <WhiteGradientBlob width={437} height={412} className="absolute top-[289px] right-[174px] backdrop_blur-[123px]" />
            <Image
                src={cartoon}
                alt="bg"
                className="absolute right-[180px] top-[216px] object-cover w-[476px] h-[519px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full pt-[114px] flex flex-col items-center`}>

                <div className={`flex flex-col items-center`}>
                    <span className={`text-white font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle`}>Les avantages de NoorAI</span>
                    <span className={`max-w-[720px] mt-4 text-white/70 font-sfPro font-normal text-[24px] leading-[150%] tracking-normal text-center align-middle`}>Offrez à votre enfant un environnement où il se sent compris, encouragé et valorisé.</span>
                </div>

                <div className={`w-full flex items-start mt-[74px] pl-[131px]`}>
                    <div className={`w-1/2 flex flex-col items-start gap-[32px]`}>
                        {Services.map((value, index)=> <div key={index} className={`flex items-center `}>
                            <div className={`w-[72px] h-[72px] bg-[#FFFFFF1A] rounded-[20px] centered`}>
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
                <GradientButton className={`w-[358px] h-[69px] mt-[175px] text-white rounded-full font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>Voir NoorAI en action</GradientButton>
            </div>
        </div>
    );
}

export  function BlobBackground({ width = 520, height = 554, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 520 554"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M259.567 0.224895C308.732 -3.84088 344.875 48.1934 386.921 77.5515C433.669 110.192 508.667 119.963 519.006 181.374C529.661 244.657 451.578 281.082 431.317 341.232C412.882 395.961 444.576 469.509 408.058 510.759C371.626 551.912 310.686 530.816 259.567 535.235C203.073 540.12 141.252 573.208 93.7751 537.931C46.107 502.513 43.1879 425.947 28.2094 363.332C14.0268 304.043 -14.8404 239.714 9.2941 184.772C33.1346 130.499 100.269 130.512 144.955 97.5613C185.957 67.3266 210.875 4.25156 259.567 0.224895Z"
                fill="white"
                fillOpacity="0.04"
            />
        </svg>
    );
}

export  function GradientBlob({ width = 635, height = 542, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 659 585"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M373.625 556.012C312.703 578.46 234.991 603.135 183.832 565.433C131.325 526.736 171.542 438.904 139.232 383.269C106.831 327.477 10.1359 315.303 1.57797 251.605C-6.85021 188.872 45.295 126.801 99.9212 90.6735C150.143 57.4591 217.111 84.5686 275.934 70.1585C339.218 54.656 392.706 -14.8674 454.505 3.81055C515.612 22.2794 522.692 102.543 556.301 154.896C592.102 210.662 669.435 254.947 657.595 320.16C645.673 385.82 555.787 404.039 503.123 447.779C458.756 484.629 428.196 535.903 373.625 556.012Z"
                fill="url(#paint0_linear_13_1656)"
                fillOpacity="0.08"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_1656"
                    x1="645.442"
                    y1="232.917"
                    x2="22.852"
                    y2="358.101"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#30BDE0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.32" />
                </linearGradient>
            </defs>
        </svg>
    );
}


export function BlurredBlob({ width = 536, height = 531, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 536 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <foreignObject
                x="-123.093"
                y="-122.924"
                width="782.224"
                height="777.325"
            >
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        backdropFilter: "blur(61.77px)",
                        WebkitBackdropFilter: "blur(61.77px)",
                        clipPath: "url(#bgblur_0_13_1693_clip_path)",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </foreignObject>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M528.813 297.718C539.464 351.133 541.722 417.105 504.043 456.417C465.212 496.931 396.713 477.658 342.503 492.1C302.054 502.876 267.019 533.4 225.25 530.693C183.849 528.01 151.156 497.949 115.13 477.363C77.6246 455.931 28.5762 445.534 8.8956 407.064C-10.7787 368.607 9.45255 322.724 14.0415 279.764C18.3088 239.816 23.7215 201.724 34.9505 163.151C49.7104 112.448 47.9808 49.1064 90.3533 17.6214C132.12 -13.4132 191.458 7.34578 243.473 8.20862C296.441 9.08726 357.841 -10.6111 399.014 22.7416C440.767 56.5643 424.704 124.997 447.647 173.602C469.116 219.083 518.977 248.391 528.813 297.718Z"
                fill="white"
                fillOpacity="0.05"
            />
            <defs>
                <clipPath
                    id="bgblur_0_13_1693_clip_path"
                    transform="translate(123.093 122.924)"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M528.813 297.718C539.464 351.133 541.722 417.105 504.043 456.417C465.212 496.931 396.713 477.658 342.503 492.1C302.054 502.876 267.019 533.4 225.25 530.693C183.849 528.01 151.156 497.949 115.13 477.363C77.6246 455.931 28.5762 445.534 8.8956 407.064C-10.7787 368.607 9.45255 322.724 14.0415 279.764C18.3088 239.816 23.7215 201.724 34.9505 163.151C49.7104 112.448 47.9808 49.1064 90.3533 17.6214C132.12 -13.4132 191.458 7.34578 243.473 8.20862C296.441 9.08726 357.841 -10.6111 399.014 22.7416C440.767 56.5643 424.704 124.997 447.647 173.602C469.116 219.083 518.977 248.391 528.813 297.718Z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}


export function WhiteGradientBlob({ width = 438, height = 442, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 438 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M313.906 408.743C278.336 422.394 245.052 441.967 206.934 441.886C165.842 441.798 125.553 430.368 90.8429 408.265C53.0731 384.215 11.4802 355.005 1.7981 311.26C-7.80629 267.867 33.5852 230.712 41.8888 187.087C51.1559 138.4 14.8865 73.2649 53.086 41.8081C91.9839 9.77607 150.672 63.5934 200.554 56.428C248.571 49.5304 284.429 -6.98016 332.186 1.71624C379.898 10.4044 425.071 52.1004 436.304 99.3571C447.634 147.023 389.432 185.741 387.56 234.677C385.884 278.499 443.5 317.296 426.426 357.647C410.023 396.411 353.159 393.678 313.906 408.743Z"
                fill="url(#paint0_linear_13_1683)"
                fillOpacity="0.5"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_1683"
                    x1="215.321"
                    y1="461.614"
                    x2="220.323"
                    y2="5.3629"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.16" />
                    <stop offset="1" stopColor="white" stopOpacity="0.13" />
                </linearGradient>
            </defs>
        </svg>
    );
}