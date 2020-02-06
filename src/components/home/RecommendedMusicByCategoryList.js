import React, {Fragment} from 'react';
import {Col, Row, Typography} from "antd";
import Slider from "./Slider";
import RecommendedMusicList from "./RecommendedMusicList";
import TrackPlayerComponent from "../Player/TrackPlayer";


const {Title} = Typography;

const RecommendedMusicByCategoryList = props => {
    return (
        <Fragment>
            <Title level={3}>Category</Title>
        </Fragment>
    );
};

export default RecommendedMusicByCategoryList;