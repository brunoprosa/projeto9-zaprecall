import openQuestion from "./openQuestion";

export default function finalAnswer(
    index, grade, {allAnswers, setAllAnswers, propsOpenQuestion
    }){
    let aux = [...allAnswers];
    aux.push({index: index, grade: grade});
    setAllAnswers(aux);
    openQuestion(index, propsOpenQuestion)
}