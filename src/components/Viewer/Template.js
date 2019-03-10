/* grab props(viewer, and spaceNavigator)
as JSX form
and render it at the proper location
*/

import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';

// className helps to set css class by conditions
const cx = classNames.bind(styles);

const Template = ({ viewer, spaceNavigator}) => {
    return (
        <div className={cx('viewer-template')}>

        </div>
    )
};

export default Template;