import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
`;

const Header = styled.header`
    border:2px black solid;
`;

const NavBar = styled.nav`
display:flex;
justify-content:center;
background-color:tomato;
    
ul{
    display:flex;
}

li{
    font-size:24px;
    padding:25px;
    list-style:none;
}

li:hover{
    cursor:pointer;
    transform:scale(110%);
    transition:1s;
    color:White;
}

`;


export default function header() {
    return (
        <>
            <GlobalStyle />
            <Header>
                <NavBar>
                    <ul>
                        <li>inicio</li>
                        <li>items</li>
                        <li>contato</li>
                    </ul>
                </NavBar>
            </Header>
        </>
    )
}