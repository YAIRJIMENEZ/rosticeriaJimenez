import React from 'react'
import PropTypes from 'prop-types';
const Titulo = ({Titulo}) => {
    return (
        <h1>
            {Titulo}
        </h1>
    )
}
Titulo.propTypes = {
    Titulo : PropTypes.string.isRequired
}
export default Titulo;
