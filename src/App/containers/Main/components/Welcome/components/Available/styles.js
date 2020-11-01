import {css} from 'styled-components';

export const Available = css`
    flex: 2 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > .header {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        
        > span {
            width: 191px;
        }
        
        > input {
            float: left;
            padding: 5px;
            border-radius: 3px;
            background-color: inherit;
            
            ::placeholder {
                color: #9e9e9e;
                opacity: 1; 
            }
            
            :-ms-input-placeholder { 
                color: #9e9e9e;
            }
            
            ::-ms-input-placeholder { 
                color: #9e9e9e;
            }
        }
        
        > h4 {
            margin: 0px 10px;
            padding: 4px 10px;        
            box-shadow: 0px 3px 6px -4px #896c6f;
            width: fit-content;
        }
    }
    
    > .available-list {
        padding: 10px;
        flex-wrap: wrap;
        
        > .available-item {
            
            box-shadow: 0px 0px 2px 2px #59405c;
            
            &:hover {
                background-color: #b08488;  
            }
        }
    }
    
`;
