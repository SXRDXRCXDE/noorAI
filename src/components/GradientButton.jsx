import { Button } from "@/components/ui/button";

export default function GradientButton({
                                           children,
                                           className = `h-11 font-[400] text-[16px] w-full rounded-3xl`,
                                       }) {
    return (
        <Button
            className={`${className} cursor-pointer bg-[linear-gradient(0deg,_#7D10D5_7.23%,_#00BFFF_91.51%)] text-white transition-all duration-200 hover:scale-[1.02] hover:brightness-110`}
        >
            {children}
        </Button>
    );
}
