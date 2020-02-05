import { randomNumber } from "../utils/test"

export const getRecommendationArtistsService = async ( ) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `Artist #${index}`,
        imageUrl: `https://marketplace.canva.com/EADaocq0Nb4/1/0/800w/canva-yellow-retro-music-instruments-desktop-wallpaper-icKNh4QTrFU.jpg`
    }))
    return {
        data : MOCK_DATA
    }
}

export const getPopularArtistsService = async ( ) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `Artist #${index}`,
        imageUrl: `https://rukminim1.flixcart.com/image/832/832/j1jlksw0/poster/d/c/x/medium-poster1964-music-record-vinyl-colorful-vintage-retro-on-original-imaet2mufc5vxzhh.jpeg?q=70`,
        total_songs: randomNumber(1000)
    }))
    return {
        data : MOCK_DATA
    }
}

export const getArtistByIDService = async (id) => {
    const MOCK_DATA = {
        name: `Artist #${id}`,
        imageUrl: `https://marketplace.canva.com/EADaocq0Nb4/1/0/800w/canva-yellow-retro-music-instruments-desktop-wallpaper-icKNh4QTrFU.jpg`
    }
    return {
        data : MOCK_DATA
    }
}
