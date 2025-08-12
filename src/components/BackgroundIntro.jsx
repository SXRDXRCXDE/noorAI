import PlusSvg from "@/components/PlusSvg";
import ShadeSvg from "@/components/ShadeSvg";
import Image from "next/image";
import rasm from "@/assets/images/bg_waves.jpg";

export default function BackgroundIntro() {
    return (
        <div className="w-full h-[calc(100vh-40px)] relative ">
            {/* Corners */}
            <div className="absolute -bottom-[5px] -left-[5.5px] z-10">
                <PlusSvg />
            </div>
            <div className="absolute -bottom-[5px] -right-[5.5px] z-10">
                <PlusSvg />
            </div>

            {/* Shade */}
            <div className="absolute -right-[calc(207px+39px)] -top-[calc(143px+104px)] w-[905px] h-[905px]">
                <ShadeSvg />
            </div>

            {/* Dots (now animated via keyframes) */}
            <div className="absolute left-0 top-[calc(271px+104px)] w-full h-[275px] z-10">
                <div className="w-full h-full relative">
                    <div className="styled_dot1 dot-anim absolute left-[105px] top-[24px] w-4 h-4 rounded-full"></div>
                    <div className="styled_dot2 dot-anim absolute left-[0px] top-[56px] w-6 h-6 -translate-x-2 rounded-full anim-delay-200"></div>
                    <div className="styled_dot3 dot-anim absolute left-[121px] top-[228px] w-3 h-3 rounded-full anim-delay-400"></div>
                    <div className="styled_dot2 dot-anim absolute right-[0px] top-[0px] translate-x-3 w-6 h-6 rounded-full anim-delay-600"></div>
                    <div className="styled_dot3 dot-anim absolute right-[145px] top-[99px] w-4 h-4 rounded-full anim-delay-800"></div>
                    <div className="styled_dot1 dot-anim absolute right-[97px] bottom-[0px] w-2 h-2 rounded-full anim-delay-1000"></div>
                </div>
            </div>

            {/* Background */}
            <div className="w-full h-full relative border-x border-b border-[#26242C] z-0 overflow-hidden">
                <Image
                    src={rasm}
                    alt="bg"
                    className="absolute top-0 left-0 object-cover opacity-30"
                    fill
                />
                <div className="faded_bg_top absolute top-0 left-0 w-full h-[447px]"></div>
                <div className="faded_bg_bottom absolute bottom-0 left-0 w-full h-[647px]"></div>
                <div className="faded_bg_mid_top_right translate-x-[68.5px] absolute top-0 left-0 right-0 m-auto w-[687px] h-[1237px]"></div>
                <div className="faded_bg_mid_top_left -translate-x-[68.5px] absolute top-0 left-0 right-0 m-auto w-[687px] h-[1237px]"></div>
                <div className="blend_screen absolute top-[104px] left-0 right-0 m-auto w-[824.47px] h-[1237px]"></div>

                {/* Grid */}
                <div className="absolute left-[72px] top-[calc(92px+104px)] w-[550px] h-[550px] relative opacity-10">
                    <div className="w-full h-full relative">
                        <div className="absolute left-0 top-0 w-[550px] h-[550px]">
                            <div className="relative w-[550px] h-[550px]">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={`h-${i}`}
                                        className="absolute left-0 right-0 h-[1px] bg-[#AC6AFF]"
                                        style={{ top: `${i * 94 + 47}px` }}
                                    />
                                ))}
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={`v-${i}`}
                                        className="absolute top-0 bottom-0 w-[1px] bg-[#AC6AFF]"
                                        style={{ left: `${i * 94 + 47}px` }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="fade_out_top absolute w-[550px] h-[120px]"></div>
                        <div className="fade_out_bottom absolute bottom-0 w-[550px] h-[120px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
