import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../pages/home/Loading'
import LoginPage from '../pages/home/LoginPage'
import SignUpPage from '../pages/home/SignUpPage'
import HostDashboardPage from '../pages/dashboard/HostDashboardPage'
import CreatePage from '../pages/dashboard/CreatePage'
import MyContentPage from '../pages/dashboard/MyContentPage'
import CreateDetailPage from '../pages/dashboard/CreateDetailPage'

const MainPage = lazy(() => import('../pages/home/MainPage'))

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
        <HostDashboardPage />
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
])

export default root

