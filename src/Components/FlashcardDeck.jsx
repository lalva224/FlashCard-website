import Flashcard from "./Flashcard"
import FlashcardData from "../Data/FlashcardData";
import { useState } from "react";


const FlashcardDeck = ()=>{
    const [Index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    
    const previousCard = ()=>{
      setFlipped(false);
      setIndex((index)=>Math.max(index-1,0));
    }
    const nextCard = ()=>{
      setFlipped(false);
      setIndex((index)=>Math.min(index+1,FlashcardData.length-1));
    }
   
    return(
        <div>
          <Flashcard flipped= {flipped}question = {FlashcardData[Index].Question} answer = {FlashcardData[Index].Answer}/> 
     
     <div className ="button-container">
        <button onClick={previousCard}>Previous</button>  <button onClick={nextCard}>Next</button>
     </div>
      
    </div>
       
    )
      }

export default FlashcardDeck;