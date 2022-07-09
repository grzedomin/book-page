import { useEffect } from "react";
import { useFetchData } from "../../features/API/useAPI";
import { Wrapper, Logo, SearchBar, Button, Input } from "./styled";


const Header = () => {

    const { search, setSearch, searchBook } = useFetchData();

    useEffect(() => {
        searchBook();
    }, []);

    return (

        <Wrapper>
            <Logo>
                <Button>Home</Button>
                <Button>Favourites</Button>
            </Logo>
            <SearchBar>
                <Input
                    placeholder="Search book"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
                <Button onClick={() => searchBook()}>Search</Button>
            </SearchBar>
        </Wrapper>

    )
};

export default Header;