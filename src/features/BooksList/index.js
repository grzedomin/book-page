import axios from "axios";
import { useEffect } from "react";
import { useFetchData } from "../API/useAPI";
import { Wrapper, Tile, BookImg, Info } from "./styled"
import { searchBook } from "../API/useAPI";

const BooksList = () => {

    const { books } = useFetchData();

    return (
        <Wrapper>
            {books.map((book) => (
                <Tile>
                    <BookImg>TEST</BookImg>
                    <Info>{book.volumeInfo.title}</Info>
                </Tile>
            )
            )}
        </Wrapper>
    );
};

export default BooksList;