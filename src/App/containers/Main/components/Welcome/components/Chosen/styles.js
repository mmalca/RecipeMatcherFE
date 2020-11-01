import {css} from 'styled-components';

export const Chosen = css`
    flex: 1 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > h4 {
        margin: 0px 10px;
        padding: 4px 10px;        
        box-shadow: 0px 3px 6px -4px #896c6f;
        width: fit-content;
        align-self: center;
    }
    
    > .chosen-list {
        padding: 10px;
        flex-wrap: wrap;

        > .empty {
            width: 100%;
            padding: 20px;
            font-size: 20px;
            color: #9e9e9e;
        }
        
        > .chosen-item {
        
              box-shadow: 0px 0px 2px 2px #59405c;
              background-color: #b08488;

            &:hover {
              background-color: transparent;
            }
        }
    }
`;
