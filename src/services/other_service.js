// replace with request from server later
export const getSliderThumbnailsService = async () => {
    const MOCK_SLIDERS = ["facebook", "youtube", "twitter"].map(key => ({
        key: key,
        link: `https://www.`+key+`.com`,
        imageUrl: `https://lh3.googleusercontent.com/proxy/xVPBCAI1_QDHfDxKkKEAM6EKbhZGyFzAw4IWXrddDvgSRUJrZOzYLG0Nh7e4lDHNpohjwBgeVa6ooR2n3BGfpMU9WXtSh7_J8Ic`
    }))
    return {
        data : MOCK_SLIDERS
    }
}