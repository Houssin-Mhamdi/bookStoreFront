import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NavLinks from './components/NavLinks'
import Search from './components/Search'
import TopNav from './components/TopNav'
function App() {
  return (
    <div className="App">
      <TopNav />
      <Search />
      <NavLinks />
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
