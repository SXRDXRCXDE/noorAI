import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import BackgroundIntro from "@/components/BackgroundIntro";
import InputWithIcon from "@/components/InputWithIcon";
import { Lock, Mail, User } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GoogleIcon from "@/components/GoogleIcon/GoogleIcon";
import AppleIcon from "@/components/AppleIcon/AppleIcon";

// Server action for registration
async function registerAction(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if account exists
    const existingUser = await getUserFromDB(email);
    if (existingUser) {
        return { error: "Account already exists. Please log in." };
    }

    // Save new user (replace with your DB logic)
    await saveUserToDB({ name, email, password });

    // Set session (replace with your auth logic)
    await setUserSession({ name, email });

    redirect("/");
}

export default async function Register({ searchParams }) {
    const error = searchParams?.error;

    return (
        <div className="w-full h-screen bg-[#0E0C15] overflow-x-hidden">
            <Header />
            <div className="w-full h-full relative">
                <div className="w-full h-full absolute top-0 left-0 z-20">
                    <div className="w-full h-full relative">
                        {/* Left text */}
                        <div className="absolute left-[248px] top-[207px] w-[376px] h-[530px] py-[48px] flex flex-col justify-between items-start">
              <span data-aos={`fade-right`} className="font-SfPro_title font-[860] text-white">
                Rejoignez la révolution pédagogique avec NoorAI
              </span>
                            <span data-aos={`fade-right`} data-aos-delay={`700`} className="font-sfPro_description font-[860] text-[#B6B6B7]">
                Commencez dès aujourd'hui avec NoorAI - AI Education app et découvrez la puissance de l'IA dans votre apprentissage du futur !
              </span>
                        </div>

                        {/* Form */}
                        <div className="absolute right-[248px] top-[207px] w-[488px] h-[530px]">
                            <div  className="w-full h-full relative">
                                <div
                                    data-aos={`fade-right`} data-aos-delay={`1500`} className="form_background1 absolute right-0 top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[422px] bg-[#6C63FF]"
                                ></div>

                                <div
                                     data-aos={`fade-right`} data-aos-delay={`1000`} className="form_background2 absolute right-[24px] top-0 bottom-0 m-auto rounded-r-3xl w-[24px] h-[456px] bg-[#FF6584]"
                                ></div>
                                <div data-aos={`fade-left`} className="form_back3 border border-white absolute right-[48px] top-0 bottom-0 m-auto rounded-3xl w-[440px] h-[610px] py-0.5 px-0.5">
                                    <div className="form_background3_content">
                                        <form action={registerAction} className="font-sfPro w-full flex flex-col items-start gap-6">
                                            <InputWithIcon
                                                icon={<User className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                                placeHolder="Name"
                                                name="name"
                                                required
                                            />
                                            <InputWithIcon
                                                icon={<Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                                placeHolder="Email"
                                                type="email"
                                                name="email"
                                                required
                                            />
                                            <InputWithIcon
                                                placeHolder="Password"
                                                type="password"
                                                name="password"
                                                icon={<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />}
                                                required
                                            />
                                            {error && <span className="text-red-500 text-sm">{error}</span>}
                                            <GradientButton type="submit">Register</GradientButton>
                                        </form>

                                        <div className="font-sfPro w-full flex flex-col items-center gap-[26px]">
                                              <span className="text-[#757185] text-[16px] font-[590]">
                                                Or sign up with open accounts
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

// Example DB functions — replace with your actual DB calls
async function getUserFromDB(email) {
    if (email === "test@example.com") {
        return { email, password: "hashed_password" };
    }
    return null;
}

async function saveUserToDB(user) {
    console.log("User registered:", user);
}

async function setUserSession(user) {
    // Implement auth session/cookie logic here
}
