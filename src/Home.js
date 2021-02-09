import React from 'react'
import Carrousel from './anuncio/Carrousel/Carrousel'
import VideoTextFront from './anuncio/VideoComponent/VideoTextFront'
import { Footer } from './Footer/Footer'
import {Brand} from './menu/brand'
import { useFectImages } from './Services/useServiceImageData'
export const Home = () => {
    const {data,loading} = useFectImages('ImagesHome.json');
    const {data:dataVideo,loading:loadingVideo} = useFectImages('VideosR.json');
    return (
        <div>
           <Brand Titulo="CARNICERÍA" Subtitulo="Abierto todos los dias de 8am a 4pm" />
           {loading && <p>Cargando...</p>}
           <Carrousel images={data}></Carrousel>
           <div className="FixBrand">
                {loadingVideo && <p>Cargando...</p>}  
                <Brand Titulo="ROSTICERÍA" Subtitulo="Abierto sabados y domingos de 8am a 4pm" />
                {
                    dataVideo.map(data => (
                        <VideoTextFront key={data.Id} {...data} ></VideoTextFront>
                    ))
                }
           </div>
        </div>
    )
}
