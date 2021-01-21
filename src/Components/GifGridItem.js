import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {
    return (
        <div className="card animate__animated animate__jello animate__delay-2s">
            <img src={ url } alt={ title }></img>
             <h3 className="card animate__animated animate__flip animate__delay-2s"> { title } </h3>
        </div>
    )
}
