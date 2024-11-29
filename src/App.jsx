import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { AppHeader } from './Components/AppHeader'
import { AppMain } from './Components/AppMain'


function App() {

  return (
    <div className="App">
      <AppHeader />
      <AppMain />
    </div>
  )
}

export default App
