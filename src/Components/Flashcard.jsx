import { useState } from "react";


const flashcard = (props)=>{
const [flipped, setFlipped] = useState(props.flipped);


const handleFlip = ()=>{
    setFlipped(!flipped);
}


return(
    <div onClick={handleFlip} className={`flashcard ${flipped ? "flip": ""}`}>
        <p>{flipped? props.answer: props.question}</p>
    </div>
)

}
export default flashcard;