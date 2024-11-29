import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { AppHeader } from './Components/AppHeader'

import MovieList from './Components/MovieList'

function App() {

  return (
    <>
      <AppHeader />


      <MovieList />

    </>
  )
}

export default App
