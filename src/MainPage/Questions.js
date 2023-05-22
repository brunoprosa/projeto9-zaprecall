import { useState } from "react";
import SCCardAnswer from "../styled-components/SCCardAnswer";
import SCCardQuestion from "../styled-components/SCCardQuestion";
import SCHiddenQuestion from "../styled-components/SCHiddenQuestion";
import CardAnswer from "./Questions/CardAnswer";
import CardQuestion from "./Questions/CardQuestion";
import HiddenQuestion from "./Questions/HiddenQuestion";


export default function Questions(props) {

    const [indexHQHidden, setindexHQHidden] = useState([]);
    const [indexCQHidden, setindexCQHidden] = useState([]);
    const [indexCAHidden, setindexCAHidden] = useState([]);
    const [answer, setAnswer] = useState([]);

    return (
        <ul>
            
            <SCHiddenQuestion>
                <HiddenQuestion />
            </SCHiddenQuestion>

            <SCCardQuestion>
                <CardQuestion />
            </SCCardQuestion>

            <SCCardAnswer>
                <CardAnswer />
            </SCCardAnswer>
        </ul>
    );
}