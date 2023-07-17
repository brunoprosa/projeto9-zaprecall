import openQuestion from "./openQuestion";

export default function HiddenQuestion({index, imageButton, isAnswered, color, propsOpenQuestion}) {
    let dataTest = "play-btn"
    return (
        <>
            <p data-test="flashcard-text">Pergunta {index + 1}</p>
            <img src={imageButton} data-test="play-btn no-icon zap-icon partial-icon" onClick={() => openQuestion(index, propsOpenQuestion)} />
        </>
    );
}