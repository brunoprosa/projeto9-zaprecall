import styled from "styled-components";

const SCCompleted = styled.div`
    background-color: white;
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    position: fixed;
    bottom: 0px;
    left: 0px;

    p{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #333333;
    }
`;

export default SCCompleted