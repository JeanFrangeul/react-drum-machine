import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <h1>The footer</h1>
        </Wrapper>
    )
}

export default Footer;


const Wrapper = styled.header`
height : 80px;
display: flex;
justify-content: center;
align-items: center;
border-top: solid 1px;
`;