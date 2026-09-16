import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import './css/common/App.css'
import root from './router/root'

function App() {
  return (
    <>
      <RouterProvider router={root} />
    </>
  )
}

export default App
