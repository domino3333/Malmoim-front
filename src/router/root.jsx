import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../pages/public/Loading'
import LoginPage from '../pages/public/LoginPage'
import SignUpPage from '../pages/public/SignUpPage'
import HostHomePage from '../pages/host/home/HostHomePage'
import CreatePage from '../pages/host/home/CreatePage'
import MyContentPage from '../pages/host/home/MyContentPage'
import CreateDetailPage from '../pages/host/home/CreateDetailPage'
import QnaHostPage from '../pages/host/qna/QnaHostPage'
import QnaParticipantPage from '../pages/participant/qna/QnaParticipantPage'

const MainPage = lazy(() => import('../pages/public/MainPage'))

const root = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/signUp',
    element: (
      <Suspense fallback={<Loading />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<Loading />}>
        <HostHomePage />
      </Suspense>
    ),
  },
  {
    path: '/create',
    element: (
      <Suspense fallback={<Loading />}>
        <CreatePage/>
      </Suspense>
    ),
  },
  {
    path: '/myContent',
    element: (
      <Suspense fallback={<Loading />}>
        <MyContentPage/>
      </Suspense>
    ),
  },
  {
    path: '/createDetail',
    element: (
      <Suspense fallback={<Loading />}>
        <CreateDetailPage/>
      </Suspense>
    ),
  },
  {
    path: '/qna/:roomNo/host',
    element: (
      <Suspense fallback={<Loading />}>
        <QnaHostPage/>
      </Suspense>
    ),
  },
  {
    path: '/qna/:roomNo',
    element: (
      <Suspense fallback={<Loading />}>
        <QnaParticipantPage/>
      </Suspense>
    ),
  },
])

export default root



