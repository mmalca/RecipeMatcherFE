import {css} from 'styled-components';

export const Recipe = css`
    flex-grow: 1;
    padding: 10px 30px;
    width: 100%;
    
    > h2 {
        border-radius: 5px;
        margin: 28px auto 35px auto;
        width: fit-content;
        padding: 10px;
        box-shadow: 0 2px 3px 2px black;
    }
    
    > img {
        max-height: 300px;
        max-width: 100%;
        border-radius: 5px;
        margin: 10px 0;
    }
    
    h4 {
        padding: 4px 10px;        
        box-shadow: 0px 3px 6px -4px #896c6f;
        width: fit-content;
        align-self: center;
        margin: 10px auto 20px auto;
      
    }
    
    .score {
        margin-bottom: 10px;
    }
    
    .list {
            text-align: start;
            padding: 0 10%;
    }
`;
