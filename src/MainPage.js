import SCHeader from "./styled-components/SCHeader";
import logo from "./assets/logo.png";
import SCQuestions from "./styled-components/SCQuestions";
import Questions from "./MainPage/Questions";
import SCCompleted from "./styled-components/SCCompleted";
import Completed from "./MainPage/Completed";
import { useState } from "react";

export default function MainPage(props) {

    const [answers, setAnswers] = useState([]);

    return (
        <>
            <SCHeader>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </SCHeader>
            <SCQuestions>
                <Questions cartas={props.cartas} />
            </SCQuestions>
            <SCCompleted>
                <Completed />
            </SCCompleted>
        </>
    );
}