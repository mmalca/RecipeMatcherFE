import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,body {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    
  
    body {
        background-color: #FFF;
        font-weight: 500;
        direction: rtl;
    } 
    
    #app {
        height: 100%;
        width: 100%;
        overflow: hidden;
        
        > * {
            height: 100%;
            width: 100%;
        }
    }
    
`;
