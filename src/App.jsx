import QuoteBox from "./componentes/QuoteBox"
import QuoteDb from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react";

function App() {
  const  getRandom = (array) =>{
    const randomIndex = Math.floor(array.length * Math.random());
    return array[randomIndex];
  }
  const [quote, setQuote] = useState (getRandom(QuoteDb));
  const [color, setColor] = useState (getRandom(colors))

  const getNewValues = () =>{
    const newQuote = getRandom(QuoteDb);
    const newColor = getRandom(colors);
    setQuote(newQuote);
    setColor(newColor);
  }
  const backgroundColorObject = {
    backgroundColor : color
  }
  const colorObject = {
    color: color
  }
  return (
    <div className="App" style={backgroundColorObject}>
      <QuoteBox quote={quote} getNewValues={getNewValues} backgroundColorObject={backgroundColorObject} colorObject ={colorObject}/>
    </div>
  )
}
export default App
