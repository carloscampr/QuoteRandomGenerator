const QuoteButton = ({getNewValues, backgroundColorObject}) =>{
    return(
        <button onClick={getNewValues} style={backgroundColorObject}>
            <i className="bx bx-chevron-right"></i>
        </button>
    )
}
export default QuoteButton