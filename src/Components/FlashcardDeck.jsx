import Flashcard from "./Flashcard"
import FlashcardData from "../Data/FlashcardData";
import { useState ,useEffect} from "react";


const FlashcardDeck = ()=>{
    const [Index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [correct,setCorrect] = useState(0);
    const [userInput,setUserInput] = useState("");
    const [streak, setStreak] = useState(0);

   

    const incrementStreak = ()=>{
      const value = correct==1? streak + 1: 0
      setStreak(value);
    }
    const checkAnswer = ()=>{
       const answer = FlashcardData[Index].Answer.toLowerCase();
       const input = userInput.toLowerCase();
        const setter  = answer==input? 1 : 2;
        setCorrect(setter)
        
    } 


    const handleSubmit = (event)=>{
      event.preventDefault();
      checkAnswer();
    }

    const handleChange = (event)=>{
      setUserInput(event.target.value)
    }
    
    
    const previousCard = ()=>{
      setFlipped(false);
      setIndex((index)=>Math.max(index-1,0));
    }
    const nextCard = ()=>{
      setCorrect(0);
      setUserInput("");
      setFlipped(false);
      setIndex((index)=>Math.min(index+1,FlashcardData.length-1));
    }

   
    return(
        <div onSubmit={handleSubmit}>
          <h3 className = "title">Learn React Fundamentals and much more!</h3>
          <h5 className = "title">Number of cards: {FlashcardData.length}</h5>
          <Flashcard flipped= {flipped}question = {FlashcardData[Index].Question} answer = {FlashcardData[Index].Answer}/> 
          
          <form>
          <label className = "title">Guess Answer:</label> 
          <input value={userInput} onChange={handleChange} className ={correct==2?"redText": correct==1?"greenText" :""} type = "text"></input>
           <input type = "submit"></input>
          </form>

          <h6 className="title">{streak>0?"Current Streak:" + streak: ""}</h6>
            
            
   
          
     <div className ="button-container">
        <button className ="button" onClick={previousCard}>Previous
        </button>  <button className ="button"onClick={()=>{
          nextCard();
          incrementStreak();
        }}>Next</button>
     </div>
      
    </div>
       
    )
      }

export default FlashcardDeck;