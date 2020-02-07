import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import List from "antd/es/list"
import Avatar from "antd/es/avatar"
import TrackPlayerComponent from "../Player/TrackPlayer"
import { Link } from "react-router-dom"

const { Item } = List
const { Meta } = Item

const TrackMiniComponent = props => {
    const { track } = props


    const artist = track.artist;
    console.log(track )
    if( track === undefined ) {
        return <></>
    }

    // if(typeof artist === 'undefined'){
    //     return <></>
    // }

    return (
        <Item 
        >
            <Meta
                avatar={<Avatar shape={"square"} size={"large"} src={track.imageUrl} />}
                title={track.name}
                description={(<Link to={`/artist/${track.artist.key}`}>{track.artist.name}</Link>)}
            />
            <TrackPlayerComponent track={track}/>
        </Item>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
TrackMiniComponent.propTypes = {
    track: PropType.any
}
export default TrackMiniComponent