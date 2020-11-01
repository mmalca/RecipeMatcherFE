import {css} from 'styled-components';

export const Recipes = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    > .no-match {
        display: flex;
        height: 100%;
        align-items: center;
        color: #9e9e9e;
        font-size: 32px;
    }
                
    > .back-to-welcome {
            width: 290px;
            padding: 10px 0px;
            font-size: 30px;
            cursor: pointer;
            border-radius: 10px;
            background-color: #442C2E;
            color: #FEEAE6;
        }
`;
