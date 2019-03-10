/*
includes buttons swapping previous and next
props: functions, onPrev and onNext,
        which connect with each btns.

SideNote: not name this component as Navigator
        cuz the browser already has the value of
        navigator
*/

import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SpaceNavigator = ({onPev, onNext}) => {
    return (
        <div className={cx('space-navigator')}>

        </div>
    )
};

export default SpaceNavigator;