import React from 'react'
import  Titulo  from './Titulo'
import './add.css'
import Subtitulo from './Subtitulo'

export const Container = ({MainTitle,SubTitle}) => {
    return (
        <div className="containerAdd">
            <Titulo Titulo={MainTitle} />
            <Subtitulo Titulo={SubTitle} />
        </div>
    )
}
