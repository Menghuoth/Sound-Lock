import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Avatar from "antd/es/avatar"
import { Typography } from 'antd';
import TrackPlayerComponent from "../Player/TrackPlayer"

// const { Meta } = Card
const { Title } = Typography;

const           TrackComponent = props => {
    const { track } = props

    if( track === undefined ) {
        return <></>
    }

    return (
        <Card
        style={{display:"flex",alignItems:"center", flexDirection:"column",borderRadius: '10px'}}
         cover={<img src={track.imageUrl}/>}>
            <Title level={4}>{track.name}</Title>
            <TrackPlayerComponent track={track} />
        </Card>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
TrackComponent.propTypes = {
    track: PropType.any
}
export default TrackComponent