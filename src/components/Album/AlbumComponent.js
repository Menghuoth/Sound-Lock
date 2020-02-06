import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Avatar from "antd/es/avatar"
import {Link} from "react-router-dom"
import TrackPlayerComponent from "../Player/TrackPlayer"
import Typography from "antd/es/typography"
import { formatCountdown } from "antd/lib/statistic/utils"

const { Meta } = Card
const { Title, Text } = Typography

const AlbumComponent = props => {
    const { album } = props

    if( album === undefined ) {
        return <></>
    }

    return (
        <Card
            style={{marginTop: '10px'}}
            cover={
                // Use for make avatar image to center
        <Link to="/album-detail/1">
            <img
                style={{ width: '100%' }}
                src={album.imageUrl}
                />
        </Link>
            }
        >
            <Meta
                title={<Text level={6} children={album.name} />}
                description={`${album.total_songs} songs`}
            />
        </Card>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
AlbumComponent.propTypes = {
    album: PropType.any
}
export default AlbumComponent