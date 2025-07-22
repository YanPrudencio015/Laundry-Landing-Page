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

// Components
// import LoundryHeader from './components/header/LaundryHeader'
import LaundryHeader from './components/header/LaundryHeader'
import Footer from './components/footer/Footer'
import Scrollheader from './components/header/secondHeader/SecondHeader'
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
          <LaundryHeader />
          <Scrollheader/>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route index element={< Main/>} />
            </Routes>
          </AnimatePresence>
          {/* <Footer/> */}
        </div>
      </Suspense>
    </Provider>
  )
}

/*
criar um novo navbar que, ao scrolar ou puxar para cima ele aparece. A ideia é substituir
o botão que leva devolta para o topo. Dessa forma, fica mais fácil do usuário trnasitar entre
as páginas.

Refazer o menu lateral talvez colocar animação ao abri-lo. Criar um evento para fechar o menu
no background, para isso, será necessário criar o BG como elemento irmão e não pai. 

refazer o a sessão de comentários dos clientes
refazer o about


*/

export default App