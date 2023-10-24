import styled from "styled-components";
import Div from './div'


const H2 = styled.h2`
display:flex;
justify-content:center;
`;


const Main = styled.main`
display:flex;
justify-content:center;
flex-wrap:wrap;


`;


export default function main() {
    return (
        <>
            <H2>Produtos:</H2>
            <Main>
                <Div Imagem="https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_hamburguer17.jpg?quality=70&strip=info&w=960" />
                <Div Imagem="https://www.mundoboaforma.com.br/wp-content/uploads/2020/10/Hamburguer.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
                <Div Imagem="https://st.depositphotos.com/1561060/4869/i/450/depositphotos_48693695-stock-photo-tasty-hamburger-isolated-on-white.jpg" />
            </Main>
        </>
    )
}