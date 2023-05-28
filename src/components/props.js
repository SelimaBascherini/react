/*Esercizio 1: Passare le props da un componente padre a un componente figlio

Crea un componente padre chiamato "ParentComponent" che abbia una proprietà 
"message" con un valore di testo. Il componente padre dovrebbe renderizzare 
anche un componente figlio chiamato "ChildComponent" e passargli la prop "message". 
Il componente figlio dovrebbe semplicemente renderizzare il valore della prop "message".*/

export function ParentComponent(){
    const message  = "ciao";
    return(
        <>
            <h3>ParentComponent</h3>
            <ChildComponent message = {message}/>
        </>
    )
}

function ChildComponent(props){
    return(
        <>
        <h3>Child Component</h3>
        <p>{props.message}</p>
        </>
    )
}