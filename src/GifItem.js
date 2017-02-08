import React from 'react'

const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.fixed_width_still.url} alt="hello"/>
        </div>
    )
} 

export default GifItem