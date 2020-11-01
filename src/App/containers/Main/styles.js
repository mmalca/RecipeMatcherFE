import {css} from 'styled-components'

export const Main = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    
    > .router {
        background-color: #FEDBD0;
        justify-content: center;
        padding: 30px 10% 0 10%;
        display: flex;
        overflow: auto;
        height: 100%;
        width: 100%;
        align-self: center;
    }
`;
