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
        console.log('dobry console log', status)
    }, [status])

    const searchBook = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKey}&maxResults=40`);
            console.log(response.data.items)
            setBooks(response.data.items);
            setStatus({
                state: "success",
            });
            console.log(status)

        } catch (error) {
            console.log(error);
            setStatus({
                state: "error",
            })
        }
    }
    return { books, search, setSearch, searchBook, status };
};