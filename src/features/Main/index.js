import { Content } from "./Content";
import { Search } from "./Search";
import { Wrapper } from "./styled";
import { useAPI } from "../API/useAPI";

const Section = () => {

    const { books, search, setSearch, searchBook, status } = useAPI();

    return (
        <Wrapper>
            <Search
                search={search}
                setSearch={setSearch}
                searchBook={searchBook}
            />
            <Content
                books={books}
                status={status}
            />
        </Wrapper>
    );
}
export default Section;