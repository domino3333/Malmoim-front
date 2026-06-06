import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../pages/Loading'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import HostDashboardPage from '../pages/HostDashboardPage'

const MainPage = lazy(() => import('../pages/MainPage'))

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
])

export default root
