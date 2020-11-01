import {css} from 'styled-components';

export const Header = css`
    display: flex;
    justify-content: center;
    > .arrow-wrapper {
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 40px;
        box-shadow: 0px 0px 2px 2px #bababa;
        margin: 5px 10px;
        background-color: #442C2E;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        
        > span {
            color: #FEEAE6;
            font-size: 30px;
        }    
    }
    
    
    > .indexes {
      display: flex;
      align-self: flex-end;
    
    }

`;

export const Index = css`
    margin: 5px;
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
    box-shadow: 0px 0px 1px 1px #bababa;

    background-color: ${({isCurrent}) => isCurrent && 'forestgreen'};
`;
