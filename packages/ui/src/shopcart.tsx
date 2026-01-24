import { ReactElement } from "react"
import { MapPin,Phone } from "lucide-react"

interface ShopCartProps{
    image:string
    name:string
    button: ReactElement
    locaton:string
    contact: string
    type:string
    
}

export function ShopCart(prop:ShopCartProps){
    return <div className=" w-full grid justify-between rounded-xl border border-gray-200 md:border-0 bg-white p-2 md:p-3 space-y-2 md:space-y-3 ">

        <div className="relative w-full h-24 md:h-28 overflow-hidden rounded-lg">

        {/* Rating badge */}
        <div
          className="
            absolute bottom-1 right-1
            flex items-center gap-1
            bg-white/90
            px-2 py-[2px]
            rounded-full
            text-[10px]
            font-semibold
            text-gray-800
            shadow-sm
          "
        >
          ⭐ 4.6
        </div>

        {/* Image */}
        <img
          src={prop.image}
          alt={prop.name}
          className="w-full h-full object-cover"
        />
      </div>
        <div className="space-y-1 ">
            <p className="font-semibold text-xs md:text-sm break-words leading-snug"> {prop.name}</p>
             <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1">  {prop.type}</p>
              <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1"> <MapPin size={10} /> {prop.locaton}</p>
            <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1"><Phone size={10} />{prop.contact}</p>
        </div>
         <div className="">
            {prop.button}
         </div>
    </div>
}