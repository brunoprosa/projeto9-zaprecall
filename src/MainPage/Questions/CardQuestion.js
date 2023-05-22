import virar from "../../assets/seta_virar.png"
import openQuestion from "./openQuestion";

export default function CardQuestion({question, index, propsOpenQuestion}){
    return(
        <>
            <p data-test="flashcard-text">{question}</p>
            <img src={virar} data-test="turn-btn" onClick={() => openQuestion(index, propsOpenQuestion)} />
        </>
    );
}