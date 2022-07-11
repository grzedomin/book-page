import { Wrapper, Title, Logo, Button } from "./styled";

const Header = () => {
    return (
        <Wrapper>
            <Title>Book Page</Title>
            <Logo>
                <Button>Home</Button>
                <Button>Favourites</Button>
            </Logo>
        </Wrapper>
    )
};

export default Header;