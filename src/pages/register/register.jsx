import { redirect } from "next/navigation";
import BackgroundIntro from "@/components/BackgroundIntro";
import InputWithIcon from "@/components/InputWithIcon";
import { Lock, Mail, User } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import GoogleIcon from "@/components/GoogleIcon/GoogleIcon";
import AppleIcon from "@/components/AppleIcon/AppleIcon";

export const metadata = {
    title: "Inscription - NoorAI",
    description:
        "Créez votre compte NoorAI et commencez votre parcours éducatif alimenté par l’intelligence artificielle.",
};

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
        <div className="w-full h-screen max-[980px]:h-[1024px] bg-[#0E0C15] overflow-x-hidden">
            <div className="w-full h-full relative">
                <div className="w-full h-full absolute top-0 left-0 z-20">
                    <div className="w-full h-full relative">
                        {/* Left text */}
                        <section
                            aria-label="Introduction"
                            className="absolute max-[980px]:top-0 max-[980px]:left-0 max-[980px]:right-0 max-[980px]:m-auto max-[1200px]:left-[78px] max-[1300px]:left-[148px] left-[248px] max-[1300px]:top-[157px] top-[207px] max-[400px]:-translate-y-6 max-[400px]:w-[300px] w-[376px] h-[530px] py-[48px] flex flex-col max-[1300px]:justify-center max-[1300px]:gap-4 justify-between items-start"
                        >
                            <h1
                                data-aos="fade-right"
                                className="font-SfPro_title font-[860] text-white"
                            >
                                Rejoignez la révolution pédagogique avec NoorAI
                            </h1>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="700"
                                className="font-sfPro_description font-[860] text-[#B6B6B7]"
                            >
                                Commencez dès aujourd'hui avec NoorAI - AI Education app et
                                découvrez la puissance de l'IA dans votre apprentissage du futur
                                !
                            </p>
                        </section>

                        {/* Form */}
                        <div className="absolute max-[545px]:top-80 max-[980px]:top-96 max-[340px]:-translate-x-9 max-[365px]:-translate-x-5 max-[395px]:-translate-x-2 max-[545px]:left-1.5 max-[980px]:left-32 max-[980px]:right-0 max-[980px]:m-auto max-[1200px]:right-[48px] max-[1300px]:right-[148px] right-[248px] max-[1300px]:top-[157px] top-[207px] max-[980px]:w-[388px] max-[980px]:h-[430px] w-[488px] h-[530px]">
                            <div className="w-full h-full relative">
                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="1500"
                                    className="form_background1 absolute right-0 top-0 bottom-0 m-auto rounded-r-3xl w-[24px] max-[545px]:h-[122px] max-[980px]:h-[222px] max-[1300px]:h-[322px] h-[422px] bg-[#6C63FF]"
                                ></div>

                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="1000"
                                    className="form_background2 absolute right-[24px] top-0 bottom-0 m-auto rounded-r-3xl w-[24px] max-[545px]:h-[156px] max-[980px]:h-[256px] max-[1300px]:h-[356px] h-[456px] bg-[#FF6584]"
                                ></div>
                                <div
                                    data-aos="fade-left"
                                    className="form_back3 border border-white absolute right-[48px] top-0 bottom-0 m-auto rounded-3xl w-[440px] max-[340px]:w-[290px] max-[545px]:w-[300px] max-[545px]:h-[400px] max-[980px]:h-[410px] max-[1300px]:h-[510px] h-[610px] py-0.5 px-0.5"
                                >
                                    <div className="form_background3_content">
                                        <form
                                            action={registerAction}
                                            className="font-sfPro w-full flex flex-col items-start max-[980px]:gap-2 gap-6"
                                        >
                                            <label htmlFor="name" className="sr-only">
                                                Nom
                                            </label>
                                            <InputWithIcon
                                                id="name"
                                                name="name"
                                                icon={
                                                    <User className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                                }
                                                placeHolder="Name"
                                                required
                                            />

                                            <label htmlFor="email" className="sr-only">
                                                Email
                                            </label>
                                            <InputWithIcon
                                                id="email"
                                                name="email"
                                                type="email"
                                                icon={
                                                    <Mail className="absolute left-0 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                                }
                                                placeHolder="Email"
                                                required
                                            />

                                            <label htmlFor="password" className="sr-only">
                                                Mot de passe
                                            </label>
                                            <InputWithIcon
                                                id="password"
                                                name="password"
                                                type="password"
                                                icon={
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                                }
                                                placeHolder="Password"
                                                required
                                            />

                                            {error && (
                                                <span className="text-red-500 text-sm" role="alert">
                          {error}
                        </span>
                                            )}

                                            <GradientButton type="submit">Sign Up</GradientButton>
                                        </form>

                                        <div className="font-sfPro w-full flex flex-col items-center max-[980px]:gap-2 gap-[26px] mt-6">
                                              <span className="text-[#757185] text-[16px] font-[590]">
                                                Or start your NoorAI with
                                              </span>
                                            <div className="flex items-center justify-center gap-7">
                                                <button
                                                    aria-label="S’inscrire avec Google"
                                                    className="w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered"
                                                >
                                                    <GoogleIcon color="#757185" width={25} height={25} />
                                                </button>
                                                <button
                                                    aria-label="S’inscrire avec Apple"
                                                    className="w-12 h-12 rounded-full border border-[#FFFFFF1A] p-[13px] centered"
                                                >
                                                    <AppleIcon color="#757185" width={25} height={25} />
                                                </button>
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
