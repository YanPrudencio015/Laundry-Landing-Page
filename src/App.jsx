import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { sidebarToggleReducer } from './redux/sideBarToggle'
import { AnimatePresence } from 'framer-motion'
// Components
import LoundryHeader from './components/header/LoundryHeader'
import SideBarHeader from './components/header/sideBar'
import Loundry from './components/Loundry'


// Pages
// import AboutPage from './pages/aboutPage/AboutPage';
import AboutPage from './components/about/AboutPage';
import PricesPage from './pages/pricesPage/PricesPage';
import ServicesPage from './pages/servicePage/ServicePage'
import './components/loundry.css'
// Background
import background from './images/Backgrounds/swirl.png'

// Create Redux store
const store = createStore(sidebarToggleReducer)

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div className='loundry' 
        style={{
          backgroundImage: `url(${background})`, 
          backgroundAttachment: 'fixed'
        }}>
        <LoundryHeader />
        <SideBarHeader />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Loundry />} />
            <Route path='/sobre' element={<AboutPage />} />
            <Route path='/servicos' element={<ServicesPage />} />
            <Route path='/precos' element={<PricesPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Provider>
  )
}

export default App