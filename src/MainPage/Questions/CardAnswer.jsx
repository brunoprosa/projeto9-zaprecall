import SCButton from "../../styled-components/SCButton";
import finalAnswer from "./finalAnswer";

export default function CardAnswer({answer, index, propsFinalAnswer}){
    const buttons = [
        {color:"#FF3030", left:"17px", text:"Não lembrei", grade:"incorrect", datatest:"no-btn"},
        {color:"#FF922E", left:"110px", text:"Quase não lembrei", grade:"partially-correct", datatest:"partial-btn"},
        {color:"#2FBE34", left:"203px", text:"Zap!", grade:"correct", datatest:"zap-btn"}
    ]
    
    return(
        <>
            <p data-test="flashcard-text">{answer}</p>
            {buttons.map(({color, left, text, grade, datatest}) => 
            <SCButton color={color} left={left} data-test={datatest} onClick={() => finalAnswer(index, grade, propsFinalAnswer)} >
                {text}
            </SCButton>
            )}
        </>
    );
}