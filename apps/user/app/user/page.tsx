"use client"
import { Button } from "@repo/ui/button";
import { ShopCart } from "@repo/ui/shopcart";

export default function (){
return <div className="bg-background-main h-screen w-screen">
    <div className="pt-10 px-10">
        <h4 className="font-semibold">Select Location</h4>
        <div>
            <Button title="All Location" variant="primary" size="sm" font="normal" click={()=>{alert("hello")}}/>
                <Button title="All Location" variant="primary" size="sm" font="normal" click={()=>{alert("hello")}}/>
                    <Button title="All Location" variant="primary" size="sm" font="normal" click={()=>{alert("hello")}}/>
        </div>
    </div>
    <div className="p-2 md:p-10 flex gap-2 md:gap-4">
        <ShopCart image={"https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"} name="Dilliram" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c6/75/6e/must-visit-for-great.jpg?w=1200&h=1200&s=1"} name="Dilliram" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
         <ShopCart image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c6/75/6e/must-visit-for-great.jpg?w=1200&h=1200&s=1"} name="Dilliram" locaton="tsirang" contact="77830649"
         button={<Button title="View Shop" variant="primary" size="sm" font="normal" fullWidth={true} click={()=>{alert("hello")}}/>}/>
    </div>
</div>
}