import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoadingFallback from '../pages/public/LoadingFallback'
import LoginPage from '../pages/public/LoginPage'
import SignUpPage from '../pages/public/SignUpPage'
import HostHomePage from '../pages/host/home/HostHomePage'
import CreatePage from '../pages/host/home/CreatePage'
import MyRoomsPage from '../pages/host/home/MyRoomsPage'
import CreateDetailPage from '../pages/host/home/CreateDetailPage'
import QnaHostPage from '../pages/host/qna/QnaHostPage'
import QnaParticipantPage from '../pages/participant/qna/QnaParticipantPage'

const MainPage = lazy(() => import('../pages/public/MainPage'))

const root = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/signUp',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HostHomePage />
      </Suspense>
    ),
  },
  {
    path: '/create',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <CreatePage/>
      </Suspense>
    ),
  },
  {
    path: '/myContent',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <MyRoomsPage/>
      </Suspense>
    ),
  },
  {
    path: '/createDetail',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <CreateDetailPage/>
      </Suspense>
    ),
  },
  {
    path: '/qna/:roomNo/host',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <QnaHostPage/>
      </Suspense>
    ),
  },
  {
    path: '/qna/:roomNo',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <QnaParticipantPage/>
      </Suspense>
    ),
  },
])

export default root



