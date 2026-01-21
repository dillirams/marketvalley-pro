import { IconButton } from "@repo/ui/iconButton";
import { MessagesSquare } from "lucide-react";


export function Navbar (){
    return <div className="flex justify-between items-center px-24 py-3 ">
        <div className="text-sky-500 font-bold text-2xl">
            MarketValley
        </div>

        <div className="flex ">
            <div>
                <IconButton Icon={<MessagesSquare />} size={45}/>
            </div>
            <div>profile</div>
        </div>
    </div>
}