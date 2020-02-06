// replace with request from server later
export const getSliderThumbnailsService = async () => {
    const MOCK_SLIDERS = [
        {
            key: "facebook",
            link: `https://www.facebook.com`,
            imageUrl: `https://images.wallpaperscraft.com/image/sheet_music_music_drawing_82428_1920x1080.jpg`
        },
        {
            key: "youtube",
            link: `https://www.youtube.com`,
            imageUrl: `https://wallpapermemory.com/uploads/393/cool-music-wallpaper-full-hd-49972.jpg`
        },
        {
            key: "twitter",
            link: `https://www.twitter.com`,
            imageUrl: `https://images.wallpaperscraft.com/image/sheet_music_music_drawing_82428_1920x1080.jpg`
        }
    ]
    return {
        data : MOCK_SLIDERS
    }
}