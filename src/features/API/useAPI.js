import axios from "axios";
import { useState } from "react";

export const useFetchData = () => {
    const [search, setSearch] = useState("cat");
    const [books, setBooks] = useState([]);


    const searchBook = async () => {
        try {
            //const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDG27f8yM5ScYwth9cESzM1JhPP4YiXJos`)
            const response = await axios(`https://gnikdroy.pythonanywhere.com/api/book/?${search}`);
            console.log(response.data.results)
            setBooks(response.data.results);
            
        } catch (error) {
            console.log(error);
        }
    }
    return { books, search, setSearch, searchBook };
};