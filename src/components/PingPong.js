import {useState} from "react"
export function PingPong (){
    const [boing, setBoing] = useState ("")
    return (
        <>

            <MyButtons name = 'Ping' setBoing = {setBoing} />
            <MyButtons name = 'Pong' setBoing = {setBoing} />

            <span>
                { boing }
            </span>
        </>
    )
}
function MyButtons({name, setBoing}){
    return(
        <button onClick={ () => setBoing(name)}>{name}</button>
        
    )
}
