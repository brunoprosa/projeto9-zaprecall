export default function Completed({numberQuestions, allAnswers}){
    return(
        <>
            <p>{allAnswers.length}/{numberQuestions} CONCLUÍDOS</p>
        </>
    );
}