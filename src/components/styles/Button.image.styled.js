import styled from "styled-components";

export const ButtonImageContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
`

export const ButtonStyled= styled.button`
    height: 50px;
    width: 100px;
    border-radius: 10px;
    color: ${(props) => props.color};
    font-family: 'Mochiy Pop One', sans-serif;
    font-size: 30px;
    position: relative;
    top -40px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: #0F3D3E;
    border: none;
    
    :hover {
        background-color: #E5CB9F;
        color: #0F3D3E;
        opacity: 0.9;
        transform: scale(0.90);
    }
`
export const ImageStyled = styled.img`
    content: url(${(props) => {
        return (`./images/${props.Image}.png`)
    }});
    width: 200px; 
    height: 200px;

`