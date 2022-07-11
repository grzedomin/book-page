import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

export const Tile = styled.div`
    max-width: 240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 20px 15px;
    box-shadow: rgb(186 199 213 / 50%) 0px 4px 12px;
`

export const Info = styled.span`
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const BookImg = styled.img`
    max-width: 70%;
    width: 100%;
    padding: 10px;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.03em;
`

export const Author = styled.h3`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.03em;
`

export const Category = styled.div`
    font-size: 12px;
    margin: 0;
    border: none;
    border-radius: 3px;
    padding: 8px;
    background-color: #4A685C;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-align: center;
`