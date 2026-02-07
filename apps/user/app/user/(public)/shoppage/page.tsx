"use client"
import { ItemCart } from "@repo/ui/itemCart";

import { Button } from "@repo/ui/button";
import { SearchInput } from "@repo/ui/searchInput";
import { useState } from "react";
import { MyListButton } from "../../../../component/myListbutton";
import { useMarketValleyStore } from "../../../../store/create";
import { MyList } from "../../../../component/mylist";

export default function Shoppage(){
   const [value, setValue]=useState("")
   const {showList, setShowList}=useMarketValleyStore()
    return <div className="bg-background-main h-full w-full px-4">

      <div className="">
        Dilliram  Adhikari Tsongkhang
      </div>

       <div className="flex justify-end m-2">
          <MyListButton/>
          {showList && <MyList/>}
      </div>


      <div className="px-3 sm:md:px-[20%] md:px-[20%] py-3 flex justify-center">
        <SearchInput value={value} onChange={setValue}/>
      </div>

     
      <div className=" py-3 md:p-4 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-2">
        <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
      <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
      <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
      <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
      <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
      <ItemCart name="Vegetable Oil" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7YLslDHd98w16Xyhv8BqwaMqCqo-9MTMFQ&s" price="500"
       description="Healthy Eadiable Vegetable oil" button1={ <Button size="sm" variant="secondary" click={() => {}} title="View Details" font="normal" fullWidth/>
        }
        button2={<Button size="sm" variant="primary" click={() => {}} title="Add to List" font="normal" fullWidth
      />}/>
    </div>

    </div>
    
    
}