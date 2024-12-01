import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import HomePage from './pages/HomePage'
import PostDetail from './pages/PostDetail'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/HomePage/:title" element={<PostDetail />} /> {/* Nuova Route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
