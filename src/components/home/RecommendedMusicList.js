import React, { Fragment } from 'react';
import { Card, Row, Col, Typography } from 'antd';

import TrackPlayerComponent from '../Player/TrackPlayer';

const { Title } = Typography;
const { Meta } = Card;


const RecommendedMusicList = props => {
    return (
        <Fragment>
            <Title level={2}>Popular Musics</Title>
            <Row gutter={30} type="flex" justify="start" >
                {
                    props.musics.map(music => (
                        <Col>
                            <img style={{borderRadius: '10px', height: '180px', width: '250px', objectFit: 'cover'}} src={music.imageUrl} />
                            <Title level={4}>{music.name}</Title>
                            <TrackPlayerComponent track={music} />
                        </Col>

                    ))
                }

            </Row>
        </Fragment>
    );
};

export default RecommendedMusicList