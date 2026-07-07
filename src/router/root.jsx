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
import QnaParticipant from '../pages/participant/qna/QnaParticipant'

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
    path: '/qna/:no/host',
    element: (
      <Suspense fallback={<Loading />}>
        <QnaHostPage/>
      </Suspense>
    ),
  },
  {
    path: '/qna/:no',
    element: (
      <Suspense fallback={<Loading />}>
        <QnaParticipant/>
      </Suspense>
    ),
  },
])

export default root


