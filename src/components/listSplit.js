
export function DottedList() {
    const [sentence, setSentence] = useState("")
    const nome = sentence.split(' ')

    return(
        <div className="container"> 
            <input type="text"  onChange={(e)=> {
                setSentence(e.target.value)
            } }></input>
            <ul>
            {
                nome.map((s,i) =>
                    <li className="dotted" key={i}>{s}</li>
                )
            }
            </ul>
        </div>
    )
}