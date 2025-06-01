import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { sidebarToggleReducer } from './redux/sideBarToggle'

// Components
import LoundryHeader from './components/header/LoundryHeader'
import SideBarHeader from './components/header/sideBar'
import Loundry from './components/Loundry'
import AboutPage from './components/about/AboutPage'

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
          <Routes location={location} key={location.pathname}>
            <Route index element={<Loundry />} />
            <Route path='/sobre' element={<AboutPage />} />
          </Routes>
      </div>
    </Provider>
  )
}

export default App