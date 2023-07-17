import { useState } from "react";
import SCCardAnswer from "../styled-components/SCCardAnswer";
import SCCardQuestion from "../styled-components/SCCardQuestion";
import SCHiddenQuestion from "../styled-components/SCHiddenQuestion";
import CardAnswer from "./Questions/CardAnswer";
import CardQuestion from "./Questions/CardQuestion";
import HiddenQuestion from "./Questions/HiddenQuestion";
import play from "../assets/seta_play.png";
import wrong from "../assets/icone_erro.png";
import almost from "../assets/icone_quase.png";
import correct from "../assets/icone_certo.png";

export default function Questions({ carta, index, allAnswers, setAllAnswers }) {

    const [indexHQHidden, setIndexHQHidden] = useState([]);
    const [indexCQHidden, setIndexCQHidden] = useState([0,1,2,3,4,5,6,7]);
    const [indexCAHidden, setIndexCAHidden] = useState([0,1,2,3,4,5,6,7]);
    let isAnswered = false;
    let color = "#333333";
    let imageButton = play;

    if(allAnswers.filter(e => e.index === index).length > 0){
        isAnswered = true;
        let aux = allAnswers.filter(e => e.index === index);
        let grade = aux[0].grade;
        if(grade === "incorrect") {
            color = "#FF3030";
            imageButton = wrong;
        }
        if(grade === "partially-correct"){ 
            color = "#FF922E";
            imageButton = almost
        }
        if(grade === "correct") {
            color = "#2FBE34";
            imageButton = correct;
        }
    }

    return (
        <ul>
            <SCHiddenQuestion 
            visible={indexHQHidden.includes(index)}
            isAnswered={isAnswered} color={color}
            >
                <HiddenQuestion index={index} imageButton={imageButton} isAnswered={isAnswered} color={color}
                propsOpenQuestion=
                {{
                    selecionado:indexHQHidden,
                    setSelecionado:setIndexHQHidden,
                    toOpen:indexCQHidden,
                    setToOpen:setIndexCQHidden
                }}/>
            </SCHiddenQuestion>

            <SCCardQuestion visible={indexCQHidden.includes(index)} >
                <CardQuestion question={carta.question} index={index} propsOpenQuestion=
                {{
                    selecionado:indexCQHidden,
                    setSelecionado:setIndexCQHidden,
                    toOpen:indexCAHidden,
                    setToOpen:setIndexCAHidden
                }} />
            </SCCardQuestion>

            <SCCardAnswer visible={indexCAHidden.includes(index)}>
                <CardAnswer answer={carta.answer} index={index} propsFinalAnswer=
                {{
                    allAnswers:allAnswers,
                    setAllAnswers:setAllAnswers,
                    propsOpenQuestion:
                    {
                    selecionado:indexCAHidden,
                    setSelecionado:setIndexCAHidden,
                    toOpen:indexHQHidden,
                    setToOpen:setIndexHQHidden
                    }
                }} />
            </SCCardAnswer>
        </ul>
    );
}