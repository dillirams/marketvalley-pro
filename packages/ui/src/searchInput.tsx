interface InputProps{
    reference:any
    onChange:()=>void
}

export function SearchInput(props:InputProps){
    return <input ref={props.reference} onChange={props.onChange} className="border px-3 py-2 rounded-xl" type="" placeholder="search" />
}