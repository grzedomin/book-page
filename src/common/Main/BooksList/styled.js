import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
`;

export const Tile = styled.div`
height: 400px;
width: 280px;
background: #ccc;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
padding: 15px;


`
export const BookImg = styled.img`
    height: 300px;
    width: 200px;
    background-color: crimson;
`;

export const Info = styled.p`

`;