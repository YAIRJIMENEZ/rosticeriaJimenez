import { checkPropTypes } from 'prop-types'
import React from 'react'
import { Container } from '../anuncio/Container'
import './brand.css'
import PropTypes from 'prop-types'

export const Brand = ({Titulo,Subtitulo}) => {
    return (
        <div className="brand">
           <Container MainTitle={Titulo} SubTitle={Subtitulo}></Container>
        </div>
    )
}
Brand.prototype={
    Titulo:PropTypes.string,
    Subtitulo:PropTypes.string
}

