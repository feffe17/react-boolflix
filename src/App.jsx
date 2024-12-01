import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageNotFound } from './Components/PageNotFound'


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
