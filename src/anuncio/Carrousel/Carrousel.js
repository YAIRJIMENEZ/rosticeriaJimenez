import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import ItemCarrousel from './ItemCarrousel';


const Carrousel = ({images}) => {
    return (
        <Carousel>
            {
                images.map(({Id,Name,Path,Description}) =>(
                    <ItemCarrousel key={Id} Name={Name} Path={process.env.PUBLIC_URL+Path} Description={Description}></ItemCarrousel>
                ))
                
            }
        </Carousel>
    )
}


export default Carrousel
