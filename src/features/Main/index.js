import { Content } from "./Content";
import { Search } from "./Search";
import { Wrapper } from "./styled";
import { useAPI } from "../API/useAPI";

const Section = () => {

    const { books, bookName, setBookName, searchBook, status } = useAPI();

    return (
        <Wrapper>
            <Search
                bookName={bookName}
                setBookName={setBookName}
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