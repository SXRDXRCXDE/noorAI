import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function InputWithIcon({ placeHolder, icon, type = "text" }) {
    return (
        <div className="relative w-full max-w-sm">
            {icon ? (
                icon
            ) : (
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            )}
            <Input
                type={type}
                placeholder={placeHolder || "Search..."}
                className="pl-10 h-[56px] font-[274] text-[16px] text-white "
            />
        </div>
    )
}
