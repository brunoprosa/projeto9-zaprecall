export default function openQuestion(
    index, {
    selecionado, setSelecionado, 
    toOpen, setToOpen
}){
    let temp = [...selecionado];
    temp.push(index)
    setSelecionado(temp);
    let aux =[];
    for(let i = 0; i < toOpen.length; i++){
        if(toOpen[i] === index) continue
        aux.push(toOpen[i]);
    }
    setToOpen(aux);
}