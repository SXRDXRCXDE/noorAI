import Image from "next/image";
import {ArrowRight, CalendarRange} from "lucide-react";

export default function NewsCard({
                             image,
                             tag = "ai revelation",
                             date = "15 Sep, 2021",
                             title,
                             onReadMore
                         }) {
    return (
        <div className="w-[385px] h-[487px] rounded-[30px] relative overflow-hidden">
            {/* Background Image */}
            <Image
                src={image}
                alt="news"
                className="object-cover w-full h-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-black/70 flex items-end w-full h-[243px]">
                <div className="w-full h-[182px] p-[28px] flex flex-col items-start">

                    {/* Tag + Date */}
                    <div className="flex items-center">
                        <div className="px-[10px] py-[5px] rounded-full bg-[#FFC759] font-inter font-medium text-[10.91px] leading-[100%] tracking-[0.01em] text-center uppercase">
                            {tag}
                        </div>
                        <div className="flex items-center ml-[15px] text-white gap-[6px] font-sfPro font-medium text-[14.55px] leading-[21.82px] tracking-[0] text-center">
                            <CalendarRange size={15} />
                            <span>{date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <span className="text-white line-clamp-2 mt-[11px] font-sfPro font-medium text-[18px] leading-[25.45px] tracking-[0]">
            {title}
          </span>

                    {/* Read More */}
                    <button
                        onClick={onReadMore}
                        className="text-white flex items-center gap-[7px] mt-[11px] font-sfPro font-medium text-[18px] leading-[25.45px] tracking-[0]"
                    >
                        Read More <ArrowRight size={21} />
                    </button>
                </div>
            </div>
        </div>
    );
}