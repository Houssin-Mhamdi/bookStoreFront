import './App.css'
import Carouseel from './components/Carouseel'
import NavLinks from './components/NavLinks'
import Search from './components/Search'
import TopNav from './components/TopNav'
function App() {
  return (
    <div className="App">
      <TopNav />
      <Search />
      <NavLinks />
      <Carouseel />
    </div>
  )
}

export default App
