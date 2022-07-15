import { Content } from "./Content";
import { Search } from "./Search";
import { Wrapper } from "./styled";
import { useFetchData } from "../API/useAPI";

const Section = () => {

    const { books, search, setSearch, searchBook, fetchState } = useFetchData();

    return (
        <Wrapper>
            <Search
                search={search}
                setSearch={setSearch}
                searchBook={searchBook}
            />
            <Content
                books={books}
                fetchState={fetchState}
            />
        </Wrapper>
    );
}
export default Section;