import React, { Fragment } from 'react';
import { Row, Col, Typography } from 'antd';

import TrackPlayerComponent from '../Player/TrackPlayer';

const { Title } = Typography;


const RecommendedMusicList = props => {
    return (
        <Fragment>
            <Title style={{marginBottom: '30px'}} level={3}>Recommended Playlist</Title>
            <Row gutter={30} type="flex" justify="start" >
                {
                    props.musics.map(music => (
                        <Col>
                            <img style={{borderRadius: '10px', height: '180px', width: '250px', objectFit: 'cover', marginBottom: '20px'}} src={music.imageUrl} />
                            <Title level={4} style={{marginBottom: '20px'}}>{music.name}</Title>
                            <TrackPlayerComponent track={music} />
                        </Col>

                    ))
                }

            </Row>
        </Fragment>
    );
};

export default RecommendedMusicList