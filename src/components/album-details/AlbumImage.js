import React, {Fragment} from "react";
import {Row,Col} from 'antd';


const AlbumImage = props => {
    return (
        <Row type='flex' justify='center'>
            <img style={{width: '320px', height: '320px', borderRadius: '10px'}} src="https://images.backstreetmerch.com/images/products/bands/misc/toomt/bsi_toomt07_3.jpg"/>
        </Row>
    );
};

export default AlbumImage;