import React from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from "antd/es/grid"
import Card from "antd/es/card"
import Typography from "antd/es/typography"
import Divider from "antd/es/divider"
import styles from "./styles.module.css"
import TrackMiniComponent from "../../components/Track/TrackMiniComponent"
import ArtistComponent from '../../components/Artist/ArtistComponent';
import SizedBox from "../../components/SizedBox/SizedBox";
import Menu from "antd/es/menu";
import CategoryAreaComponent from "./CategoryArea";


const { Title } = Typography

function ArtisanPopularAreaComponent (props){
    const { artists, availableArtists, selectedCategory, onArtistChanged } = props
    return (
        <Card>
            {/*<div className={"styles.ArtistCardHeader"}>*/}
            {/*    <Title level={4}> Artist</Title>*/}
            {/*</div>*/}

            <div className={styles.categoryCardHeader}>
                <Title level={4}>Artist </Title>
                <SizedBox width={"10px"} />
                <Menu
                    onClick={param => onArtistChanged(param.key)}
                    // selectedKeys={selectedCategory}
                    mode={"horizontal"}>

                    {availableArtists.map(artist => {
                        return (
                            <Menu.Item key={artist.id} children={artist.label} />
                        )
                    })}
                </Menu>
            </div>

            <Divider />

            <Row gutter={24} className={styles.popularArtistsRow}>

                {artists.map(artist => {
                    return (
                        <Col sm={12} md={6} style={{width:"fit-content"}}>
                            <ArtistComponent
                                artist={artist}
                            />
                        </Col>
                    )
                })}

            </Row>

        </Card>
    )
}

// ArtisanPopularAreaComponent.propTypes = {
//     artists: PropTypes.array
// }
//
// ArtisanPopularAreaComponent.defaultProps = {
//     artists:[]
// }

CategoryAreaComponent.propTypes = {
    availableArtists: PropTypes.array,
    selectedArtist: PropTypes.any,
    onArtistChanged: PropTypes.func,
    artists: PropTypes.array
}

CategoryAreaComponent.defaultProps = {
    availableArtists: [],
    artists: []
}

export default ArtisanPopularAreaComponent