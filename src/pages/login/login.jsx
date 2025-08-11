"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import BackgroundIntro from "@/components/BackgroundIntro";
import InputWithIcon from "@/components/InputWithIcon";
import { Lock, Mail } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { useRouter } from "next/navigation";
import GoogleIcon from "@/components/GoogleIcon/GoogleIcon";
import AppleIcon from "@/components/AppleIcon/AppleIcon";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    // Mouse parallax state
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const moveRadius = 5; // max px movement

            const moveX = ((e.clientX - centerX) / centerX) * moveRadius;
            const moveY = ((e.clientY - centerY) / centerY) * moveRadius;

            setOffset({ x: moveX, y: moveY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login successful!");
            router.push("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    };

    const [typedText, setTypedText] = useState("");
    const fullText = "Rejoignez la révolution pédagogique avec NoorAI";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 50); // speed in ms per character
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen bg-[#0E0C15] overflow-x-hidden">
            <Header />
            <div className="w-full h-full relative">
                <div className="w-full h-full absolute top-0 left-0 z-20">
                    <div className="w-full h-full relative">
                        {/* Left side text */}
                        <div
                            data-aos="fade-right"
                            className="absolute left-[248px] top-[207px] w-[376px] h-[530px] py-[48px] flex flex-col justify-between items-start"
                        >
                              <span className="font-SfPro_title font-[860] text-white">
                                    {typedText}
                                  <span className="animate-pulse">|</span>
                              </span>
                              <span className="font-sfPro_description font-[860] text-[#B6B6B7]">
                                    Commencez dès aujourd'hui avec NoorAI - AI Education app et
                                    découvrez la puissance de l'IA dans votre apprentissage du futur
                                    !
                              </span>
                        </div>

                        {/* Right side form */}
                        <div data-aos="fade-left" className="absolute right-[248px] top-[207px] w-[488px] h-[530px]">
                            <div className="w-full h-full relative">
                                <div
                                    className="form_background1 absolute right-0 top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[422px]"
                                    style={{
                                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                                        transition: "transform 0.1s ease-out",
                                    }}
                                ></div>
                                <div
                                    className="form_background2 absolute right-[24px] top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[456px]"
                                    style={{
                                        transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)`,
                                        transition: "transform 0.1s ease-out",
                                    }}
                                ></div>
                                <div
                                    className="form_back3 border border-white absolute right-[48px] top-0 bottom-0 m-auto rounded-3xl w-[440px] h-[530px] py-0.5 px-0.5"
                                >
                                    <div className="form_background3_content">
                                        {/* Inputs */}
                                        <div className="font-sfPro w-full flex flex-col items-start gap-6">
                                            <InputWithIcon
                                                icon={
                                                    <Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                                }
                                                placeHolder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <InputWithIcon
                                                placeHolder="Password"
                                                type="password"
                                                icon={
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                                }
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <GradientButton onClick={handleLogin}>
                                                Sign In
                                            </GradientButton>
                                        </div>

                                        {/* Social login */}
                                        <div className="font-sfPro w-full flex flex-col items-center gap-[26px]">
                                              <span className="text-[#757185] text-[16px] font-[590]">
                                                Or sign in with open accounts
                                              </span>
                                            <div className="flex items-center justify-center gap-7">
                                                <div className="w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered">
                                                    <GoogleIcon color="#757185" width={25} height={25} />
                                                </div>
                                                <div className="w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered">
                                                    <AppleIcon color="#757185" width={25} height={25} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background */}
                <div className="w-full h-full relative px-10">
                    <div className="absolute left-0 top-0 w-10 h-full light_left_border"></div>
                    <div className="absolute right-0 top-0 w-10 h-full light_right_border"></div>
                    <BackgroundIntro />
                </div>
            </div>
        </div>
    );
}
