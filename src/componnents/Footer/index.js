import styled from "styled-components";

const Footer = ({isLight, handleToggleTheme}) => {
    return (
        <Wrapper >
            <button onClick={handleToggleTheme}>
                Switch to {isLight ? "Dark" : "Light"} theme
            </button>
        </Wrapper>
    )
}

export default Footer;


const Wrapper = styled.footer`
height : 80px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props=>props.theme.mainColor};
`;