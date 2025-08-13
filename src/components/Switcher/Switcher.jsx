// Switcher.jsx - SSR-friendly, pure CSS toggle

export default function Switcher({ id, name, label, defaultChecked }) {
    return (
        <label htmlFor={id} className="switcher flex items-center gap-[14px] cursor-pointer">
            <input
                type="radio"
                id={id}
                name={name}
                defaultChecked={defaultChecked}
                className="hidden peer"
            />
            <div className="w-[34px] h-[34px] rounded-full border-[2px] border-white peer-checked:border-transparent transition-all duration-300">
                <div className="w-full h-full p-[4px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#7D10D5] via-[#4150CD] to-[#00BFFF] opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
            <span className="text-white font-sfPro font-medium text-2xl leading-[150%] tracking-[-0.04em] capitalize">
                {label}
            </span>
        </label>
    );
}
