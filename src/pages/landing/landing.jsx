import rasm from "@/assets/images/bg_waves.jpg";
import boy from "@/assets/images/boy.png";
import graduate from "@/assets/images/graduateHat.png";
import parents from "@/assets/images/parents.png";
import institute from "@/assets/images/institute.png";
import stats from "@/assets/images/stats.png";
import shape from "@/assets/images/3dshape.png";
import cloud from "@/assets/images/lockedCloud.png";
import image from "@/assets/images/imageBroken.png";
import statistics from "@/assets/images/statistics.png";
import microphone from "@/assets/images/microphone.png";
import attention from "@/assets/images/attention.png";
import david from "@/assets/images/davidWatson.png";
import benalli from "@/assets/images/benalli.png";
import jeanPaul from "@/assets/images/jeanPaul.png";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import SvgBlob from "@/components/SvgBlob";
import LightBlobSvg from "@/components/LightBlobSvg";
import Footer from "@/components/Footer/Footer";
import GradientBorderButton from "@/components/GradientBorderButton/GradientBorderButton";
import ReviewCard from "@/components/ReviewCard/ReviewCard";


export default function Landing() {
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

            {/*Section 6*/}
            <Section6/>

            {/*Footer*/}
            <Footer/>
        </div>
    );
}

export function Section1() {
    return(
        <div className={'w-full h-[645px] relative'}>
            <Image
                src={rasm}
                alt="bg"
                className="object-cover w-full h-full object-cover "
            />
            <div className={'absolute top-0 left-0 w-full h-full backdrop-blur-[15px] bg-[#0000002B] flex flex-col items-center pt-[191px] max-[1200px]:gap-[120px] gap-[79px]'}>
                <div data-aos="fade-up" className={'flex flex-col items-center gap-[29px] '}>
                    <span className={`font-sfPro text-white font-bold max-[400px]:text-[32px] max-[1200px]:text-[48px] text-[64px] leading-[100%] tracking-[0%] text-center align-middle `}>NoorAI : Là où l'apprentissage <br/> trouve sa lumière</span>
                    <span className={'font-sfPro text-white font-normal max-[400px]:text-[16px] max-[1200px]:text-[20px] text-[24px] leading-[100%] tracking-[0%] text-center align-middle'}>Un assistant intelligent, émotionnellement sensible, pour accompagner chaque élève</span>
                </div>
                <div data-aos="fade-zoom-in" data-aos-delay="500" className={'flex flex-col items-center gap-[29px] '}>
                    <GradientButton className={` max-[1200px]:w-[258px] max-[1200px]:h-[55px] w-[358px] h-[70px] rounded-full font-[410] max-[1200px]:text-[20px] text-[24px] leading-[100%] tracking-[0%] align-middle font-sfPro`}>Demander une démo</GradientButton>
                </div>
            </div>
        </div>
    );
}

export  function Section2() {
    return(
        <div className={'w-full h-[686px] relative'}>
            <div className={'w-full h-[686px] relative overflow-hidden'}>
                {Array.from({ length: 8 }).map((_, i) => {
                    const left = -700 + i * 9;
                    const bottom = 388.67 - i * 31;
                    return (
                        <div
                            data-aos={`fade-down`}
                            data-aos-delay={`${i*2}00`}
                            key={i}
                            style={{
                                position: "absolute",
                                left: `${left}px`,
                                bottom: `${bottom}px`,
                                width: "880px",
                                height: "440px",
                            }}
                            className={'rotate-[49.69deg]'}
                        >
                            <SvgBlob />
                        </div>
                    );
                })}
                <div className={'absolute -left-[456px] bottom-[24px] blur-[694px] w-[807px] h-[807px] rounded-full bg-[#3A053D]'}></div>
                <div className={'absolute -right-[126px] bottom-[164px] blur-[524px] w-[570px] h-[570px] rounded-full bg-[#0D6E6F]'}></div>
                <LightBlobSvg
                    data-aos="zoom-in"
                    width={560}
                    height={528}
                    className="absolute top-[95px] rotate-[-163.56°] max-[650px]:left-0 max-[650px]:right-0 max-[650px]:m-auto max-[650px]:w-[260px] max-[650px]:h-[228px] max-[980px]:right-[20px] max-[1300px]:right-[60px] right-[160px] max-[1200px]:w-[460px] max-[1200px]:h-[428px]"
                />

                <LightBlobSvg
                    data-aos="zoom-in"
                    width={507}
                    height={478}
                    className="absolute top-[120px] rotate-[-163.56°] max-[650px]:left-0 max-[650px]:right-0 max-[650px]:m-auto max-[650px]:w-[207px] max-[650px]:h-[178px] max-[980px]:right-[49px] max-[1300px]:right-[89px] right-[189px] max-[1200px]:w-[407px] max-[1200px]:h-[378px]"
                />
                <Image
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    src={boy}
                    alt="bg"
                    className=" max-[650px]:w-[325px] max-[650px]:h-[325px] min-[650px]:hidden absolute left-0 right-0 m-auto top-0  object-cover  object-cover "
                />


                <div className={'absolute left-0 top-0 w-full h-full  flex max-[650px]:flex-col items-start '}>
                    <div  className={'max-[650px]:w-full max-[650px]:pt-80 max-[1200px]:pt-[62px] pt-[125px] max-[650px]:pl-3 max-[650px]:pr-3 max-[980px]:pl-[60px] pl-[123px] w-1/2 flex flex-col items-start '}>
                        <span data-aos="fade-right" className="font-sfPro text-white font-bold  max-[980px]:text-[24px] max-[1200px]:text-[36px] text-[48px] leading-[100%] align-middle">
                          Pourquoi réinventer
                          <br className={'max-[1200px]:hidden'}/>
                           l’éducation ?
                        </span>
                        <span data-aos="fade-right" className={`mt-[27px] max-[650px]:mt-[10px] font-sfPro text-white font-normal max-[980px]:text-[16px] max-[1200px]:text-[20px] text-[24px] max-[420px]:leading-4 leading-8 align-middle tracking-[0%]`}>
                            L’éducation façonne l’avenir. <br/>
                            Pourtant, chaque élève est unique, avec ses forces, ses doutes, ses émotions. Chez NoorAI, nous croyons qu’il est temps d’offrir à chaque apprenant un accompagnement sur-mesure, bienveillant et innovant.
                        </span>
                        <span data-aos="fade-right" className={`mt-[16px] max-[650px]:mt-2 font-sfPro text-white font-normal max-[980px]:text-[16px] max-[1200px]:text-[20px] text-[24px] max-[420px]:leading-4 leading-8 align-middle tracking-[0%]`}>
                            Offrez à votre enfant la chance d’apprendre à son rythme, dans un environnement qui le comprend.
                        </span>
                        <div className={``} data-aos="fade-zoom-in" data-aos-delay="1000">
                            <GradientBorderButton
                                text={`En savoir plus`}
                                textClassName={`text-[24px] max-[1200px]:text-[20px] font-sfPro  font-medium leading-[100%] text-center align-middle`}
                                className={`gradient_border_button centered relative text-white max-[650px]:w-[158px] max-[1200px]:w-[258px] max-[1200px]:h-[50px] w-[358px] h-[69px] mt-[37px] `}
                                innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                            />
                        </div>
                    </div>
                    <div className={'max-[650px]:hidden max-[650px]:pt-64 max-[650px]:pl-0 pt-[125px] pl-[123px] max-[650px]:w-full w-1/2 h-full flex flex-col items-start relative '}>
                        <Image
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            src={boy}
                            alt="bg"
                            className="max-[650px]:hidden absolute right-0 left-0 top-0 bottom-0 m-auto object-cover w-[625px] h-[625px] object-cover "
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export function Section3() {

    const Cards = [
        {
            avatar : graduate,
            title : `Pour les élèves`,
            options: [
                "Soutien personnalisé",
                "Écoute attentive",
                "Motivation renouvelée",
                "NoorAI s’adapte au rythme",
                "Détection des émotions",
                "Encouragements sur  la confiance et l’autonomie",
            ],
        },
        {
            avatar : parents,
            title : `Pour les parents`,
            options: [
                "Suivi transparent",
                "Progrès mesurables",
                "Tranquillité d’esprit",
                "Recevez des rapports clairs",
                "Conseils adaptés pour accompagner votre enfant",
                "100% sécurisé",
            ],
        },
        {
            avatar : institute,
            title : `Pour les institutions`,
            options: [
                "Tableaux de bord ",
                "Analyses en temps réel",
                "Intégration transparente",
                "Intégration fluide à vos systèmes existants.",
                "100% sécurisé",
            ],
        },
    ];

    return(
        <div className={'w-full h-[971px] max-[806px]:h-[calc(971px+120px)] max-[540px]:h-[calc(971px+120px+440px)] max-[980px]:h-[1024px] max-[420px]:h-[1500px] max-[310px]:h-[calc(1500px+50px)] relative overflow-hidden'}>
            <div className={'absolute -left-[201px] bottom-[36px] blur-[794px] w-[761px] h-[761px] bg-[#5C9595] rounded-full '}></div>
            <div className={'absolute -right-[226px] -top-[88px] blur-[984px] w-[650px] h-[650px] bg-[#7A7C8A] rounded-full '}></div>
            <div className={'absolute left-0 top-0 w-full h-full '}>
                <div className={'w-full h-full max-[806px]:pt-[60px] max-[1200px]:pt-[140px] pt-[112px] flex flex-col items-center'}>
                    <div className={`flex flex-col items-center `}>
                        <span data-aos="fade-down" className={`text-white font-sfPro max-[1200px]:text-[32px] text-[48px] font-bold leading-[100%] text-center`}>Bénéfices pour tous</span>
                        <span data-aos="fade-down" data-aos-delay="300" className={`mt-6 max-[1200px]:mt-3 text-white font-sfPro max-[1200px]:text-[20px] text-[24px] font-[400] leading-7 text-center`}>L'éducation façonne l'avenir. Pourtant, chaque élève est unique, avec ses <br/> propres forces, ses doutes et ses émotions.</span>
                    </div>
                <div className={'mt-20 max-[806px]:mt-10 px-3 flex items-start justify-center max-[980px]:flex-wrap max-[980px]:gap-[15px] gap-[30px]'}>

                        {/*Transparent card*/}
                        {Cards.map((value, index)=> <div data-aos="fade-down" data-aos-delay={`${index*300}`} key={index} className={`card_linear max-[1200px]:w-[250px] max-[1200px]:h-[402px] w-[380px] h-[532px] relative`}>
                            <div  className={'w-full h-full '}>
                                <div className={`w-full h-full rounded-[40px] bg-[#FFFFFF1F] max-[1200px]:pt-5 pt-10 px-[25px] flex flex-col items-center`}>
                                    <div className={`flex flex-col items-center `}>
                                        <div className={`max-[1200px]:w-[60px] max-[1200px]:h-[60px] w-[100px] h-[100px] centered rounded-full bg-[#FFFFFF1F]`}>
                                            <Image
                                                src={value.avatar}
                                                alt="bg"
                                                className="object-cover max-[1200px]:w-[31px] max-[1200px]:h-[31px] w-[61px] h-[61px] object-cover "
                                            />
                                        </div>
                                        <span className={`mt-[18px] text-white font-sfPro max-[1200px]:text-[20px] text-[24px] font-medium leading-[100%] text-center align-middle`}>{value.title}</span>
                                        <div className={`w-full h-[2px] max-[1200px]:mt-[10px] mt-[18px] bg-gradient-to-r from-transparent via-white/20 to-transparent `}></div>
                                    </div>

                                    <div className={'w-full flex flex-col items-start max-[1200px]:mt-[10px] mt-[34px] '}>
                                        <ul className={'flex flex-col items-start max-[1200px]:gap-[8px] gap-[18px] '}>
                                            {value.options.map((option, indexkey)=> <li key={indexkey} className={` flex items-start`}>
                                                <div className={`flex-shrink-0 max-[1200px]:w-[8px] max-[1200px]:h-[8px] w-3 h-3 rounded-full bg-[#FFFFFFE5] translate-y-1`}></div>
                                                <span className={`ml-[15px] text-[#FFFFFFE5] font-sfPro max-[1200px]:text-[18px] text-[20px] font-normal leading-[100%] align-middle`}>{option}</span>
                                            </li>)}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section4() {
    return(
        <div className={`w-full h-[779px] relative overflow-hidden`}>

            <div className={`absolute bottom-[90px] left-[15px] w-[559px] h-[559px] bg-[#0A2655] blur-[474px] rounded-full`}></div>
            {Array.from({ length: 8 }).map((_, i) => {
                const right = -330 - i * 13;
                const bottom = 253.67 - i * 20;
                return (
                    <div
                        data-aos={`fade-down`}
                        data-aos-delay={`${i*2}00`}
                        key={i}
                        style={{
                            position: "absolute",
                            right: `${right}px`,
                            bottom: `${bottom}px`,
                            width: "617px",
                            height: "312px",
                        }}
                        className={'rotate-[20.6deg]'}
                    >
                        <SvgBlob />
                    </div>
                );
            })}
            <div className={`absolute bottom-[49px] -right-[243px] w-[761px] h-[761px] bg-[#5C9595] blur-[794px] rounded-full`}></div>
            <LightBlobSvg data-aos={`zoom-in`} width={504} height={475} className="absolute bottom-[153px] rotate-[-163.56°] max-[850px]:left-0 max-[850px]:right-0 max-[850px]:top-5 max-[850px]:-translate-y-40 max-[850px]:m-auto  max-[980px]:w-[304px] max-[980px]:h-[275px]  max-[1200px]:left-[59px] max-[1300px]:left-[109px] left-[189px]" />
            <div className={'absolute left-0 top-0 w-full h-full flex max-[850px]:flex-col items-start '}>
                <div className={'pt-[125px] max-[980px]:pl-[0px] pl-[123px] max-[850px]:w-full max-[980px]:w-[50%] w-1/2 max-[850px]:h-auto h-full flex flex-col items-start relative '}>
                    <Image
                        data-aos={`zoom-in`}
                        data-aos-delay={`600`}
                        src={stats}
                        alt="bg"
                        className="absolute right-0 left-0 top-0 bottom-0 m-auto max-[980px]:translate-y-20 object-cover max-[980px]:w-[326px] max-[980px]:h-[326px] w-[526px] h-[526px] object-cover "
                    />
                </div>
                <div className={'pt-[163px] pl-[123px] max-[850px]:px-3 max-[980px]:pl-0 max-[850px]:w-full max-[850px]:text-center max-[850px]:items-center w-1/2 flex flex-col items-start '}>
                        <span data-aos={`fade-left`} className="font-sfPro text-white font-bold max-[850px]:text-[26px] max-[1200px]:text-[32px] text-[48px] leading-[100%] align-middle">
                          La EdTech en pleine croissance
                          <br className={'max-[1200px]:hidden'}/>
                           l’éducation ?
                        </span>
                        <span data-aos={`fade-left`} data-aos-delay={`300`} className={`mt-[27px] max-[850px]:mt-[17px] font-sfPro text-white font-normal max-[850px]:text-[16px] max-[1200px]:text-[20px] text-[24px] leading-8 align-middle tracking-[0%]`}>
                            L’éducation numérique connaît une révolution sans précédent.
                            +30% de croissance annuelle du secteur EdTech en Europe.
                            <br/><br/>
                            NoorAI s’inscrit au cœur de cette transformation, en alliant intelligence artificielle, pédagogie et éthique.
                        </span>
                    <div data-aos={`fade-left`} data-aos-delay={`600`}>
                        <GradientButton  className={` max-[1200px]:w-[288px] max-[1200px]:h-[55px] w-[358px] h-[69px] rounded-full font-sfPro mt-[50px] max-[1200px]:text-[20px] text-[24px] font-medium leading-[100%] align-middle`}>Rejoindre les autres familles</GradientButton>
                    </div>

                </div>
            </div>

        </div>
    );
}

export function Section5() {

    const Variant = [
        {
            image:cloud,
            name:`Hébergement européen sécurisé`,
            description:`Seul le contenu lié à l'école - exercices, travaux écrits - est transmis à nos serveurs hautement sécurisés situés en Europe.`
        },
        {
            image:image,
            name:`Pas de collection d'images ou de vidéos`,
            description:`Nous n'enregistrons ni ne stockons aucune image de votre enfant. Pas de reconnaissance faciale. Pas de vidéo.`
        },
        {
            image:statistics,
            name:`Seulement ce qui aide votre enfant à s'améliorer`,
            description:`Nous ne conservons que les données d'apprentissage essentielles (niveau, rythme, défis) pour personnaliser l'expérience - en totale conformité avec le GDPR.`
        },
        {
            image:microphone,
            name:`Aucun enregistrement vocal n'est stocké`,
            description:`Les échanges vocaux sont automatiquement supprimés après chaque session. Ils ne sont jamais sauvegardés ni réutilisés sur.`
        },
        {
            image:attention,
            name:`Traitement de l'attention et des émotions sur l'appareil`,
            description:`Tout ce qui a trait à l'état émotionnel ou à la concentration est traité localement sur l'appareil, sans transmission dans le nuage.`
        },
    ];

    return(
        <div  className={`w-full h-[876px] max-[440px]:h-[1650px] max-[540px]:h-[1450px] max-[800px]:h-[1024px] relative overflow-hidden`}>
            {Array.from({ length: 8 }).map((_, i) => {
                const left = -287 - i * 15;
                const top = 33 - i * 10;
                return (
                    <div
                        data-aos={`fade-down`}
                        data-aos-delay={`${i*2}00`}
                        key={i}
                        style={{
                            position: "absolute",
                            left: `${left}px`,
                            top: `${top}px`,
                            width: "461px",
                            height: "232px",
                        }}
                        className={'rotate-[4.6deg]'}
                    >
                        <SvgBlob width={461} height={232} />
                    </div>
                );
            })}
            <Image
                src={shape}
                alt="bg"
                className=" absolute -bottom-[181px] -right-[62px] object-contain opacity-15 w-[520px] h-[520px]  "
            />
            <div className={`absolute top-0 -left-[649px] blur-[764px] w-[1120px] h-[1120px] bg-[#5D5D5D]`}></div>
            <div className={`absolute top-[36px] -right-[303px] blur-[764px] w-[761px] h-[761px] bg-[#0B3E68]`}></div>
            <div className={`absolute top-0 left-0 w-full h-full `}>
                <div className={`w-full h-full flex flex-col items-center max-[1200px]:pt-[60px] pt-[90px] max-[530px]:px-2 max-[1200px]:px-[30px] px-[120px]`}>
                    <span data-aos={`fade-down`} className={`text-white text-center font-sfPro font-bold max-[800px]:text-[28px] text-[48px] leading-[100%] align-middle`}>Vie privée et protection des données</span>
                    <span data-aos={`fade-down`} data-aos-delay={`400`} className={`text-white max-[1200px]:mt-[14px] mt-[24px] font-sfPro font-normal max-[800px]:text-[20px] text-[24px] leading-[100%] tracking-[0] text-center align-middle`}>Votre enfant grandit, vous gardez le contrôle</span>

                    <div className={`w-full flex max-[800px]:flex-col max-[800px]:items-center items-start justify-center mt-[109px] max-[1200px]:mt-[100px] max-[980px]:mt-[30px] max-[1200px]:gap-[50px] max-[1260px]:gap-[60px] gap-x-[200px] `}>
                        <div className="flex flex-col items-start max-[1200px]:gap-[25px] gap-[55px]">
                            {Variant.slice(0, 3).map((value, index) => (
                                <div data-aos={`fade-down`} data-aos-delay={`${index*5}00`} key={index} className=" max-w-[500px] max-[540px]:flex-col max-[540px]:items-center max-[540px]:gap-5 flex items-start">
                                    <div className=" mini_card_linear flex-shrink-0 w-[75px] h-[75px] ">
                                        <div className={`w-full h-full bg-[#FFFFFF1F] rounded-[18px] centered flex-shrink-0 `}>
                                            <Image
                                                src={value.image}
                                                alt="bg"
                                                className="w-[61px] h-[61px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-[35px] max-[530px]:ml-2 flex flex-col items-start gap-[14px]">
                                            <span className="text-white drop-shadow-[0px_4px_4px_#0000007A] font-sfPro font-bold text-[24px] leading-[100%] tracking-[0]">
                                              {value.name}
                                            </span>
                                        <span className="text-white font-sfPro font-normal text-[16px] leading-[150%] tracking-[0]">
                                              {value.description}
                                            </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-[55px]">
                            {Variant.slice(3, 5).map((value, index) => (
                                <div data-aos={`fade-down`} data-aos-delay={`${1000 + index*500}`} key={index} className="max-w-[500px] max-[540px]:flex-col max-[540px]:items-center max-[540px]:gap-5 flex items-start">
                                    <div className=" mini_card_linear flex-shrink-0 w-[75px] h-[75px] ">
                                        <div className={`w-full h-full bg-[#FFFFFF1F] rounded-[18px] centered flex-shrink-0 `}>
                                            <Image
                                                src={value.image}
                                                alt="bg"
                                                className="w-[61px] h-[61px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-[35px] max-[530px]:ml-2 flex flex-col items-start gap-[14px]">
                                            <span className="text-white drop-shadow-[0px_4px_4px_#0000007A] font-sfPro font-bold text-[24px] leading-[100%] tracking-[0]">
                                              {value.name}
                                            </span>
                                        <span className="   text-white font-sfPro font-normal text-[16px] leading-[150%] tracking-[0]">
                                              {value.description}
                                            </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Section6() {
    const Cards = [
        {
            avatar: david,
            name: `Pour les élèves`,
            position: `Parent`,
            review: `« NoorAI a transformé la façon dont ma fille apprend. Elle se sent écoutée, encouragée, et progresse chaque semaine. »`
        },
        {
            avatar: benalli,
            name: `Pour les parents`,
            position: `Enseignant`,
            review: `« L’assistant NoorAI facilite le suivi de mes classes et m’aide à mieux comprendre les besoins de chaque élève. »`
        },
        {
            avatar: jeanPaul,
            name: `Pour les institutions`,
            position: `Directeur d’école`,
            review: `« NoorAI m'aide à établir un lien avec chaque élève d'une manière qui m'était impossible auparavant : c'est inclusif, respectueux..plus »`
        },
    ];

    return (
        <div className={'w-full h-[971px] max-[980px]:h-[1324px] max-[580px]:h-[1900px] relative overflow-hidden'}>
            <div className={'absolute -left-[649px] bottom-[171px] blur-[764px] w-[1120px] h-[1120px] bg-[#5D5D5D] rounded-full '}></div>
            <div className={'absolute -right-[303px] top-[36px] blur-[794px] w-[761px] h-[761px] bg-[#0B3E68] rounded-full '}></div>
            <div className={'absolute left-0 top-0 w-full h-full '}>
                <div className={'w-full h-full max-[1200px]:pt-[66px] pt-[112px] flex flex-col items-center'}>
                    <div className={`flex flex-col items-center`}>
                        <span data-aos={`fade-down`} className={`text-white font-sfPro max-[1200px]:text-[32px] text-[48px] font-bold leading-[100%] text-center`}>Témoignages</span>
                        <span data-aos={`fade-down`} data-aos-delay={`500`} className={`mt-6 px-3 max-[1200px]:mt-3 text-white font-sfPro max-[1200px]:text-[20px] text-[24px] font-[400] leading-7 text-center`}>
                            Vous aussi, offrez à votre enfant un accompagnement qui fait la <br className="max-[980px]:hidden"/> différence.
                        </span>
                    </div>

                    <div className={'mt-20 max-[980px]:mt-5 flex items-start justify-center max-[980px]:flex-wrap max-[980px]:gap-[15px] gap-[30px]'}>
                        {Cards.map((value, index) => (
                            <div data-aos={`fade-down`} data-aos-delay={`${index * 500}`} key={index}>
                                <ReviewCard
                                    avatar={value.avatar}
                                    name={value.name}
                                    position={value.position}
                                    review={value.review}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

