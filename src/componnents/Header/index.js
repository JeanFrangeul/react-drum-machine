import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';


const Header = ({isLight, handleToggleTheme}) => {
    const location = useLocation();
    return (
        <Wrapper>
            <h1>Our Super Music APP</h1>

            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>About</MenuEl>
                </Link>
            </nav>
            <button onClick={handleToggleTheme}>
                Switch to {isLight ? "Dark" : "Light"} theme
            </button>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.footer`
    height : 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    border-bottom: solid 1px;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & a:first-child {
        margin-right: 12px;
    }
`;

const MenuEl = styled.p`
    padding-bottom: 2px;
    border-bottom: solid 2px ${props=>props.isCurrentPage ? "" : "transparent"};
    &:hover {
        border-bottom: solid 2px;
    }
`