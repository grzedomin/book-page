
import { Wrapper, Tile, BookImg, Info } from "./styled"

const BooksList = ({ books }) => {

    return (
        <Wrapper>
            {books.map((book) => (
                <Tile key={book.id}>
                    <BookImg src={book.volumeInfo.imageLinks.thumbnail}></BookImg>
                    <Info>
                        {book.volumeInfo.title} <br />
                        {book.volumeInfo.authors}<br />
                        {book.volumeInfo.categories}<br />
                    </Info>
                </Tile>
            )
            )}
        </Wrapper>
    );
};

export default BooksList;
