import React, {memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

const Index = styled.div`${styles.Index}`

const Indexes = memo(({currentIndex, recipesCount}) => {
    const indexes = [];
    for (let i = 0; i < recipesCount; i++)
        indexes.push(<Index key={i} isCurrent={currentIndex === i}/>)

    return <div className="indexes">{indexes}</div>;
})

export default styled(memo(({className, onNextClicked, onPreviousClicked, currentIndex, recipesCount}) =>
    <div className={classNames(className, "recipe-header")}>
        <div {...{className: 'arrow-wrapper', onClick: onPreviousClicked}}><span>{'<'}</span></div>
        <Indexes {...{currentIndex, recipesCount}}/>
        <div {...{className: "arrow-wrapper", onClick:onNextClicked }}><span>{'>'}</span></div>
    </div>
))`${styles.Header}`
