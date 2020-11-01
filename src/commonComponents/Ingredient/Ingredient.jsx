import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export const Ingredient = styled(({className, children, onClick}) =>
    <div {...{className: classNames(className, "ingredient"), onClick}}>
        <span>{children}</span>
    </div>
)`${styles.Ingredient}`;
