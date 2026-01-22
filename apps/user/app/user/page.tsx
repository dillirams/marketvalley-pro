"use client"
import { Button } from "@repo/ui/button";

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
    <div>

    </div>
</div>
}