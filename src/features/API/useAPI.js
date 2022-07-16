import axios from "axios";
import { useState, useEffect } from "react";
import { APIKey } from "./APIKey";

export const useAPI = () => {
    const [bookName, setBookName] = useState("");
    const [books, setBooks] = useState([]);
    const [status, setStatus] = useState({
        state: "initial",
    });

    useEffect(() => {
    }, [status])

    const searchBook = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookName)}&key=${encodeURIComponent(APIKey)}&maxResults=40`);
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
    return { books, bookName, setBookName, searchBook, status };
};