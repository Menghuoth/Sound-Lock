// replace with request from server later
export const getSliderThumbnailsService = async () => {
    const MOCK_SLIDERS = ["facebook", "youtube", "twitter"].map(key => ({
        key: key,
        link: `https://www.`+key+`.com`,
        imageUrl: `https://marketplace.canva.com/EADaocq0Nb4/1/0/800w/canva-yellow-retro-music-instruments-desktop-wallpaper-icKNh4QTrFU.jpg`
    }))
    return {
        data : MOCK_SLIDERS
    }
}