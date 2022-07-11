import styled from "styled-components";

export const SearchBar = styled.section`
    display: flex;

    @media (max-width: 767px){
        flex-direction: column;
    }
`

export const Input = styled.input`
    flex-basis: 80%;
    min-height: 30px;    
    border: 1px solid #bbb;
    border-radius: 6px;
    padding: 10px;
    margin-right: 50px;

    @media (max-width: 767px){
        flex-basis: 100%;
        margin-right: 0;
    }
    
`;

export const Button = styled.button` 
    flex-basis: 10%;
    color: black;
    padding: 10px;
    font-size: 15px;
    border: none;
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