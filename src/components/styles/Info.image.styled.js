import styled from "styled-components";

export const InfoImageContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
   
 
`


export const InfoStyled= styled.div`
   

   display: flex;
   flex-direction: column;
   align-items: start;
   margin-left: 20px;
   
    p {
        font-weight: 600;
        font-family: 'Mochiy Pop One', sans-serif;
        color: ${(props) => {
            const color = props.GL >= 10? 'red' : 'green'
            return color
        }};
        margin: none;
    }
`
export const ButtonContainer = styled.div`
    display: flex

`
export const ButtonStyled= styled.button`
    display: flex;
    width: ${(props) =>{
        return props.width
    }};
    height: ${(props) =>{
        return props.height
    }};
    align-items: center;
    margin-right: 5px;
    background-color: yellow;
    font-size: ${(props) => {
        return props.fontsize
    }};
    justify-content: center;
    :hover {
        opacity: 0.9;
        transform: scale(0.90);
    }
`  