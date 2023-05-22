import SCButton from "../../styled-components/SCButton";

export default function CardAnswer(){
    return(
        <>
            <p>
            JSX é uma sintaxe para
            escrever HTML dentro do JS
            </p>
            <SCButton color="#FF3030" left="17px">Não lembrei</SCButton>
            <SCButton color="#FF922E" left="110px">Quase não lembrei</SCButton>
            <SCButton color="#2FBE34" left="203px">Zap!</SCButton>
        </>
    );
}