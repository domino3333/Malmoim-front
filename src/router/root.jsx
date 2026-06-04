import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from '../pages/Loading'
import ReadPage from '../pages/product/ReadPage'

const MainPage = lazy(() => import('../pages/MainPage'))
const MenBottomPage = lazy(() => import('../pages/MenBottomPage'))
const MenTopPage = lazy(() => import('../pages/MenTopPage'))

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
    path: '/men/top',
    element: (
      <Suspense fallback={<Loading />}>
        <MenTopPage />
      </Suspense>
    ),
  },
  {
    path: '/men/bottom',
    element: (
      <Suspense fallback={<Loading />}>
        <MenBottomPage />
      </Suspense>
    ),
  },
  {
    path: '/read/:no',
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
])

export default root
