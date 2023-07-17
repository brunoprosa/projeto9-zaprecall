import styled from "styled-components";

const SCCardAnswer = styled.li`

width: 300px;
height: 131px;
padding: 18px 0 3px 15px;

background-color: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;

display: ${props => !props.visible ? "flex" : "none"};

position: relative;

p{
    font-weight: 400;
    font-size: 18px;
    color: #333333;
}
`;

export default SCCardAnswer