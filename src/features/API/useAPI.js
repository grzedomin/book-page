import axios from "axios";
import { useState } from "react";
import { APIKey } from "./APIKey";

export const useFetchData = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);


    const searchBook = async () => {
        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKey}&maxResults=40`);
            console.log(response.data.items)
            setBooks(response.data.items);

        } catch (error) {
            console.log(error);
        }
    }
    return { books, search, setSearch, searchBook };
};