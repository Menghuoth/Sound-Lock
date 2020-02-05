import React from 'react';
import { Carousel } from 'antd';
import './styles.css'


const Slider = props => {

    return (
        
        <Carousel autoplay>
            {
                props.sliders.map(slider => (
                    <img src={slider.imageUrl}/>
                ))
            }
        </Carousel>
    );
};

export default Slider;