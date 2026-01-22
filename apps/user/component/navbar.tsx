"use client"
import { IconButton } from "@repo/ui/iconButton";
import { ProfileUpload } from "@repo/ui/upload";

import { ClipboardList } from "lucide-react";


export function Navbar (){
    return <div className="flex justify-between items-center px-8 md:px-24 py-3 ">
        <div className="text-sky-500 font-bold text-2xl">
            MarketValley
        </div>

        <div className="flex items-center space-x-3 ">
            <div className="">
                <IconButton  Icon={ClipboardList} size={35} count={3}/>
            </div>
            <div className="">
                <ProfileUpload onChange={(file)=>console.log(file)} firstletter="D"/>
                
            </div>
        </div>
    </div>
}