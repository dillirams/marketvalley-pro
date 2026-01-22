import { ReactElement } from "react"
import { MapPin,Phone } from "lucide-react"

interface ShopCartProps{
    image:string
    name:string
    button: ReactElement
    locaton:string
    contact: string
    
}

export function ShopCart(prop:ShopCartProps){
    return <div className=" w-36 sm:w-40 md:w-48 rounded-xl border border-gray-200 md:border-0 bg-white p-2 md:p-3 space-y-2 md:space-y-3 ">
        <img src={`${prop.image}`} alt="" className=" w-full h-24 md:h-28 overflow-hidden rounded-lg " />
        <div className="space-y-1 ">
            <p className="font-semibold text-xs md:text-sm break-words leading-snug"> {"Dawa Tshongkhang "}</p>
             <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1"> <MapPin size={10} /> {prop.locaton}</p>
            <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1"><Phone size={10} />{prop.contact}</p>
        </div>
         <div className="">
            {prop.button}
         </div>
    </div>
}