
import { Wrapper, Tile, BookImg, Info, Title, Author, Category } from "./styled"

const BooksList = ({ books }) => {

    //{book.volumeInfo.categories ? book.volumeInfo.categories : "No category"}
    //src={book.volumeInfo.imageLinks.thumbnail} 
    return (
        <Wrapper>
            {books.map((book) => {

                let photo = book.resources.find(resource => {
                    if (resource.type === "image/jpeg" && resource.uri.includes("medium")) {
                        console.log(resource.uri)
                        return resource.uri
                        
                    } return null;
                })

                console.log(photo);
                return (
                    <Tile key={book.id}>
                        <BookImg src={photo} alt=""></BookImg>
                        <Info>
                            <Title>{book.title}</Title>
                            <Author>{book.agents.person}</Author>
                            <Category></Category>
                        </Info>
                    </Tile>
                )
            }
            )}
        </Wrapper>
    );
};

export default BooksList;
