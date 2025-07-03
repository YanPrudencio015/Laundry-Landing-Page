import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { sidebarToggleReducer } from './redux/sideBarToggle'
import { AnimatePresence } from 'framer-motion'

// to lazy loading
import { Suspense, lazy } from 'react'
import LazyLoading from './lazyLoading/Lazy'
const Main = lazy(()=> import('./components/Loundry'));
const About = lazy(()=> import('./components/about/AboutPage'));
const Services = lazy(()=> import('./pages/servicePage/ServicePage'));
const Prices = lazy(()=> import('./pages/pricesPage/PricesPage'));

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
      <Suspense fallback={<LazyLoading/>}>
        <div className='loundry' 
          style={{
            backgroundImage: `url(${background})`, 
            backgroundAttachment: 'fixed'
          }}>
          <LoundryHeader />
          <SideBarHeader />
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              {/* <Route index element={<Loundry />} /> */}
              <Route index element={< Main/>} />
              {/* <Route path='/sobre' element={<AboutPage />} /> */}
              <Route path='/sobre' element={<About />} />
              {/* <Route path='/servicos' element={<ServicesPage />} /> */}
              <Route path='/servicos' element={<Services />} />
              {/* <Route path='/precos' element={<PricesPage />} /> */}
              <Route path='/precos' element={<Prices />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Suspense>
    </Provider>
  )
}

export default App