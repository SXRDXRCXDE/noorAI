import Header from "@/components/Header/Header";
import Image from "next/image";
import rasm from "@/assets/images/bg_stream.png";
import robot from "@/assets/images/edited-robot.png";
import doctors from "@/assets/images/doctor_kids.jpg";
import rob_pencil from "@/assets/images/robot_pencil.png";
import {BlurredBlob} from "@/app/pages/technology/technology";
import bg_new from "@/assets/images/bg_new.png";
import placeholder from "@/assets/images/placeholder_card.png";
import nelson from "@/assets/images/nelson.png";
import dot from "@/assets/images/greadient_dot.png";
import {Footer} from "@/app/pages/landing/landing";



export default function About() {
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
        <div className={`w-full h-[775px] relative bg-[#08063EA6] overflow-hidden`}>
            <Image
                src={rasm}
                alt="bg"
                className="absolute left-0 top-0 object-cover w-full h-full  "
            />
            <div className={'absolute left-0 top-0 w-full h-full bg-[#110E55A6]'}></div>
            <div className={'absolute -left-[252px] top-[94px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]'}></div>
            <div className={'absolute -right-[335px] -bottom-[214px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]'}></div>
            <div className={`absolute left-0 top-0 w-full h-full flex flex-col items-center pt-[215px] px-[109px] `}>
                <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal text-center align-middle  `}>NoorAI</span>
                <span className={`text-[#FFFFFF] max-w-[950px] mt-[28px] font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle  `}>Transformer l'éducation grâce à l'IA, d'une manière inclusive et centrée sur l'humain.</span>
                <span className={`text-[#FFFFFF]/70 max-w-[950px] mt-[24px] font-sfPro font-normal text-2xl leading-none tracking-normal text-center align-middle  `}>Nous croyons en une technologie qui éclaire, connecte et respecte chaque individu</span>
            </div>
        </div>
    );
}


export function Section2() {
    return(
        <div className={`w-full h-[719px] relative overflow-hidden `}>
            <div className={'absolute -left-[252px] -top-[490px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]'}></div>
            <div className={'absolute -right-[335px] -top-[409px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]'}></div>
            <div className={`absolute -left-[288px] -bottom-[305px] w-[972px] h-[972px] rounded-full bg-[#0D496F] blur-[804px]`}></div>
            <div className={`absolute -right-[423px] -bottom-[106px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]`}></div>
            <Image
                src={robot}
                alt="bg"
                className="absolute left-[116px] top-[110px] scale-x-[-1] object-cover w-[560px] h-[371px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[82px] px-[109px] `}>
                <div className={`w-1/2 h-full`}></div>
                <div className={`w-1/2 max-w-[608px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                                Notre mission
                            </span>
                            <span className={`mt-[28px] text-white font-sfPro font-bold text-5xl leading-[120%] tracking-normal`}>
                                Transformer l'éducation grâce à l'IA, d'une manière inclusive et centrée sur l'humain.
                            </span>
                            <span className={`mt-6 text-white font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Nous croyons en une technologie qui éclaire, connecte et respecte chaque individu.
                            </span>

                        <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[88px]'}>
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


export function Section3() {
    return(
        <div className={`w-full h-[740px] bg-[#FFFFFF1A] relative overflow-hidden `}>

            <div className={`absolute left-0 top-0 w-full h-full bg-[#030728BD]`}></div>
            <div className={`absolute -left-[288px] -top-[667px] w-[972px] h-[972px] rounded-full bg-[#0D496F] blur-[804px]`}></div>
            <div className={`absolute -right-[423px] bottom-[634px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]`}></div>
            <div className={`absolute -right-[279px] -bottom-[89px] w-[761px] h-[761px] rounded-full bg-[#04303B] blur-[794px]`}></div>
            <div className={`absolute -left-[288px] -bottom-[477px] w-[847px] h-[847px] rounded-full bg-[#0C5111] blur-[474px]`}></div>
            <BlurredBlob width={531} height={534} className="absolute top-[133px] right-[65px] scale-x-[-1] backdrop_blur-[123px]" />
            <BlurredBlob width={478} height={481} className="absolute top-[159px] right-[91px] scale-x-[-1] backdrop_blur-[123px]" />
            <Image
                src={rob_pencil}
                alt="bg"
                className="absolute right-[155px] top-[210px] object-cover w-[343px] h-[352px] object-cover "
            />
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[131px] px-[120px] `}>
                <div className={` max-w-[900px] h-full flex flex-col items-start `}>
                    <div className={`w-full flex flex-col items-start`}>

                            <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                                Notre mission
                            </span>
                        <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                Offrir à chaque enfant un compagnon d’apprentissage intelligent, doux et profondément humain.
                            </span>
                        <span className={`mt-6 text-white font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Avec NoorAI, l’intelligence artificielle devient un guide attentif, capable d’écouter, de comprendre et de s’adapter aux besoins uniques de chaque élève. Une technologie bienveillante, au service d’un apprentissage épanouissant et personnalisé.
                            </span>

                        <div className={'gradient_border_button centered relative text-white w-[358px] h-[69px] mt-[30px]'}>
                            <div className={'w-full h-full bg-[#FFFFFF33] rounded-full centered'}>
                                <span className={`text-[24px] font-sfPro  font-medium leading-[100%] text-center align-middle`}>Learn More</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export function Section4() {
    return(
        <div className={`w-full h-[1065px] relative overflow-hidden `}>
            <Image
                src={bg_new}
                alt="bg"
                className="absolute left-0 top-0 object-cover w-full h-full "
            />
            <div className={`absolute left-0 top-0 w-full h-full bg-[#030728BD]`}></div>
            <div className={`absolute -left-[288px] -top-[377px] w-[847px] h-[847px] rounded-full bg-[#0C5111] blur-[474px]`}></div>
            <div className={`absolute left-0 top-0 w-full h-full flex items-start pt-[114px] px-[109px] `}>

                <div className={`w-full  h-full flex flex-col items-center `}>
                    <div className={`w-full max-w-[1000px] flex flex-col items-center text-center`}>

                        <span className={`text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle`}>
                            Équipe fondatrice
                        </span>
                        <span className={`mt-[28px] text-white font-sfPro font-bold text-[48px] leading-[120%] tracking-normal`}>
                                NoorAI est propulsé par 2N Technology
                        </span>
                        <span className={`mt-6 text-white font-sfPro font-normal text-2xl leading-none tracking-normal`}>
                                Une équipe de passionnés : ingénieurs, enseignants, chercheurs et parents, tous unis par une conviction simple : l’intelligence artificielle peut réellement améliorer l’éducation si elle est conçue avec empathie, rigueur scientifique et éthique.
                        </span>

                    </div>
                    <div className={`w-[1200px] h-[614px] bg-[#e3e0fe] rounded-2xl mt-[64px]`}>
                        <Image
                            src={doctors}
                            alt="bg"
                            className=" object-contain w-[1200px] h-[614px]  "
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}

export function Section5() {

    const Reviews = [
        {
            name:`Nelson Mandela`,
            description:`Education is the most powerful weapon which you can use to change the world.`,
            image:nelson
        },
        {
            name:`The NoorAI Team`,
            description:`Innovation is where technology meets empathy.`,
            image:placeholder
        },
    ];

    return(
        <div className={`w-full h-[758px] relative overflow-hidden`}>

            {Array.from({ length: 8 }).map((_, i) => {
                const right = -220 - i * 13;
                const top = 60 - i * 21;
                return (
                    <GreyOutlineShape
                        key={i}
                        width={617}
                        height={312}
                        className="absolute"
                        style={{
                            right: `${right}px`,
                            top: `${top}px`,
                        }}
                    />
                );
            })}
            <div className={`absolute -left-[451px] -bottom-[calc(570px+171px)] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#063532]`}></div>
            <div className={`absolute -right-[249px] -bottom-[calc(291px+171px)] blur-[794px] w-[761px] h-[761px] rounded-full bg-[#240379]`}></div>
            <div className={`absolute left-0 top-0 w-full h-full pt-[81px] flex flex-col items-center`}>

                <div className={`flex flex-col items-center`}>
                    <span className={`text-white font-sfPro font-bold text-5xl leading-none tracking-normal text-center align-middle`}>Citations inspirantes</span>
                    <span className={`max-w-[800px] mt-4 text-white/70 font-sfPro font-normal text-[24px] leading-[150%] tracking-normal text-center align-middle`}>Rejoignez une communauté de parents et d'éducateurs engagés pour l'avenir.</span>
                </div>

                <div className={` flex items-center mt-[126px] gap-[94px] px-[120px]`}>

                    {Reviews.map((value, index)=> <div className={'max-w-[572px] h-[255px] flex items-start gap-[38px]'}>
                        <Image
                            src={value.image}
                            alt="bg"
                            className="object-cover w-[172px] h-[255px] rounded-2xl  "
                        />

                        <div className={`h-full relative flex flex-col items-start `}>

                            <Image
                                src={dot}
                                alt="bg"
                                className="object-cover w-[53px] h-[53px]  "
                            />

                            <span className={` mt-2 text-white font-sfPro font-normal text-2xl leading-none tracking-normal`}>{value.description}</span>
                            <span className={` absolute bottom-7 text-white font-sfPro font-semibold text-2xl leading-none tracking-normal`}>{value.name}</span>

                        </div>
                    </div>)}

                </div>
            </div>

        </div>
    );
}

export function GreyOutlineShape({ width = 153, height = 424,style, className = "" }) {
    return (
        <svg
            width={width}
            height={height}
            style={style}
            viewBox="0 0 153 424"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M262.099 93.1664C202.919 123.279 137.977 116.984 85.5952 156.558C32.9352 196.342 -5.50307 254.27 1.19419 290.278C7.98803 326.805 89.7784 308.683 118.299 332.391C144.912 354.514 117.332 412.46 158.923 421.394C200.541 430.334 268.193 406.127 324.266 376.635C376.594 349.114 407.429 304.168 451.588 267.466C494.974 231.408 556.737 202.358 581.482 162.857C606.48 122.952 604.293 83.7692 579.409 63.4236C555.938 44.2335 489.377 71.3057 456.108 60.3496C422.827 49.3894 438.004 -6.70525 390.738 1.28977C344.53 9.1059 310.247 68.6666 262.099 93.1664Z"
                stroke="#737373"
                strokeWidth="0.756273"
            />
        </svg>
    );
}
