import styled from "styled-components";

export const SearchBar = styled.section`
    background-color: crimson;
    display: flex;
    max-width: 600px;
    width: 100%;

    @media (max-width: 767px){
        flex-direction: column;
    }
`

export const Input = styled.input`
    flex-basis: 75%;
    min-height: 30px;    
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 5px;
    margin-right: 50px;

    @media (max-width: 767px){
        flex-basis: 100%;
        margin-right: 0;
    }
    
`;

export const Button = styled.button`
    background-color: teal;
    color: #fff;
    padding: 10px;
    font-size: 15px;
    border: none;

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