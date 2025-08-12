import Image from "next/image";
import dots from "@/assets/images/dots.png";
import StarIcon from "@/components/StarIcon/StarIcon";

export default function ReviewCard({ avatar, name, position, review }) {
    return (
        <div className="card_linear max-[1200px]:w-[280px] w-[380px] relative" style={{ minHeight: "532px" }}>
            <div className="w-full rounded-[40px] bg-[#FFFFFF1F] pt-10 pb-[90px] px-[25px] flex flex-col items-center relative">

                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <div className="w-[100px] h-[100px] centered rounded-full overflow-hidden bg-[#FFFFFF1F]">
                        <Image src={avatar} alt="avatar" className="object-cover w-full h-full" />
                    </div>
                    <span className="mt-[18px] text-white font-sfPro font-medium text-[24px] text-center">
            {name}
          </span>
                    <span className="mt-[9px] text-white/70 font-sfPro text-[16px] text-center">
            {position}
          </span>
                    <div className="w-[320px] h-[2px] mt-[13px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Review */}
                <div className="w-full flex flex-col items-start mt-[27px]">
                    <Image src={dots} alt="dots" className="object-contain self-center w-10 h-10" />
                    <div className="w-full flex flex-col items-center mt-[14px]">
            <span className="text-white font-sfPro font-normal text-[20px] leading-[150%] text-center line-clamp-4">
              {review}
            </span>
                    </div>
                </div>

                {/* Stars */}
                <div className="w-full absolute bottom-[26px] left-0 flex flex-col items-center">
                    <div className="w-[320px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex items-center gap-[6px] mt-[20px]">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} color="#FEC20F" width={20} height={20} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
