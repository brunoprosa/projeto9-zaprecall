import virar from "../../assets/seta_virar.png"
import openQuestion from "./openQuestion";

export default function CardQuestion({question, index, propsOpenQuestion}){
    return(
        <>
            <p>{question}</p>
            <img src={virar} onClick={() => openQuestion(index, propsOpenQuestion)} />
        </>
    );
}