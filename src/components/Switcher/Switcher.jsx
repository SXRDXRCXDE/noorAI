export default function Switcher({ label, active, onClick }) {
    return (
        <div
            className="flex items-center gap-[14px] cursor-pointer"
            onClick={onClick}
        >
            {active ? (
                <div className="switcher_active w-[34px] h-[34px]">
                    <div className="w-full h-full centered p-[4px]">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7D10D5] via-[#4150CD] to-[#00BFFF]"></div>
                    </div>
                </div>
            ) : (
                <div className="border-white border-[2px] rounded-full w-[32px] h-[32px]">
                    <div className="w-full h-full centered p-[4px] opacity-0">
                        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7D10D5] via-[#4150CD] to-[#00BFFF]"></div>
                    </div>
                </div>
            )}

            <span className="text-white font-sfPro font-medium text-2xl leading-[150%] tracking-[-0.04em] capitalize">
        {label}
      </span>
        </div>
    );
}