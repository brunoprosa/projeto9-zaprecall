import openQuestion from "./openQuestion";

export default function HiddenQuestion({index,imageButton, propsOpenQuestion}) {
    return (
        <>
            <p>Pergunta {index + 1}</p>
            <img src={imageButton} onClick={() => openQuestion(index, propsOpenQuestion)} />
        </>
    );
}