import styled from "styled-components";



const Box = styled.div`
    display:flex;
    justify-content:center;

    align-items:center;
    border:2px solid red;

    margin:10px;
    width:250px;
    height:350px;

    p{
       font-weight:bold; 
    }

    img{
        width:150px;
    }
`


export default function Div({ Imagem }) {
    return (
        <>

            <Box >
                <p>Mega X-Tudo</p>
                <figure>
                    <img src={Imagem} />
                    <figcaption>Legenda</figcaption>
                </figure>
            </Box>
        </>
    )
}