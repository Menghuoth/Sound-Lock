import React, {useState, useEffect, Fragment} from 'react';

import withDefaultLayout from '../layouts/withDefaultLayout';
import Slider from '../components/home/Slider';

import { getSliderThumbnailsService } from '../services/other_service';
import { getRecommendationTracksService } from '../services/tracks_service';
import RecommendedMusicList from '../components/home/RecommendedMusicList';

import './styles.css';
import RecommendedMusicByCategoryList from "../components/home/RecommendedMusicByCategoryList";


const HomePage = props => {
    // States
    const [sliders, setSliders] = useState([]);
    const [recommendedMusic, setRecommendedMusic] = useState([]);

    // Methods
    const syncSliders = () => {
        return getSliderThumbnailsService()
            .then(response => {
                const slidersData = response.data
                setSliders(slidersData)
            })
    }

    const syncMusics = () => {
        return getRecommendationTracksService()
            .then(response => {
                setRecommendedMusic(response.data)
            })
    }

    useEffect(() => {
        syncSliders();
        syncMusics();
    }, []);

    return (
        <Fragment>
            <Slider sliders={sliders}/>
            <div className="content">
                <RecommendedMusicList musics={recommendedMusic}/>
            </div>
        </Fragment>
    );
};

export default withDefaultLayout(HomePage);