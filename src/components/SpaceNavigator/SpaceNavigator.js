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
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




const cx = classNames.bind(styles);

const SpaceNavigator = ({onPrev, onNext}) => {
    return (
        <div className={cx('space-navigator')}>
            <div className={cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    <FaArrowLeft />
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
};

export default SpaceNavigator;