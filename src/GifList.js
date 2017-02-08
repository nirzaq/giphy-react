import React from 'react'
import GifItem from './GifItem'

const GifList = (props) => {
    const gifItems = props.gifs.map((images) => {
    return <GifItem key={images.id} gif={images} />
   });

   return (
       <div className="gif-list">{gifItems}</div>
   );
}

export default GifList