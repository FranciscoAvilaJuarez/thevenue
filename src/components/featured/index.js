import React from 'react';
import Carrousel from './Carrousel.js';

const Featured = ()=> {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>
            <div className='artist_name'>
                <div className='wrapper'>
                    Mr  Kitty    
                </div>

            </div>

        </div>
    );
};

export default Featured;