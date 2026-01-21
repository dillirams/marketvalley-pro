import { ReactElement } from "react"

interface ButtonType{
    name:string,
    size:"sm"|"lg"|"md"
    varient:"primary"|"secondary",
    onclick: ()=>void
    startIcon?:ReactElement
    endIcon?:ReactElement
}

export function Button (props:ButtonType){
    return <button className="bg-indigo-500">
        {props.name}
    </button>
}