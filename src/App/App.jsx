import React from "react";
import Main from './containers/Main/Main';
import * as styles from './styles';

import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.error(error)
    }

    render() {
        return this.props.children;
    }
}

export default () => <>
    <ErrorBoundary>
        <styles.GlobalStyle/>
        <Main/>
    </ErrorBoundary>
</>
;
