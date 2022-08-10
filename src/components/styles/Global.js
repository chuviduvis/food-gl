import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({ theme })=> theme.colors.bg };
        
    }
    #root {
        display: flex;
        justify-content: center;
        
    }
    p { 
        font-family: 'Mochiy Pop One', sans-serif;
       
    }
`

export default GlobalStyles