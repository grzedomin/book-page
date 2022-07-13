import BooksList from "./BooksList";
import { Search } from "./Search";
import { Wrapper } from "./styled";
import { useFetchData } from "../API/useAPI";
import { useEffect } from "react";

const Section = () => {

    const { books, search, setSearch, searchBook } = useFetchData();

    useEffect(() => {
        searchBook();
    }, []);

    return (
        <Wrapper>

            <Search
                search={search}
                setSearch={setSearch}
                searchBook={searchBook}
            />
            <BooksList books={books} />
        </Wrapper>
    );
}
export default Section;