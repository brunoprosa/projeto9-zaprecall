import SCIconsCompleted from "../styled-components/SCIconsCompleted";

export default function Completed({numberQuestions, numberAnswers}){
    
    return(
        <>
            <p>{numberAnswers}/{numberQuestions} CONCLUÍDOS</p>
        </>
    );
}