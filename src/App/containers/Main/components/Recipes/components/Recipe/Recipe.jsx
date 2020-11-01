import React, {memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(memo(({className, data = {}}) =>
    <div className={classNames(className, "recipe")}>
        <h2>{data.name}</h2>
        {data.score && <h4 className="score">ציון התאמה {data.score}</h4>}
        <img src={`/images/${data.pictureName}`}/>

        <h4>מצרכים</h4>
        <ul {...{className: classNames("list", 'ingredients')}}>
            {data.ingredients && data.ingredients.map((ingredient, index) =>
                <li key={ingredient.name}>{ingredient.amount} {ingredient.name}</li>
            )
            }
        </ul>

        <h4>הוראות הכנה</h4>
        <ol {...{className: classNames("list", 'directions')}}>
            {data.directions && data.directions.map((direction) =>
                <li key={direction}>{direction}</li>
            )}
        </ol>
    </div>
))`${styles.Recipe}`;
