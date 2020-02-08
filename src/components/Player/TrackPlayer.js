import React from 'react';
import PropType from "prop-types"
import { Divider, Row } from 'antd';
import Modal from "antd/es/modal"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";
import playIcon from '../../assets/icons/play-button.png';
import downloadIcon from '../../assets/icons/download.png';


const TrackPlayerComponent = (props) => {
    const { track } = props

    // track link is mp3 url
    const trackLink = track.trackUrl

    // when play click
    const onPlayClick = () => {
        // this function show modal 
        // detail go to see in ant design
        Modal.info({
            centered:true,
            content: (
                // ## Html5 Audio Tag
                // width : make it full of modal
                // preload : dont start auto download when play
                // autoPlay : auto play song when open modal 
                // controls: make audio controls show in UI 
                <audio style={{width:"100%"}} preload="none" autoPlay controls>
                    <source src={trackLink} />
                </audio>
            ),
            destroyOnClose: true,
            icon: null,
            title: "Song : " + track.name,
            okText: "Close"
        })
    }

    const onDownloadClick = () => {
        // create <a href={mp3 link} /> and simulate click it to download
        const element = document.createElement("a")
        element.href=trackLink
        element.download=track.name
        element.target="_blank"
        element.click()
    }

    return (
        <Row type="flex" justify="start">
            <img src={playIcon} alt="play" onClick={onPlayClick} style={{width: '36px', height: '36px', cursor: 'pointer'}}/>
            <Divider type="vertical"/>
            <img src={downloadIcon} alt="download" onClick={onDownloadClick} style={{width: '36px', height: '36px', cursor: 'pointer'}}/>
        </Row>
    )
}

TrackPlayerComponent.propTypes = {
    track: PropType.object
}

TrackPlayerComponent.defaultProps = {
    track: {}
}

export default TrackPlayerComponent