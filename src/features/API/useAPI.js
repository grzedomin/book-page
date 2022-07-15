import axios from "axios";
import { useState } from "react";
import { APIKey } from "./APIKey";

export const useFetchData = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [fetchState, setFetchState] = useState({
        state: "initial",
    });

    const searchBook = async () => {
        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKey}&maxResults=40`);
            console.log(response.data.items)
            setBooks(response.data.items);
            setFetchState({
                state: "success",
            });
            console.log(fetchState)

        } catch (error) {
            console.log(error);
            setFetchState({
                state: "error",
            })
        }
    }
    return { books, search, setSearch, searchBook, fetchState };
};