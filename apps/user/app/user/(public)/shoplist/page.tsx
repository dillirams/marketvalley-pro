"use client"
import { Button } from "@repo/ui/button";
import { ShopCart } from "@repo/ui/shopcart";
import { LocationCarousel } from "../../../../component/locationCarousel";
import { SearchInput } from "@repo/ui/searchInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function (){
  const [value, setValue]=useState("")
  const router=useRouter()
return <div className="bg-background-main h-full w-full">
    <div className="pt-10 px-1">
         <div className=" px-1 md:px-10">
        <h4 className="font-semibold mb-2">Select Location</h4>
        <LocationCarousel />
      </div>
    </div>
    <div className="px-3 sm:md:px-[20%] md:px-[20%] py-3 flex justify-center">
      <SearchInput value={value}  onChange={setValue}/>
    </div>
    <div className="px-4 md:p-4 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-2">
        <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram Adhikari Tsongkhang" locaton="tsirang" type="Grocery" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{router.push('/user/shoppage')}}/>}/>
         <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} type="Hardware"  name="Dorji Tsongkhang" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c6/75/6e/must-visit-for-great.jpg?w=1200&h=1200&s=1"} type="Hardware"  name="Dorji Tshongkhang" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram Adhikari Tsongkhang" locaton="tsirang" type="Grocery" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
          <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram Adhikari Tsongkhang" locaton="tsirang" type="Grocery" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} type="Hardware"  name="Dorji Tsongkhang" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c6/75/6e/must-visit-for-great.jpg?w=1200&h=1200&s=1"} type="Hardware"  name="Dorji Tshongkhang" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram Adhikari Tsongkhang" locaton="tsirang" type="Grocery" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram Adhikari Tsongkhang" locaton="tsirang" type="Grocery" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
    </div>
</div>
}