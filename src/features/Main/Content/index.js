import ErrorBox from "./ErrorBox";
import { BooksContainer } from "./Books";

export const Content = ({ books, status }) => {

    switch (status.state) {
        case "error":
            return <ErrorBox />;
        case "success":
            return <BooksContainer books={books} />;
        default: 
            return null;
    };
};