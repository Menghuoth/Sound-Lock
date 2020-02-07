import HomePage from '../pages/HomePage';
import Error404Page from '../pages/errors/Error404';
import ArtistDetailPage from '../pages/artist_detail';
import AlbumPage from "../pages/album"
import OldAlbumDetailPage from "../pages/album/album-detail"
import AlbumDetailPage from '../pages/AlbumDetailPage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ArtistPage from "../pages/artist";

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
        url: '/artist',
        component: ArtistPage
    },
    {
        url: '/artist-detail/:id',
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
    {
        url: '/register',
        component: RegisterPage
    },



    /* Fallback Routes: Please keep at the bottom */
    {
        url: '**',
        component: Error404Page
    }
];