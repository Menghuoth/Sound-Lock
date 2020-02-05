import HomePage from '../pages/HomePage';
import AboutPage from '../pages/about';
import Error404Page from '../pages/errors/Error404';
import ArtistDetailPage from '../pages/artist_detail';
import AlbumPage from "../pages/album"
import OldAlbumDetailPage from "../pages/album/album-detail"
import AlbumDetailPage from '../pages/AlbumDetailPage';

import OldHome from '../pages/home';

export default [
    {
        url: '/',
        component: HomePage
    },
    {
        url: '/old-home',
        component: OldHome
    },
    {
        url: '/about',
        component: AboutPage
    },
    {
        url: '/artist/:id',
        component: ArtistDetailPage
    },
    {
        url: '/albums',
        component: AlbumPage
    },
    {
        url: '/album-detail/:id',
        component: AlbumDetailPage
    },
    {
        url: '/old-album-detail/:id',
        component: OldAlbumDetailPage
    },



    /* Fallback Routes: Please keep at the bottom */
    {
        url: '**',
        component: Error404Page
    }
];