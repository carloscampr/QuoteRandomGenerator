import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, backgroundColorObject, colorObject}) =>{
    return(
        <article className="quoteBox">
            <p style={colorObject}>{quote.quote}</p>
            <h4 style={colorObject}>{quote.author}</h4>
            <section className="quoteBox-footer">
                <QuoteButton getNewValues={getNewValues} backgroundColorObject={backgroundColorObject} />   
                <i style={colorObject} className='bx bxs-quote-alt-left'></i>
            </section>         
        </article>
    )
}
export default QuoteBox