import styled from "styled-components"

export const Wrapper = styled.header`
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(175, 175, 175, 0.85);

    @media (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 600;
    color: #404040;
`;


export const Logo = styled.span`
    font-size: 30px;
`;

export const Button = styled.button`
    color: black;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #bbb;
    border: none;
    margin-left: 15px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(175, 175, 175, 0.85);
    -moz-box-shadow: 0px 0px 2px 0px rgba(175, 175, 175, 0.85);
    box-shadow: 0px 0px 2px 0px rgba(175, 175, 175, 0.85);

    &:hover {
        background-color: #5D6F68;
        color: white;
        cursor: pointer;
        transition: .3s;
    }

    @media (max-width: 767px){
        flex-direction: column;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
