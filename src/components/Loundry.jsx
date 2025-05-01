import React from 'react';
import './loundry.css';

// redux
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import { sidebarToggleReducer } from '../redux/sideBarToggle';
// components
import LoundryHeader from './header/LoundryHeader';
import SideBarHeader from './header/sideBar';
import Banner from './banner/Banner';
import About from './about/About';
import AboutPage from './about/AboutPage';
// background
import background from '../images/Backgrounds/swirl.png'


const store = createStore(sidebarToggleReducer)
const Loundry = () => {
    return (
        <Provider store={store}>
            <div className='loundry' 
                style={{backgroundImage:`url(${background})`, 
                backgroundAttachment:'fixed'
            }}>
                <LoundryHeader/>
                <SideBarHeader/>
                <Banner/>
                <About/>

                {/* usaro react router para criar uma rota para esse jsx */}
                {/* <AboutPage/> */}


                {/* fazer a sessão de:
                    preços
                    serviços
                    nossos clientes
                */}
                    
            </div>
        </Provider>
    );
};

export default Loundry;


/*
Refazer o site:

se inspirar nos seguintes sites:
https://demo.zytheme.com/sanera/?storefront=envato-elements
https://nexava.netlify.app/?storefront=envato-elements
https://html.weblayoutpro.com/webplateone/gatre/?storefront=envato-elements

*/ 
