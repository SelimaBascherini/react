/*Esercizio 2: Utilizzare le props per il rendering condizionale

Crea un componente chiamato "UserGreeting" che accetta una prop chiamata "isLoggedIn" di tipo booleano. Se "isLoggedIn" è vero, il componente dovrebbe renderizzare un messaggio di benvenuto, altrimenti dovrebbe renderizzare un messaggio di accesso negato.*/

// const User = ({isLoggedIn}) => {
//     if (isLoggedIn){
//         return <h2>Benvenuto!</h2>
//     } else {
//         return <h2>Accesso negato</h2>
//     }
// }



export function UserGreeting(isLoggedIn) {
    if (isLoggedIn){
        return <h2>Benvenuto!</h2>
    } else {
        return <h2>Accesso negato</h2>
    }
}
