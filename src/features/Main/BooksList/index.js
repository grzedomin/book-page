
import { Wrapper, Tile, BookImg, Info, Title, Author, Category } from "./styled"

const BooksList = ({ books }) => {
    return (
        <Wrapper>
            {books.map((book) => {
                
                return (
                    <Tile key={book.id}>
                        <BookImg src={book.volumeInfo.imageLinks.thumbnail}></BookImg>
                        <Info>
                            <Title>{book.volumeInfo.title}</Title>
                            <Author>{book.authors}</Author>
                            <Category>{book.volumeInfo.categories ? book.volumeInfo.categories : "No category"}</Category>
                        </Info>
                    </Tile>
                )
            }
            )}
        </Wrapper>
    );
};

export default BooksList;
