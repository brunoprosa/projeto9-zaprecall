import MainPage from './MainPage';
import SCMainPage from './styled-components/SCMainPage';
import GlobalStyle from './styled-components/globalStyles';
import cards from "./assets/cards";
import { useState } from "react";

function App() {

  const [cartas, setCartas] = useState(cards);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <GlobalStyle />

      <SCMainPage isVisible={isVisible}>
        <MainPage cartas={cartas} />
      </SCMainPage>
    </>
  )
}

export default App
