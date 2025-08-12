import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BlurredBlob from "@/components/BlurredBlob/BlurredBlob";
import GreyOutlineShape from "@/components/GreyOutlineShape/GreyOutlineShape";

import rasm from "@/assets/images/bg_stream.png";
import robot from "@/assets/images/edited-robot.png";
import doctors from "@/assets/images/doctor_kids.jpg";
import rob_pencil from "@/assets/images/robot_pencil.png";
import bg_new from "@/assets/images/bg_new.png";
import placeholder from "@/assets/images/placeholder_card.png";
import nelson from "@/assets/images/nelson.png";
import dot from "@/assets/images/greadient_dot.png";
import GradientBorderButton from "@/components/GradientBorderButton/GradientBorderButton";

// ✅ Page component (Server)
export default function About() {
    return (
        <div className="w-full min-h-screen h-auto bg-[#000000] relative">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
}

// ✅ Section 1 (Server Component)
function Section1() {
    return (
        <div className="w-full h-[775px] relative bg-[#08063EA6] overflow-hidden">
            <Image src={rasm} alt="bg" className="absolute left-0 top-0 object-cover w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#110E55A6]" />
            <div className="absolute -left-[252px] top-[94px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]" />
            <div className="absolute -right-[335px] -bottom-[214px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]" />
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center pt-[215px] max-[420px]:px-[20px] px-[109px]">
                <span className="text-[#00BFFF] font-sfPro font-medium max-[980px]:text-xl text-2xl leading-none tracking-normal text-center align-middle">NoorAI</span>
                <span className="text-[#FFFFFF] max-w-[950px] mt-[28px] font-sfPro font-bold max-[980px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle">Transformer l'éducation grâce à l'IA, d'une manière inclusive et centrée sur l'humain.</span>
                <span className="text-[#FFFFFF]/70 max-w-[950px] mt-[24px] font-sfPro font-normal max-[980px]:text-lg text-2xl leading-none tracking-normal text-center align-middle">Nous croyons en une technologie qui éclaire, connecte et respecte chaque individu</span>
            </div>
        </div>
    );
}

// ✅ Section 2
function Section2() {
    return (
        <div className="w-full h-[719px] relative overflow-hidden">
            <div className="absolute -left-[252px] -top-[490px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#59051F]" />
            <div className="absolute -right-[335px] -top-[409px] blur-[804px] w-[620px] h-[620px] rounded-full bg-[#053D59]" />
            <div className="absolute -left-[288px] -bottom-[305px] w-[972px] h-[972px] rounded-full bg-[#0D496F] blur-[804px]" />
            <div className="absolute -right-[423px] -bottom-[106px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]" />
            <Image src={robot} alt="bg" className="absolute max-[420px]:top-[60px] max-[980px]:w-[360px] max-[980px]:h-[171px] max-[980px]:object-contain max-[1200px]:w-[460px] max-[1200px]:h-[271px] max-[1200px]:left-[20px] max-[1300px]:left-[68px] left-[116px] top-[110px] scale-x-[-1] object-cover w-[560px] h-[371px]" />
            <div className="absolute left-0 top-0 w-full h-full flex items-start max-[420px]:pt-[250px] pt-[82px] max-[420px]:px-[20px] max-[1200px]:px-[54px] px-[109px]">
                <div className="w-1/2 max-[420px]:hidden h-full" />
                <div className="w-1/2 max-[420px]:w-full max-w-[608px] h-full flex flex-col items-start">
                    <span className="text-[#00BFFF] font-sfPro font-medium text-2xl leading-none tracking-normal align-middle">Notre mission</span>
                    <span className="mt-[28px] text-white font-sfPro font-bold max-[1200px]:text-3xl text-5xl leading-[120%] tracking-normal">Transformer l'éducation grâce à l'IA, d'une manière inclusive et centrée sur l'humain.</span>
                    <span className="mt-6 text-white font-sfPro font-normal text-2xl leading-none tracking-normal">Nous croyons en une technologie qui éclaire, connecte et respecte chaque individu.</span>
                    <GradientBorderButton
                        text={`En savoir plus`}
                        className={`gradient_border_button centered relative text-white max-[980px]:w-[260px] max-[980px]:h-[55px] w-[358px] h-[69px] max-[980px]:mt-[44px] mt-[88px]`}
                        innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                        textClassName={`text-[24px] font-sfPro font-medium leading-[100%] text-center align-middle`}
                    />
                </div>
            </div>
        </div>
    );
}

// ✅ Section 3
function Section3() {
    return (
        <div className="w-full h-[740px] bg-[#FFFFFF1A] relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full bg-[#030728BD]" />
            <div className="absolute -left-[288px] -top-[667px] w-[972px] h-[972px] rounded-full bg-[#0D496F] blur-[804px]" />
            <div className="absolute -right-[423px] bottom-[634px] w-[972px] h-[972px] rounded-full bg-[#501C6A] blur-[824px]" />
            <div className="absolute -right-[279px] -bottom-[89px] w-[761px] h-[761px] rounded-full bg-[#04303B] blur-[794px]" />
            <div className="absolute -left-[288px] -bottom-[477px] w-[847px] h-[847px] rounded-full bg-[#0C5111] blur-[474px]" />
            <BlurredBlob width={531} height={534} className=" absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:top-[33px] max-[420px]:w-[281px] max-[420px]:h-[284px] max-[980px]:w-[331px] max-[980px]:h-[334px] max-[1300px]:right-[15px] top-[133px] right-[65px] scale-x-[-1] backdrop_blur-[123px]" />
            <BlurredBlob width={478} height={481} className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:top-[59px] max-[420px]:w-[228px] max-[420px]:h-[231px] max-[980px]:w-[278px] max-[980px]:h-[281px] max-[1300px]:right-[41px] top-[159px] right-[91px] scale-x-[-1] backdrop_blur-[123px]" />
            <Image src={rob_pencil} alt="bg" className="absolute max-[420px]:left-0 max-[420px]:right-0 max-[420px]:m-auto max-[420px]:top-[61px] max-[420px]:w-[193px] max-[420px]:h-[202px] max-[980px]:w-[243px] max-[980px]:h-[252px] max-[980px]:top-[161px] max-[980px]:right-[55px] max-[1300px]:right-[105px] right-[155px] top-[210px] object-cover w-[343px] h-[352px]" />
            <div className="absolute left-0 top-0 w-full h-full flex items-start max-[420px]:pt-[331px] pt-[131px] max-[420px]:px-[20px] max-[980px]:px-[40px] px-[120px]">
                <div className="max-w-[900px]  max-[1200px]:max-w-[500px] max-[980px]:max-w-[400px] h-full flex flex-col items-start">
                    <span className="text-[#00BFFF] font-sfPro font-medium max-[420px]:text-[18px] max-[1200px]:text-xl text-2xl leading-none tracking-normal align-middle">Notre mission</span>
                    <span className="mt-[28px] max-[420px]:mt-[14px] text-white font-sfPro font-bold max-[420px]:text-[26px] max-[980px]:text-[32px] max-[1200px]:text-[42px] text-[48px] leading-[120%] tracking-normal">Offrir à chaque enfant un compagnon d’apprentissage intelligent, doux et profondément humain.</span>
                    <span className="mt-6 max-[420px]:mt-2 max-[1200px]:mt-4 text-white font-sfPro font-normal max-[420px]:text-md text-2xl leading-none tracking-normal">Avec NoorAI, l’intelligence artificielle devient un guide attentif...</span>
                    <GradientBorderButton
                        text={`Learn More`}
                        className={`gradient_border_button centered relative text-white max-[980px]:w-[260px] max-[980px]:h-[55px] w-[358px] h-[69px] max-[980px]:mt-[44px] mt-[88px]`}
                        innerDivClass={`w-full h-full bg-[#FFFFFF33] rounded-full centered`}
                        textClassName={`text-[24px] font-sfPro font-medium leading-[100%] text-center align-middle`}
                    />
                </div>
            </div>
        </div>
    );
}

// ✅ Section 4
function Section4() {
    return (
        <div className="w-full h-[1065px] relative overflow-hidden">
            <Image src={bg_new} alt="bg" className="absolute left-0 top-0 object-cover w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#030728BD]" />
            <div className="absolute -left-[288px] -top-[377px] w-[847px] h-[847px] rounded-full bg-[#0C5111] blur-[474px]" />
            <div className="absolute left-0 top-0 w-full h-full flex items-start pt-[114px] max-[420px]:px-5 max-[980px]:px-[59px] px-[109px]">
                <div className="w-full h-full flex flex-col items-center">
                    <div className="w-full max-w-[1000px] flex flex-col items-center text-center">
                        <span className="text-[#00BFFF] font-sfPro font-medium  text-2xl leading-none tracking-normal align-middle">Équipe fondatrice</span>
                        <span className="mt-[28px] text-white font-sfPro font-bold max-[1200px]:text-[38px] text-[48px] leading-[120%] tracking-normal">NoorAI est propulsé par 2N Technology</span>
                        <span className="mt-6 text-white font-sfPro font-normal text-2xl leading-none tracking-normal">Une équipe de passionnés...</span>
                    </div>
                    <div className="w-[1200px] max-[1200px]:w-full h-[614px] bg-[#e3e0fe] rounded-2xl mt-[64px]">
                        <Image src={doctors} alt="bg" className="object-contain w-[1200px] h-[614px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// ✅ Section 5
function Section5() {
    const Reviews = [
        { name: `Nelson Mandela`, description: `Education is the most powerful weapon...`, image: nelson },
        { name: `The NoorAI Team`, description: `Innovation is where technology meets empathy.`, image: placeholder },
    ];
    return (
        <div className="w-full h-[758px] relative overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => {
                const right = -220 - i * 13;
                const top = 60 - i * 21;
                return <GreyOutlineShape key={i} width={617} height={312} className="absolute" style={{ right: `${right}px`, top: `${top}px` }} />;
            })}
            <div className="absolute -left-[451px] -bottom-[calc(570px+171px)] blur-[474px] w-[1027px] h-[1027px] rounded-full bg-[#063532]" />
            <div className="absolute -right-[249px] -bottom-[calc(291px+171px)] blur-[794px] w-[761px] h-[761px] rounded-full bg-[#240379]" />
            <div className="absolute left-0 top-0 w-full h-full max-[980px]:pt-[31px] pt-[81px] flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="text-white font-sfPro font-bold max-[1200px]:text-3xl text-5xl leading-none tracking-normal text-center align-middle">Citations inspirantes</span>
                    <span className="max-w-[800px] mt-4 text-white/70 font-sfPro font-normal text-[24px] leading-[150%] tracking-normal text-center align-middle">Rejoignez une communauté...</span>
                </div>
                <div className="flex max-[420px]:flex-col items-center max-[420px]:mt-[26px] mt-[126px] max-[980px]:gap-[30px] gap-[94px] max-[980px]:px-[20px] max-[1200px]:px-[40px] px-[120px]">
                    {Reviews.map((value, index) => (
                        <div key={index} className="max-w-[572px] h-[255px] flex items-start max-[980px]:gap-[12px] gap-[38px]">
                            <Image src={value.image} alt="bg" className="object-cover w-[172px] h-[255px] rounded-2xl" />
                            <div className="h-full relative flex flex-col items-start">
                                <Image src={dot} alt="bg" className="object-cover w-[53px] h-[53px]" />
                                <span className="mt-2 text-white font-sfPro font-normal text-2xl leading-none tracking-normal">{value.description}</span>
                                <span className="absolute bottom-7 text-white font-sfPro font-semibold text-2xl leading-none tracking-normal">{value.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
