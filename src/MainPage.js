import SCHeader from "./styled-components/SCHeader";
import logo from "./assets/logo.png";
import SCQuestions from "./styled-components/SCQuestions";
import Questions from "./MainPage/Questions";
import SCCompleted from "./styled-components/SCCompleted";
import Completed from "./MainPage/Completed";
import { useState } from "react";

export default function MainPage({cartas}) {

    const [allAnswers, setAllAnswers] = useState([]);

    return (
        <>
            <SCHeader>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </SCHeader>
            {cartas.map((card, i) => 
            <SCQuestions data-test="flashcard">
                <Questions 
                carta={card} index={i} 
                allAnswers={allAnswers} setAllAnswers={setAllAnswers} 
                />
            </SCQuestions>
            )}
            <SCCompleted data-test="footer">
                <Completed 
                numberQuestions={cartas.length}
                numberAnswers={allAnswers.length}
                />
            </SCCompleted>
        </>
    );
}