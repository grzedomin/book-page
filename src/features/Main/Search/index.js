import { StyledForm, SearchBar, Input, Button } from "./styled";

export const Search = ({ bookName, setBookName, searchBook }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (bookName.trim() === "") {
            return;
        }
        searchBook();
    };

    return (
        <SearchBar>
            <StyledForm
                onSubmit={onFormSubmit}
            >
                <Input
                    placeholder="Search book"
                    value={bookName}
                    onChange={({ target }) => setBookName(target.value)}
                />
                <Button>Search</Button>
            </StyledForm>
        </SearchBar>
    );
};