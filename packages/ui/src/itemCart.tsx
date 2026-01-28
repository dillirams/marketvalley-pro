import { ReactElement } from "react"

interface ItemProps{
    name:string
    image:string
     price:string
     description: string
     button1:ReactElement
     button2:ReactElement
}

export function ItemCart(prop:ItemProps){
     return <div className=" w-full h-full flex flex-col rounded-xl border border-gray-200 md:border-gray-300 bg-white p-2 md:p-3 space-y-2 md:space-y-3 ">

        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">

        
        <img
          src={prop.image}
          alt={prop.name}
          className="w-full h-full object-cover border border-gray-500 rounded-xl md:border-0"
        />
      </div>
        <div className="space-y-1 ">
            <p className="font-semibold text-xs md:text-sm break-words leading-snug"> {prop.name}</p>
             <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1">  {`Nu ${prop.price}`}</p>
              <p className="text-[12px] md:text-xs text-gray-600 flex items-center gap-1">  {prop.description}</p>
            
        </div>
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-1 bg-gray-100 rounded-xl p-1 ">
            <div className="w-full">{prop.button1}</div>
            <div className="w-full">{prop.button2}</div>
            </div>
    </div>
}