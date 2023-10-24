import styled from "styled-components";


const Footer = styled.footer`
    display:flex;
    justify-content:center;
    border:2px solid black;



    ul{
        display:flex;
    }

    li{
        margin:20px;
        list-style:none;
    }

`




export default function footer() {
    return (
        <Footer>
            <ul>
                <li>About</li>
                <li>Tel: 2233-4455</li>
                <li>Developed by Ronald</li>
            </ul>
        </Footer>
    )
}