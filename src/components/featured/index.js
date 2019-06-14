import React from 'react';
import Carrousel from './Carrousel.js';
import CountDown from './CountDown.js';

const Featured = ()=> {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>
            <div className='artist_name'>
                <div className='wrapper'>
                    Mr  Kitty    
                </div>

            </div>
            <CountDown/>
        </div>
    );
};

export default Featured;