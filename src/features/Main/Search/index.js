import { StyledForm, SearchBar, Input, Button } from "./styled";

export const Search = ({ search, setSearch, searchBook }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        searchBook();
    }
    return (
        <SearchBar>
            <StyledForm
                onSubmit={onFormSubmit}
            >
                <Input
                    placeholder="Search book"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
                <Button>Search</Button>
            </StyledForm>
        </SearchBar>
    );
}