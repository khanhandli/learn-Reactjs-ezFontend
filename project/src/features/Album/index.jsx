import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/2/7/8/42786a12c3777e38d045d97f2f651981.jpg'
        },
        {
            id: 2,
            name: 'Top 100 Nhạc Rap Việt Nam Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/1/8/5/41850afe72ca1683c0b5ce15dc2b6cdb.jpg'
        },
        {
            id: 3,
            name: 'Top 100 Nhạc Rock Việt Nam Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/9/6/1/5961b5c7992dc0414da78cdd55217b0e.jpg'
        },
    ]


    return (
        <div>
            <h2>List nhac Viet</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;