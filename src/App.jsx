import './App.css'
import Carouseel from './components/Carouseel'
import NavLinks from './components/NavLinks'
import Search from './components/Search'
import Serveses from './components/Serveses'
import TopNav from './components/TopNav'
function App() {
  return (
    <div className="App">
      <TopNav />
      <Search />
      <NavLinks />
      <Carouseel />
      <Serveses />
    </div>
  )
}

export default App
