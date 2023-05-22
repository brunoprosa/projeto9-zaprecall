import SCButton from "../../styled-components/SCButton";
import finalAnswer from "./finalAnswer";

export default function CardAnswer({answer, index, propsFinalAnswer}){
    const buttons = [
        {color:"#FF3030", left:"17px", text:"Não lembrei", grade:"incorrect"},
        {color:"#FF922E", left:"110px", text:"Quase não lembrei", grade:"partially-correct"},
        {color:"#2FBE34", left:"203px", text:"Zap!", grade:"correct"}
    ]
    
    return(
        <>
            <p>{answer}</p>
            {buttons.map(({color, left, text, grade}) => 
            <SCButton color={color} left={left} onClick={() => finalAnswer(index, grade, propsFinalAnswer)} >
                {text}
            </SCButton>
            )}
        </>
    );
}