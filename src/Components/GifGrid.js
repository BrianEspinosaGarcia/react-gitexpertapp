import React from 'react'
import {GifGridItem} from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    
    const { data, loading } = useFetchGifs( category );


   //! Importante notar que aqui se esta desestructurando en una prop del componente desde antes para poder tomar del otro lado los valores de esa 
    //! desestructuracion
    return (
        <>
            <h3> { category } </h3>
            { loading && <h1>'Cargando ...'</h1>} <br/>  <br/>  <br/>
            <div className="card-grid">
                    { data.map( gif => 
                        <GifGridItem { ...gif }  
                                    key={ gif.id } 
                        />)
                    }
                
            </div>
        </>
    )
}
