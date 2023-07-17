import styled from "styled-components";

const SCButton = styled.button`
width: 85px;
height: 37px;
margin: 3px;

background-color: ${props => props.color};
border-radius: 5px;
border: none;

position: absolute;
bottom: 10px;
left: ${props => props.left};

font-weight: 400;
font-size: 12px;
color: white;
`;

export default SCButton