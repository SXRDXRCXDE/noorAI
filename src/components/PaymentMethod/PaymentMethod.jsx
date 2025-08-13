import Image from "next/image";

export default function PaymentMethod({
                                          active,
                                          logo,
                                          name,
                                          details,
                                          onClick,
                                      }) {
    return (
        <div
            onClick={onClick}
            className="flex flex-shrink-0 items-center max-[420px]:gap-2 gap-4 mt-5 cursor-pointer"
        >
            {/* Status Circle */}
            <div
                className={`flex-shrink-0 w-5 h-5 rounded-full centered transition-colors ${
                    active
                        ? "bg-[#754BF3]"
                        : "border-2 border-[#754BF3]"
                }`}
            >
                <div
                    className={`w-[6px] h-[6px] rounded-full bg-white transition-opacity ${
                        active ? "opacity-100" : "opacity-0"
                    }`}
                ></div>
            </div>

            {/* Logo */}
            <Image
                alt={name}
                className="max-[420px]:w-[60px] max-[420px]:h-[37px] w-[100px] h-[67px] object-cover"
                src={logo}
            />

            {/* Text */}
            <div className="flex flex-col items-start">
        <span className="text-white font-sfPro font-[590] max-[420px]:text-[16px] text-[20px] leading-[140%] tracking-[1px]">
          {name}
        </span>
                <span className="text-[#818B9C] font-sfPro font-normal max-[420px]:text-[12px] text-[16px] leading-[160%] tracking-[1px]">
          {details}
        </span>
            </div>
        </div>
    );
}
