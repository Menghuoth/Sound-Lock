import React, {useState, useEffect} from "react";
import Axios from 'axios';
import ClientLayout from "../../layouts/client_layout"

import {getSliderThumbnailsService} from "../../services/other_service"
import {Link} from "react-router-dom"
import SlidersAreaComponent from "./SlidersArea"
import RecommendationAreaComponent from "./RecommendationArea"
import SizedBox from "../../components/SizedBox/SizedBox"
import {getRecommendationTracksService, getRecentlyAddedTracksService} from "../../services/tracks_service"
import CategoryAreaComponent from "./CategoryArea"

import {getTracksByCategory} from "../../services/tracks_service"
import {getAvailableCategoriesService} from "../../services/category_service"
import RecentlyAddedArea from "./RecentlyAddedArea"
import {getPopularArtistsService} from "../../services/artist_service"
import ArtisanPopularAreaComponent from "./ArtisanPopularArea"

const HomePage = props => {
    const [sliders, setSliders] = useState([])

    const [recommendationTracks, setRecommendationTracks] = useState([])

    const [availableCategories, setAvailableCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [categoryTracks, setCategoryTracks] = useState([])

    // popularArtist
    const [availableArtists, setAvailableArtists] = useState([
        {
            id: 1,
            label: "Khmer"
        },{
            id: 2,
            label: "Chinese"
        },{
            id: 3,
            label: "English"
        }
    ])
    const [selectedArtist, setSelectedArtist] = useState("")
    // const [categoryTracks, setCategoryTracks] = useState([])


    const [recentlyAddedTracks, setRecentlyAddedTracks] = useState([])

    const [popularArtists, setPopularArtists] = useState([])

    ///////////////////////////////////////
    // What Start by sync is mean 
    // go fetch data from server
    // and after fetch finish , 
    // set it to state
    /////////////////////////////////////
    const syncSliders = () => {
        return Axios.get("http://localhost:5000/sliders")
            .then(response => {
                const slidersData = response.data
                setSliders(slidersData)
            })
    }

    const syncPopularArtists = (key) => {
        Axios.get(`http://localhost:5000/artists?language=${key}&_limit=6`)
            .then(response => {
                const artists = response.data
                setPopularArtists(artists)
            })
    }

    const syncRecommendation = () => {
        return Axios.get('http://localhost:5000/recommendedsongs?_expand=song&_limit=4')
            .then(response => {
                const tracks = response.data
                setRecommendationTracks(tracks)
            })
    }

    const syncCategoryTracks = (key) => {
        Axios.get(`http://localhost:5000/songs?categoryId=${key}&_limit=4`)
            .then(response => {
                console.log(response.data)
                const tracks = response.data
                setCategoryTracks(tracks)
            })
    }

    const syncCategories = () => {
        Axios.get('http://localhost:5000/categories')
            .then(response => {
                const categories = response.data
                setAvailableCategories(categories)
                setSelectedCategory(categories[0] && categories[0].id)
            })
    }

    const syncRecentlyTracks = () => {
            Axios.get('http://localhost:5000/songs?_sort=releasedDate&_order=asc&_limit=12&_expand=artist&_expand=category')
            .then(response => {
                const tracks = response.data
                setRecentlyAddedTracks(tracks)
            })
    }

    // use Effect with second parameter empty array
    // is equal to ComponentDidMount in Class Component
    // so when home page mounted
    // go sync data slider... from server
    useEffect(() => {
        syncSliders()
        syncRecommendation()
        syncCategories()
        syncRecentlyTracks()
        setSelectedArtist("Khmer");
        setSelectedCategory("1");


    }, [])


    // useEffect when second parameter is array with value 
    // it mean i watch when inputs value changed
    // below example is when selectedCategory Changed
    // i run syncCategoryTrack()
    useEffect(() => {
        if (!selectedCategory) {
            return
        }
        syncCategoryTracks(selectedCategory)
    }, [selectedCategory])

    useEffect(() => {
        if (!selectedArtist) {
            return
        }
        syncPopularArtists(selectedArtist)
    }, [selectedArtist])

    const onSliderClick = (slider) => {
        alert("You are Click : " + slider.link)
    }

    const onCategoryChanged = (key) => {
        setSelectedCategory(key)
    }

    const onArtistChanged = (key) => {
        setSelectedArtist(key)
    }

    return (
        <ClientLayout pageKey={"home"}>

            <SlidersAreaComponent
                sliders={sliders}
                onSliderClick={onSliderClick}
            />
            <div style={{padding: '0 50px'}}>
                <SizedBox height="50px"/>

                <RecommendationAreaComponent tracks={recommendationTracks}/>

                <SizedBox height="50px"/>

                <CategoryAreaComponent
                    availableCategories={availableCategories}
                    onCategoryChanged={onCategoryChanged}
                    selectedCategory={selectedCategory}
                    tracks={categoryTracks}
                />

                <SizedBox height="50px"/>

                <RecentlyAddedArea
                    tracks={recentlyAddedTracks}
                />

                <SizedBox height="50px"/>

                <ArtisanPopularAreaComponent
                    availableArtists={availableArtists}
                    onArtistChanged={onArtistChanged}
                    selectedArtist={selectedArtist}
                    artists={popularArtists}
                />

            </div>

            <SizedBox height="50px"/>

        </ClientLayout>
    )
}

export default HomePage