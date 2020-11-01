import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import Welcome from './components/Welcome/Welcome';

import Header from './components/Header/Header';
import Recipe from './components/Recipes/Recipes';
import {Router} from '@reach/router';

export default styled(({className}) =>
    <div {...{className: classNames(className, 'main')}}>
        <Header/>
        <Router className="router">
            <Welcome {...{path: '/'}} />
            <Recipe {...{path: '/recipe/:ingredients'}}/>
        </Router>
    </div>
)`${styles.Main}`;
