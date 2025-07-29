import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { sidebarToggleReducer } from './redux/sideBarToggle'
import './pages/mainpage/loundry.css'

// Page
import MainPage from './pages/mainpage/Loundry';
// Components
import LaundryHeader from './components/header/LaundryHeader'
import Footer from './components/footer/Footer'
// Background
import background from './images/Backgrounds/swirl.png'

// Create Redux store
const store = createStore(sidebarToggleReducer)


function ScrollToTrach(){

  const location = useLocation()
      useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }

        }
    }, [location]);
    
    return null;

}

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
        <div className='loundry' 
          style={{
            backgroundImage: `url(${background})`, 
            backgroundAttachment: 'fixed'
          }}>
          <LaundryHeader />
            <ScrollToTrach/>  
            <Routes location={location} key={location.pathname}>
              <Route index element={< MainPage/>} />
            </Routes>
          <Footer/>
        </div>
    </Provider>
  )
}
export default App