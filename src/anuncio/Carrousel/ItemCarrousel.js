import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const ItemCarrousel = ({Name,Path,Description}) => {
    
   
    return (
        <div className="ContainerItem">
            <div className="Item">
                <div className="Legend">
                    {Description}
                </div>
                <div className="Blur">
                    <img src={Path} />
                    <p className="legend">{Name}</p>
                </div>
                <div className="Frame">
                    <img src={Path} />
                    <p className="legend">{Name}</p>
                </div>
            </div>
         </div>
    )
}

ItemCarrousel.propTypes = {
    Name:PropTypes.string,
    Path:PropTypes.string.isRequired
}

export default ItemCarrousel
