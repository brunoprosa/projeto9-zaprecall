import Splash from './Splash';
import MainPage from './MainPage';
import SCMainPage from './styled-components/SCMainPage';
import GlobalStyle from './styled-components/globalStyles';
import cards from "./assets/cards";
import { useState } from "react";

export default function App() {
  // <Splash embaralharCards={() => embaralharCards(cards)}/>
  const [cartas, setCartas] = useState(cards);
  const [isVisible, setIsVisible] = useState(true);

  function embaralharCards(cards) {

    function randomizar() {
      return Math.random() - 0.5;
    }
    
    setCartas(cards.sort(randomizar));
    setIsVisible(false);
  }

  return (
    <>
      <GlobalStyle />

      <SCMainPage isVisible={isVisible}>
        <MainPage cartas={cartas} />
      </SCMainPage>
    </>
  );
}