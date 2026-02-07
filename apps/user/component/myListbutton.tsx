
import { useState } from "react"
import { useMarketValleyStore } from "../store/create"

export function MyListButton(){
    const {setShowList} =useMarketValleyStore();
    return <button onClick={setShowList} className="relative flex px-2 py-3 bg-blue-600 text-white font-medium rounded-sm">
        MyList
         <span
          className="
            absolute
            -top-1
            -right-1
            min-w-4
            md:min-w-5
            h-4
            md:h-4
            rounded-full
            bg-white
            text-black
            text-[12px]
            md:px-1
            flex items-center justify-center
            font-semibold
            leading-none
          "
        >
          {2}
        </span>
    </button>
}