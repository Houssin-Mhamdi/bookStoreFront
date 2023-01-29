import './App.css'
import Carouseel from './components/Carouseel'
import Footer from './components/Footer'
import HeadingTitle from './components/HeadingTitle'
import NavLinks from './components/NavLinks'
import Search from './components/Search'
import Serveses from './components/Serveses'
import Slidee from './components/Slidee'
import TopNav from './components/TopNav'
function App() {
  return (
    <div className="App">
      <TopNav />
      <Search />
      <NavLinks />
      <Carouseel />
      <Serveses />
      <HeadingTitle title='Most Gifted' />
      <Slidee />
      <HeadingTitle title='Best Seller' />
      <Slidee />
      <HeadingTitle title='Most Wished for' />
      <Slidee />
      <Footer />
    </div>
  )
}

export default App
