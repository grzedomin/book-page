
import { Wrapper, Tile, BookImg, Info, Title, Author, Category } from "./styled"

const BooksList = ({ books }) => {
    return (
        <Wrapper>
            {books.map((book) => {

                const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                const title = book.volumeInfo.title;
                const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(<br />) : "author undefined";
                const categories = book.volumeInfo.categories ? book.volumeInfo.categories : "No category";

                return (
                    <Tile key={book.id}>
                        <BookImg src={thumbnail} alt=""></BookImg>
                        <Info>
                            <Title>{title}</Title>
                            <Author>{authors}</Author>
                            <Category>{categories}</Category>
                        </Info>
                    </Tile>
                )
            }
            )}
        </Wrapper>
    );
};

export default BooksList;
