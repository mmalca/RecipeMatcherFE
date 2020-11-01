import classNames from 'classnames';
import Available from "./components/Available/Available";
import ChosenList from "./components/Chosen/Chosen";
import React, {memo, useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import * as helper from "./helper";
import {Loader} from '@common-components'

export const ListsWrapper = styled(({className, children}) => {
    return <div {...{className}}>
        {children}
    </div>
})`${styles.ListsWrapper}`;

export default styled(memo(({className, navigate}) => {
        const [initCompleted, setInitCompleted] = useState(false);
        const [available, setAvailable] = useState({});
        const [chosen, setChosen] = useState({});

        useEffect(() => {
            (async () => {
                try {
                    const availableIngredients = await helper.getAvailableIngredients();
                    setAvailable(availableIngredients || {});
                } catch (error) {
                    //    TODO: check if there is a need for error handling.
                } finally {
                    setInitCompleted(true)
                }
            })();
        }, [setInitCompleted, setAvailable]);

        const onAdd = useCallback(({id}) => {
            const {[id]: addedIngredient, ...rest} = available;
            setAvailable(rest);
            setChosen({...chosen, [id]: addedIngredient});
        }, [available, setAvailable, chosen, setChosen]);

        const onRemove = useCallback(({id}) => {
            const {[id]: removedIngredient, ...rest} = chosen;
            setChosen(rest);
            setAvailable({...available, [id]: removedIngredient});
        }, [available, setAvailable, chosen, setChosen]);

        const onGetRecipeClicked = useCallback(() => {
                const chosenIngredientsKeys = Object.keys(chosen);
                if (chosenIngredientsKeys.length === 0)
                    alert("צריך לבחור לפחות מצרך אחד.");
                else
                    navigate(`recipe/${chosenIngredientsKeys}`);

            }
            , [chosen]);

        return initCompleted ?
            <div {...{className: classNames(className, 'welcome')}}>
                <ListsWrapper>
                    <Available {...{data: available, onAdd}}/>
                    <ChosenList {...{data: chosen, onRemove}}/>
                </ListsWrapper>
                <div {...{onClick: onGetRecipeClicked, className: "get-a-recipe"}}>הצג מתכונים</div>
            </div> :
            <Loader/>;
    }
    )
)`${styles.Welcome}`;
