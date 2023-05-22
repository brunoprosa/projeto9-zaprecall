import { isVisible } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

const SCMainPage = styled.div`
    padding: 42px 0 70px 0;
    background-color: #FB6B6B;
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
`;

export default SCMainPage