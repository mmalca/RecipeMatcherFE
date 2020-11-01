import React, { useCallback, memo, useMemo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import {List} from "@common-components/List/List";
import {Ingredient} from "@common-components/Ingredient/Ingredient";


const ListItem = memo(({_id: id, name, onRemove}) => {
    const onClick = useCallback(() =>
            onRemove({id})
        , [onRemove]);
    return <Ingredient {...{onClick, className: "chosen-item"}}>{name}</Ingredient>
})


export default styled(memo(({className, data, onRemove}) => {
    const content = useMemo(()=>{
        const dataKeys = Object.keys(data);
        if(dataKeys.length === 0) return <div className='empty'>עדיין לא בחרת שום מרכיב</div>;
        return dataKeys.map((id) =>
                    <ListItem {...{key: id, ...data[id], onRemove}}/>);
    },[data, onRemove]);

        return <div {...{className}}>
            <h4>המצרכים שנבחרו</h4>
            <List className="chosen-list">
                {content}
            </List>
        </div>
    }
))`${styles.Chosen}`;
