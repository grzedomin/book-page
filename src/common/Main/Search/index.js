import { SearchBar, Input, Button } from "./styled";

export const Search = ({ search, setSearch, searchBook }) => (
    <SearchBar>
        <Input
            placeholder="Search book"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
        />
        <Button onClick={() => searchBook()}>Search</Button>
    </SearchBar>
);