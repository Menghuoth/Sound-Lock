import React, {useEffect, useState} from "react";
import {Row, Col} from 'antd';

import AlbumImage from "../components/album-details/AlbumImage";
import AlbumInfo from "../components/album-details/AlbumInfo";
import AlbumDetailList from "../components/album-details/AlbumDetailList";
import ClientLayout from "../layouts/client_layout";


const AlbumDetailPage = props => {
    const [album, setAlbum] = useState({});


    return (
        <ClientLayout>
            <Row style={{background: '#fff', paddingTop: '50px'}}>
                <Col xs={24} md={8}>
                    <AlbumImage/>
                </Col>
                <Col xs={24} md={14}>
                    <AlbumInfo/>
                    <AlbumDetailList/>
                </Col>
            </Row>
        </ClientLayout>
    );
};

export default AlbumDetailPage;