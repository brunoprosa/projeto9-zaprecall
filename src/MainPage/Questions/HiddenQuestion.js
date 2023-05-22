import play from "../../assets/seta_play.png"
import openQuestion from "./openQuestion";

export default function HiddenQuestion({index, propsOpenQuestion}) {
    return (
        <>
            <p>Pergunta {index + 1}</p>
            <img src={play} onClick={() => openQuestion(index, propsOpenQuestion)} />
        </>
    );
}