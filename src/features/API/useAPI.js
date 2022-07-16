import axios from "axios";
import { useState, useEffect } from "react";
import { APIKey } from "./APIKey";

export const useAPI = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState({
        state: "initial",
    });

    useEffect(() => {
    }, [status])

    const searchBook = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}&key=${encodeURIComponent(APIKey)}&maxResults=40`);
            setBooks(response.data.items);
            setStatus({
                state: "success",
            });

        } catch (error) {
            console.log(error);
            setStatus({
                state: "error",
            })
        }
    }
    return { books, search, setSearch, searchBook, status };
};