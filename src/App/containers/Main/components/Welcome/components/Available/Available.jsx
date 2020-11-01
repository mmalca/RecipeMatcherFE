import {Ingredient, List} from '@common-components';
import React, {useState, useCallback, memo, useMemo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';

const ListItem = memo(({_id: id, name, onAdd}) => {

    const onClick = useCallback(() =>
            onAdd({id})
        , [onAdd]);

    return <Ingredient {...{onClick, className: "available-item"}}>{name}</Ingredient>
})

export default styled(({className, data, onAdd}) => {
        const [searchText, setSearchText] = useState('');

        const onChange = useCallback(e =>
                setSearchText(e.target.value)
            , [setSearchText]);

        const filteredDataKeys = useMemo(() => Object.keys(data).filter((id) =>
            data[id].name.includes(searchText)
        ), [searchText, data]);

        return <div {...{className}}>
            <div className='header'>
                <span/>
                <h4>בחר מצרכים</h4>
                <input {...{value: searchText, onChange, placeholder: "הקלד כאן..."}}/>

            </div>

            <List className="available-list">
                {filteredDataKeys.map(id => <ListItem {...{key: id, ...data[id], onAdd}}/>)}
            </List>
        </div>
    }
)`${styles.Available}`;
