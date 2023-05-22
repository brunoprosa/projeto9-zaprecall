import { useState } from "react";
import SCCardAnswer from "../styled-components/SCCardAnswer";
import SCCardQuestion from "../styled-components/SCCardQuestion";
import SCHiddenQuestion from "../styled-components/SCHiddenQuestion";
import CardAnswer from "./Questions/CardAnswer";
import CardQuestion from "./Questions/CardQuestion";
import HiddenQuestion from "./Questions/HiddenQuestion";


export default function Questions({carta, index}) {

    const [indexHQHidden, setIndexHQHidden] = useState([]);
    const [indexCQHidden, setIndexCQHidden] = useState([0,1,2,3,4,5,6,7]);
    const [indexCAHidden, setIndexCAHidden] = useState([0,1,2,3,4,5,6,7]);
    const [allAnswers, setAllAnswers] = useState([]);

    return (
        <ul>
            <SCHiddenQuestion visible={indexHQHidden.includes(index)} >
                <HiddenQuestion index={index} propsOpenQuestion=
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