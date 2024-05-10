import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/main/MainPage';
import HelloPage from '../pages/introduction/HelloPage';
import DirectionPage from '../pages/introduction/DirectionPage';
import ListPage from '../pages/market/ListPage';
import StoryPage from '../pages/croptalk/StoryPage';
import GrowPage from '../pages/croptalk/GrowPage';
import SchoolPage from '../pages/croptalk/SchoolPage';
import InfoPage from '../pages/event/InfoPage';
import NoticePage from '../pages/community/NoticePage';
import LoginPage from '../pages/user/LoginPage';
import RegisterPage from '../pages/user/RegisterPage';
import TermsPage from '../pages/user/TermsPage';
import AdminMainPage from '../pages/admin/MainPage';
import AdminRegisterPage from '../pages/admin/product/RegisterPage';

import BoardListPage from '../pages/board/ListPage';
import BoardWritePage from '../pages/board/WritePage';
import BoardModifyage from '../pages/board/ModifyPage';
import BoardViewPage from '../pages/board/ViewPage';

// 라우터 생성
const root = createBrowserRouter([
    // main
    { path: '/', element: <MainPage /> },
    // introduction
    { path: '/introduction/hello', element: <HelloPage /> },
    { path: '/introduction/direction', element: <DirectionPage /> },
    // market
    { path: '/market/list', element: <ListPage /> },
    // croptalk
    { path: '/croptalk/story', element: <StoryPage /> },
    { path: '/croptalk/grow', element: <GrowPage /> },
    { path: '/croptalk/school', element: <SchoolPage /> },
    // event
    { path: '/event/info', element: <InfoPage /> },
    // community
    { path: '/community/notice', element: <NoticePage /> },
    // user
    { path: '/user/login', element: <LoginPage /> },
    { path: '/user/terms', element: <TermsPage /> },
    { path: '/user/register', element: <RegisterPage /> },
    { path: '/user/logout', element: <Navigate replace to="/" /> },

    // board
    { path: '/board/list', element: <BoardListPage /> },
    { path: '/board/view', element: <BoardViewPage /> },
    { path: '/board/write', element: <BoardWritePage /> },
    { path: '/board/modify', element: <BoardModifyage /> },

    // admin
    { path: '/admin', element: <AdminMainPage /> },
    { path: '/admin/product/register', element: <AdminRegisterPage /> },
]);

// 라우터 내보내기
export default root;
