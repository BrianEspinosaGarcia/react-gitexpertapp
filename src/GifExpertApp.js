import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

const GifExpertApp = () => {

    
    const [ categories, setCategories] = useState( ['One Punch'] );

    /* const addCat = () => {
        //setCategories(  [...categories, categorie ] );
        setCategories( estadoPasado =>  [...estadoPasado, "provisional" ] );
    } */
   

    return (
        <> 
            <h2 className="card animate__animated animate__zoomInUp animate__delay-2s">GifExpertApp</h2>

                <AddCategory setCategorieNew={ setCategories } />
                <hr />
            
            <ol>
                { categories.map( categoria => 
                    <GifGrid 
                                category={ categoria } 
                                key={categoria}
                    />
                )}
            </ol>



        </>

    );

}


export default GifExpertApp;