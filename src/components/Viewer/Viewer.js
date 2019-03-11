/*
This component shows the image and video.
We recieve three props.
    1. "mediaType" (data type), which receive the values
        as video or image.
    2. Based on the data type we received, we will use "url"
        to show video or image.
    3. "loading", which shows loading image
        when the data is delivered.
 */

import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, url, loading}) => {
    if (!url) return null;

    return (
        <div className={cx('viewer')}>
            {
                mediaType === 'image' ? (
                    <img onClick={()=> window.open(url)} src={url} alt="space" />
                ) : (
                    <iframe
                        title="space-video"
                        src={url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen></iframe>
                )
            }
        </div>
    )
};

export default Viewer;