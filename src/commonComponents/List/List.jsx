import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export const List = styled(({className, children}) =>
    <div {...{className}}>
        {children}
    </div>
)`${styles.List}`;
