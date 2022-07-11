import styled from "styled-components"

export const Wrapper = styled.header`
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 42px;
`;


export const Logo = styled.span`
    font-size: 30px;
`;

export const Button = styled.button`
    color: black;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #bbb;
    margin: 5px;

    &:hover {
        background-color: green;
    }

    @media (max-width: 767px){
        flex-direction: column;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
