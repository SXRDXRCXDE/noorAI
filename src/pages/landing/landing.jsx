"use client"
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
import dots from "@/assets/images/dots.png";
import twoN from "@/assets/images/2n.png";
import Image from "next/image";
import Header from "@/components/Header/Header";
import GradientButton from "@/components/GradientButton";
import SvgBlob from "@/components/SvgBlob";
import LightBlobSvg from "@/components/LightBlobSvg";
import {FaFacebookF, FaInstagram, FaStar, FaTwitter} from "react-icons/fa";
import {useState} from "react";
import {Twitter} from "lucide-react";
import {IoLogoGithub} from "react-icons/io";


export default function Landing() {
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
            <div className={'absolute top-0 left-0 w-full h-full backdrop-blur-[15px] bg-[#0000002B] flex flex-col items-center pt-[191px] gap-[79px]'}>
                <div className={'flex flex-col items-center gap-[29px] '}>
                    <span className={`font-sfPro text-white font-bold text-[64px] leading-[100%] tracking-[0%] text-center align-middle `}>NoorAI : Là où l'apprentissage <br/> trouve sa lumière</span>
                    <span className={'font-sfPro text-white font-normal text-[24px] leading-[100%] tracking-[0%] text-center align-middle'}>Un assistant intelligent, émotionnellement sensible, pour accompagner chaque élève</span>
                </div>
                <div className={'flex flex-col items-center gap-[29px] '}>
                    <GradientButton className={`w-[358px] h-[70px] rounded-full font-[410] text-[24px] leading-[100%] tracking-[0%] align-middle font-sfPro`}>Demander une démo</GradientButton>
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
                <LightBlobSvg width={560} height={528} className="absolute top-[95px] rotate-[-163.56°] right-[160px]" />
                <LightBlobSvg width={507} height={478} className="absolute top-[120px] rotate-[-163.56°] right-[189px]" />

                <div className={'absolute left-0 top-0 w-full h-full flex items-start '}>
                    <div className={'pt-[125px] pl-[123px] w-1/2 flex flex-col items-start '}>
                        <span className="font-sfPro text-white font-bold text-[48px] leading-[100%] align-middle">
                          Pourquoi réinventer
                          <br className={'max-[1200px]:hidden'}/>
                           l’éducation ?
                        </span>
                        <span className={`mt-[27px] font-sfPro text-white font-normal text-[24px] leading-8 align-middle tracking-[0%]`}>
                            L’éducation façonne l’avenir. <br/>
                            Pourtant, chaque élève est unique, avec ses forces, ses doutes, ses émotions. Chez NoorAI, nous croyons qu’il est temps d’offrir à chaque apprenant un accompagnement sur-mesure, bienveillant et innovant.
                        </span>
                        <span className={`mt-[16px] font-sfPro text-white font-normal text-[24px] leading-8 align-middle tracking-[0%]`}>
                            Offrez à votre enfant la chance d’apprendre à son rythme, dans un environnement qui le comprend.
                        </span>
                        <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[37px]'}>
                            <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                                <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>En savoir plus</span>
                            </div>
                        </div>
                    </div>
                    <div className={'pt-[125px] pl-[123px] w-1/2 h-full flex flex-col items-start relative '}>
                        <Image
                            src={boy}
                            alt="bg"
                            className="absolute right-0 left-0 top-0 bottom-0 m-auto object-cover w-[625px] h-[625px] object-cover "
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
        <div className={'w-full h-[971px] relative overflow-hidden'}>
            <div className={'absolute -left-[201px] bottom-[36px] blur-[794px] w-[761px] h-[761px] bg-[#5C9595] rounded-full '}></div>
            <div className={'absolute -right-[226px] -top-[88px] blur-[984px] w-[650px] h-[650px] bg-[#7A7C8A] rounded-full '}></div>
            <div className={'absolute left-0 top-0 w-full h-full '}>
                <div className={'w-full h-full pt-[112px] flex flex-col items-center'}>
                    <div className={`flex flex-col items-center `}>
                        <span className={`text-white font-sfPro text-[48px] font-bold leading-[100%] text-center`}>Bénéfices pour tous</span>
                        <span className={`mt-6 text-white font-sfPro text-[24px] font-[400] leading-7 text-center`}>L'éducation façonne l'avenir. Pourtant, chaque élève est unique, avec ses <br/> propres forces, ses doutes et ses émotions.</span>
                    </div>
                    <div className={'mt-20 flex items-start justify-center gap-[30px]'}>

                        {/*Transparent card*/}
                        {Cards.map((value, index)=> <div key={index} className={`card_linear w-[380px] h-[532px] relative`}>
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
                                            {value.options.map((option, indexkey)=> <li key={indexkey} className={` flex items-start`}>
                                                <div className={`flex-shrink-0 w-3 h-3 rounded-full bg-[#FFFFFFE5] translate-y-1`}></div>
                                                <span className={`ml-[15px] text-[#FFFFFFE5] font-sfPro text-[20px] font-normal leading-[100%] align-middle`}>{option}</span>
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
            <LightBlobSvg width={504} height={475} className="absolute bottom-[153px] rotate-[-163.56°] left-[189px]" />
            <div className={'absolute left-0 top-0 w-full h-full flex items-start '}>
                <div className={'pt-[125px] pl-[123px] w-1/2 h-full flex flex-col items-start relative '}>
                    <Image
                        src={stats}
                        alt="bg"
                        className="absolute right-0 left-0 top-0 bottom-0 m-auto object-cover w-[526px] h-[526px] object-cover "
                    />
                </div>
                <div className={'pt-[163px] pl-[123px] w-1/2 flex flex-col items-start '}>
                        <span className="font-sfPro text-white font-bold text-[48px] leading-[100%] align-middle">
                          La EdTech en pleine croissance
                          <br className={'max-[1200px]:hidden'}/>
                           l’éducation ?
                        </span>
                        <span className={`mt-[27px] font-sfPro text-white font-normal text-[24px] leading-8 align-middle tracking-[0%]`}>
                            L’éducation numérique connaît une révolution sans précédent.
                            +30% de croissance annuelle du secteur EdTech en Europe.
                            <br/><br/>
                            NoorAI s’inscrit au cœur de cette transformation, en alliant intelligence artificielle, pédagogie et éthique.
                        </span>
                    <GradientButton className={`w-[358px] h-[69px] rounded-full font-sfPro mt-[50px] text-[24px] font-medium leading-[100%] align-middle`}>Rejoindre les autres familles</GradientButton>
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
        <div className={`w-full h-[876px] relative overflow-hidden`}>
            {Array.from({ length: 8 }).map((_, i) => {
                const left = -287 - i * 15;
                const top = 33 - i * 10;
                return (
                    <div
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
                <div className={`w-full h-full flex flex-col items-center pt-[90px] px-[120px]`}>
                    <span className={`text-white font-sfPro font-bold text-[48px] leading-[100%] align-middle`}>Vie privée et protection des données</span>
                    <span className={`text-white mt-[24px] font-sfPro font-normal text-[24px] leading-[100%] tracking-[0] text-center align-middle`}>Votre enfant grandit, vous gardez le contrôle</span>

                    <div className={`w-full flex items-start justify-center mt-[109px] gap-x-[200px] `}>
                        <div className="flex flex-col items-start gap-[55px]">
                            {Variant.slice(0, 3).map((value, index) => (
                                <div key={index} className=" max-w-[500px] flex items-start">
                                    <div className=" mini_card_linear flex-shrink-0 w-[75px] h-[75px] ">
                                        <div className={`w-full h-full bg-[#FFFFFF1F] rounded-[18px] centered flex-shrink-0 `}>
                                            <Image
                                                src={value.image}
                                                alt="bg"
                                                className="w-[61px] h-[61px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-[35px] flex flex-col items-start gap-[14px]">
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
                                <div key={index} className="max-w-[500px] flex items-start">
                                    <div className=" mini_card_linear flex-shrink-0 w-[75px] h-[75px] ">
                                        <div className={`w-full h-full bg-[#FFFFFF1F] rounded-[18px] centered flex-shrink-0 `}>
                                            <Image
                                                src={value.image}
                                                alt="bg"
                                                className="w-[61px] h-[61px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-[35px] flex flex-col items-start gap-[14px]">
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
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Section6() {

    const Cards = [
        {
            avatar : david,
            name : `Pour les élèves`,
            position : `Parent`,
            review:`« NoorAI a transformé la façon dont ma fille apprend. Elle se sent écoutée, encouragée, et progresse chaque semaine. »`
        },
        {
            avatar : benalli,
            name : `Pour les parents`,
            position : `Enseignant`,
            review:`« L’assistant NoorAI facilite le suivi de mes classes et m’aide à mieux comprendre les besoins de chaque élève. »`
        },
        {
            avatar : jeanPaul,
            name : `Pour les institutions`,
            position : `Directeur d’école`,
            review:`« NoorAI m'aide à établir un lien avec chaque élève d'une manière qui m'était impossible auparavant : c'est inclusif, respectueux..plus »`
        },
    ];

    return(
        <div className={'w-full h-[971px] relative overflow-hidden'}>
            <div className={'absolute -left-[649px] bottom-[171px] blur-[764px] w-[1120px] h-[1120px] bg-[#5D5D5D] rounded-full '}></div>
            <div className={'absolute -right-[303px] top-[36px] blur-[794px] w-[761px] h-[761px] bg-[#0B3E68] rounded-full '}></div>
            <div className={'absolute left-0 top-0 w-full h-full '}>
                <div className={'w-full h-full pt-[112px] flex flex-col items-center'}>
                    <div className={`flex flex-col items-center `}>
                        <span className={`text-white font-sfPro text-[48px] font-bold leading-[100%] text-center`}>Témoignages</span>
                        <span className={`mt-6 text-white font-sfPro text-[24px] font-[400] leading-7 text-center`}>Vous aussi, offrez à votre enfant un accompagnement qui fait la <br/> différence.</span>
                    </div>
                    <div className={'mt-20 flex items-start justify-center gap-[30px]'}>

                        {/*Transparent card*/}
                        {Cards.map((value, index) => (
                            <ReviewCard
                                key={index}
                                avatar={value.avatar}
                                name={value.name}
                                position={value.position}
                                review={value.review}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    return(
        <div className={`w-full h-[171px] relative overflow-hidden`}>
            <div className={`absolute -left-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#04274B]`}></div>
            <div className={`absolute -right-[391px] bottom-[47px] blur-[474px] w-[1027px] h-[1027px] bg-[#06303F]`}></div>
            <div className={`absolute left-0 top-0  w-full h-full bg-[#FFFFFF38] flex flex-col items-center`}>
                <div className={'w-full h-[93px] border-b border-[#FFFFFF0F] px-[120px] flex items-center justify-between'}>
                    <div className={``}>
                        <Logo/>
                    </div>

                    <div className={`flex items-center gap-3 `}>
                        <div className={`w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>terms and conditions</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>legal information</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <span className={`text-white font-sfPro font-medium text-base leading-none align-middle capitalize`}>Contact Us</span>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                        <div className={` w-[1.5px] h-4 bg-[#FFFFFF33]`}></div>
                    </div>

                    <div className={`flex items-center gap-[28px]`}>
                        <FaTwitter color={`#FFFFFF`} size={20} />
                        <FaFacebookF color={`#FFFFFF`} size={20} />
                        <FaInstagram color={`#FFFFFF`} size={20} />
                        <IoLogoGithub color={`#FFFFFF`} size={20} />
                    </div>
                </div>

                <div className={`w-full h-[78px] flex items-center justify-center`}>
                    <Image
                        src={twoN}
                        alt="dots"
                        className="object-contain self-center w-8 h-8 invert"
                    />
                    <span className={`ml-2 text-white font-sfPro font-medium text-base leading-none tracking-normal text-center align-middle`}>© 2N Technologie 2025</span>
                </div>
            </div>
        </div>
    );
}

export function ReviewCard({ avatar, name, position, review }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`card_linear w-[380px] relative transition-all duration-500`}
            style={{
                minHeight: isExpanded ? "auto" : "532px", // allow expansion
            }}
        >
            <div className="w-full h-full">
                <div
                    className={`w-full rounded-[40px] bg-[#FFFFFF1F] pt-10 pb-[90px] px-[25px] flex flex-col items-center relative transition-all duration-500`}
                >
                    {/* Avatar + Name */}
                    <div className="flex flex-col items-center">
                        <div className="w-[100px] h-[100px] centered rounded-full overflow-hidden bg-[#FFFFFF1F]">
                            <Image
                                src={avatar}
                                alt="avatar"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="mt-[18px] text-white font-sfPro font-medium text-[24px] text-center">
              {name}
            </span>
                        <span className="mt-[9px] text-white/70 font-sfPro text-[16px] text-center">
              {position}
            </span>
                        <div className="w-[320px] h-[2px] mt-[13px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>

                    {/* Review */}
                    <div className="w-full flex flex-col items-start mt-[27px]">
                        <Image
                            src={dots}
                            alt="dots"
                            className="object-contain self-center w-10 h-10"
                        />
                        <div className="w-full flex flex-col items-center mt-[14px]">
              <span
                  className={`text-white font-sfPro font-normal text-[20px] leading-[150%] text-center transition-all duration-300 ${
                      !isExpanded ? "line-clamp-4" : ""
                  }`}
              >
                {review}
              </span>

                            {/* See more / See less */}
                            {review.length > 150 && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="mt-2 text-[#FEC20F] font-sfPro text-[14px] hover:underline"
                                >
                                    {isExpanded ? "See less" : "See more"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="w-full absolute bottom-[26px] left-0 flex flex-col items-center">
                        <div className="w-[320px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="flex items-center gap-[6px] mt-[20px]">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} color="#FEC20F" size={20} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Logo() {
    return(
        <div className={`flex items-center `}>
            <LinkedinIcon className="text-white" width={35} height={35} />
            <span className={` ml-[7px] text-white font-sfPro font-semibold text-2xl leading-tight tracking-tight text-center align-middle`}>NoorAI</span>
        </div>
    );
}


export function LinkedinIcon({ width = 35, height = 35, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.591 0.0224433C26.232 -0.462329 34.4385 6.96488 34.9148 16.6063C35.391 26.248 27.9566 34.4476 18.3147 34.9156C8.68483 35.3826 0.497336 27.9594 0.0216656 18.33C-0.454053 8.70058 6.96194 0.506587 16.591 0.0224433ZM18.0368 27.1815C18.5764 27.3411 20.383 26.5724 20.8871 26.2997C23.0989 25.0843 24.7393 23.0423 25.4498 20.6206C25.661 19.8944 25.7891 19.1466 25.8317 18.3914C25.8766 17.7012 25.8573 17.0039 25.8574 16.3125L25.8563 13.0538L25.8577 10.1949C25.8589 9.64469 25.8834 9.0814 25.8478 8.53243C25.8358 8.34658 25.8092 8.17723 25.721 8.01096C25.6302 7.83972 25.5173 7.73321 25.3305 7.67872C25.0935 7.60959 24.8432 7.57942 24.5971 7.56709C23.8735 7.53078 23.1402 7.5522 22.4153 7.55268L18.696 7.55723L16.2649 7.56052C15.8193 7.56168 15.3457 7.53566 14.9044 7.58943C12.6996 7.79698 10.7612 8.73017 9.34073 10.4521C7.53213 12.6445 7.00347 15.5233 7.27087 18.2979C7.53377 21.0254 8.78461 23.5442 10.9119 25.2941C12.6953 26.7614 15.1016 27.5316 17.4115 27.3135C17.6016 27.2952 17.8771 27.2869 18.0368 27.1815Z"
                fill="url(#paint0_linear_13_1515)"
            />
            <path
                d="M15.0016 10.6063C15.3251 10.5669 15.6801 10.5905 16.0073 10.5902L17.8905 10.5891L20.2492 10.5896C20.7138 10.5898 21.1926 10.5688 21.6552 10.6102C21.8141 10.6244 22.109 10.6326 22.2054 10.7754C22.3056 10.9238 22.3447 11.1245 22.3618 11.3001C22.4204 11.9014 22.3737 12.5475 22.373 13.153L22.3696 16.9348C22.3693 17.5349 22.3273 18.1721 22.4125 18.7664C22.4447 18.9908 22.5054 19.2733 22.6634 19.4463C23.0608 19.8816 24.0759 19.7985 24.6294 19.8065C24.5671 19.997 24.4991 20.1856 24.4255 20.3719C24.0538 21.3059 23.4618 22.6273 22.4784 23.0384C21.9592 23.2554 21.2796 23.222 20.7641 23.0083C19.0984 22.3177 19.3444 19.5646 19.3468 18.1016L19.3523 15.1749C19.3532 14.7083 19.4331 14.0202 19.2325 13.5921C19.1633 13.4445 18.9718 13.3931 18.8283 13.3491C18.3806 13.3286 17.4485 13.2138 17.083 13.4613C16.9383 13.5594 16.8959 13.7828 16.8778 13.9459C16.8308 14.3694 16.8652 14.8298 16.8657 15.2575C16.8675 16.6749 16.9489 18.1184 16.6648 19.5149C16.425 20.6938 15.8812 22.1333 14.8298 22.818C14.3499 23.1305 13.7374 23.2788 13.1726 23.1533C12.4351 22.9895 11.8728 22.4246 11.485 21.8042C11.8652 21.6099 12.1989 21.4169 12.5007 21.108C13.7983 19.7804 13.8068 17.9789 13.8017 16.2492C13.8 15.6267 13.8191 15.0039 13.8139 14.3817C13.8117 14.1113 13.7917 13.7199 13.5737 13.5244C13.227 13.2134 11.9117 13.3394 11.4485 13.3445C11.6733 12.7486 11.9841 12.1902 12.407 11.7116C13.1106 10.9154 13.9801 10.6671 15.0016 10.6063Z"
                fill="url(#paint1_linear_13_1515)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_13_1515"
                    x1="18.9808"
                    y1="34.9364"
                    x2="23.9137"
                    y2="15.305"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_13_1515"
                    x1="18.6096"
                    y1="23.1979"
                    x2="20.3227"
                    y2="16.074"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
}