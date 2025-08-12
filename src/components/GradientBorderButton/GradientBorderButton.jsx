// components/GradientBorderButton.jsx
export default function GradientBorderButton({
                                                 text,
                                                 className = " w-[358px] h-[69px] gradient_border_button mt-[37px] text-white centered relative",
                                                 textClassName = "text-[24px] font-sfPro font-medium leading-[100%] text-center align-middle",
                                                 innerDivClass="w-full h-full bg-[#FFFFFF33]  rounded-full centered",
                                                 onClick,
                                             }) {
    return (
        <div
            className={`   ${className}`}
            onClick={onClick}
        >
            <div className={`${innerDivClass} `}>
        <span
            className={` ${textClassName}`}
        >
          {text}
        </span>
            </div>
        </div>
    );
}
