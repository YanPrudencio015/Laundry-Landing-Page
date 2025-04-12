import React from 'react';
import './loundry.css';

// redux
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import { sidebarToggleReducer } from '../redux/sideBarToggle';
// components
import LoundryHeader from './header/LoundryHeader';
import LoundryBanner from './banner/loundryBanner';
import Services from './services/LoundryServices';
import Promotion from './promotion/Promotion';
import Location from './location/Location';
import SideBarHeader from './header/sideBar';

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
