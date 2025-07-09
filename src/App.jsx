import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { sidebarToggleReducer } from './redux/sideBarToggle'
import { AnimatePresence } from 'framer-motion'
import './pages/mainpage/loundry.css'

// to lazy loading
import { Suspense, lazy } from 'react'
import LazyLoading from './lazyLoading/Lazy'
const Main = lazy(()=> import('./pages/mainpage/Loundry'));
const About = lazy(()=> import('./pages/aboutPage/AboutPage'));
const Services = lazy(()=> import('./pages/servicePage/ServicePage'));
const Location  = lazy(()=> import('./pages/locationPage/LocationPage'))

// Components
import LoundryHeader from './components/header/LoundryHeader'
import SideBarHeader from './components/header/sideBar'
import Footer from './components/footer/Footer'
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
              <Route index element={< Main/>} />
              <Route path='/sobre' element={<About />} />
              <Route path='/servicos' element={<Services />} />
              <Route path='/localizacao' element={<Location />} />
            </Routes>
          </AnimatePresence>
          <Footer/>
        </div>
      </Suspense>
    </Provider>
  )
}

export default App