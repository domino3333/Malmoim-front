import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../pages/Loading'
import LoginPage from '../pages/LoginPage'

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
])

export default root
