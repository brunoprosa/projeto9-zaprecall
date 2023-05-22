import styled from "styled-components";

const SCHiddenQuestion = styled.li`
    width: 300px;
    height: 65px;
    padding: 0 15px 0 15px;
    
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props => !props.visible ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;

    p{
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    img{
        width: 23px;
    }
`;

export default SCHiddenQuestion