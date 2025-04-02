import React from 'react';
import './loundry.css';


// components
import LoundryHeader from './header/LoundryHeader';
import LoundryBanner from './banner/loundryBanner';
import Services from './services/LoundryServices';
import Promotion from './promotion/Promotion';


const Loundry = () => {
    return (
        <div className='loundry'>
            <LoundryHeader />
            <LoundryBanner/>
            <Services/>
            <Promotion/>
        </div>
    );
};

export default Loundry;
