"use client"
import { IconButton } from "@repo/ui/iconButton";
import { Logo } from "@repo/ui/logo";
import { ProfileUpload } from "@repo/ui/upload";

import { ClipboardList,User } from "lucide-react";
import { useRouter } from "next/navigation";


export function Navbar (){
    const router=useRouter()
    return <div className="flex justify-between items-center px-8 md:px-24 py-3 sticky top-0 z-50 bg-white">
       <Logo/>
        <div className="flex items-center space-x-3 ">
            <div className="">
                <IconButton  Icon={ClipboardList} size={35} count={3}/>
            </div>
            <div className="">
                <IconButton Icon={User} size={35} onClick={()=>{
                    router.push('/user/profile/124')
                }}/>
                
            </div>
        </div>
    </div>
}