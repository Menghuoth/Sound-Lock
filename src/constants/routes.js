import HomePage from '../pages/HomePage';
import Error404Page from '../pages/errors/Error404';
import ArtistDetailPage from '../pages/artist_detail';
import AlbumPage from "../pages/album"
import OldAlbumDetailPage from "../pages/album/album-detail"
import AlbumDetailPage from '../pages/AlbumDetailPage';
import LoginPage from "../pages/LoginPage";

import OldHome from '../pages/home';

export default [
    {
        url: '/',
        component: OldHome
    },
    // {
    //     url: '/old-home',
    //     component: OldHome
    // },
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
    {
        url: '/login',
        component: LoginPage
    },



    /* Fallback Routes: Please keep at the bottom */
    {
        url: '**',
        component: Error404Page
    }
];