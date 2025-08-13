import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewsCard({ title, date, excerpt, image, slug }) {
    // Use a fallback for the slug to prevent broken links
    const cardLink = slug ? `/news/${slug}` : "#";

    return (
        <div
            className="card_linear max-[1200px]:w-[280px] w-[380px] relative"
            style={{ minHeight: "532px" }}
        >
            {/* The entire card is now a link for better user experience and SEO */}
            <a href={cardLink} className="absolute left-0 top-0 w-full h-full rounded-[40px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-[40px]"
                    priority={false} // `priority` should be used sparingly for LCP images
                    sizes="(max-width: 1200px) 280px, 380px" // Add `sizes` attribute
                />
            </a>

            <div className="absolute bottom-0 left-0 w-full h-1/2 p-[25px]">
                <p className="text-[#E4E4E4] text-[16px] mb-[8px]">{date}</p>

                <h3 className="font-sfPro font-bold text-[22px] leading-[28px] text-white line-clamp-2">
                    {title}
                </h3>

                <p className="text-[#BEBEBE] text-[16px] leading-[24px] mt-[12px] line-clamp-3">
                    {excerpt}
                </p>

                {/* This link is now redundant, but you can keep it as a visual element.
            It's better to wrap the entire card in a single link. */}
                <a
                    href={cardLink}
                    className="text-white flex items-center gap-[7px] mt-[11px] font-sfPro font-medium text-[18px] leading-[25.45px]"
                >
                    Read More <ArrowRight size={21} />
                </a>
            </div>
        </div>
    );
}