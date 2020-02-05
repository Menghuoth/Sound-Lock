import { randomNumber } from "../utils/test"

const ADDITION_TRACK_INFO = (index) =>  {
    const randomArtistKey = randomNumber(100,1)
    return {
        artist: {
            key: randomArtistKey,
            name: `Artist #${randomArtistKey}`
        }
    }
}
// replace with request from server later
export const getTracksByCategory = async (key) =>  {
    const MOCK_DATA = Array(10).fill("").map((uselessString, index) => ({
        key: index,
        name: `${key} Song #${index}`,
        imageUrl: `https://steamuserimages-a.akamaihd.net/ugc/100603690267095854/9D7B84FE1FCE7E15EA2A1B18210B13C1C12242F1/`,
        trackUrl:`/assets/test.mp3`,
        ...ADDITION_TRACK_INFO(index)
    }))
    return {
        data : MOCK_DATA
    }
}

// replace with request from server later
export const getRecommendationTracksService = async (key) =>  {
    const MOCK_DATA = Array(5).fill("").map((uselessString, index) => ({
        key: index,
        name: `Recommendation Song #${index}`,
        imageUrl: `https://zirkonyumimplant.info/wp-content/uploads/2018/10/music-notes-wallpaper-music-notes-wallpaper-music-notes-wallpapers-free-3-music-notes-wallpaper-music-notes-wallpaper-hd.jpg`,
        trackUrl:`/assets/test.mp3`,
        ...ADDITION_TRACK_INFO(index)
    }))
    return {
        data : MOCK_DATA
    }
}

export const getRecentlyAddedTracksService = async () => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `Recently Song #${index}`,
        imageUrl: `https://images.wallpaperscraft.com/image/sheet_music_music_drawing_82428_1920x1080.jpg`,
        artist: `Artist #${index}`,
        trackUrl:`/assets/test.mp3`,
        ...ADDITION_TRACK_INFO(index)

    }))
    return {
        data : MOCK_DATA
    }
}

export const getTracksByArtistService = async (key) =>{
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `${key}'s Song #${index}`,
        imageUrl: `https://marketplace.canva.com/EADaocq0Nb4/1/0/800w/canva-yellow-retro-music-instruments-desktop-wallpaper-icKNh4QTrFU.jpg`,
        artist: `Artist #${index}`,
        trackUrl:`/assets/test.mp3`,
        ...ADDITION_TRACK_INFO(index)
    }))
    return {
        data : MOCK_DATA
    }
}
