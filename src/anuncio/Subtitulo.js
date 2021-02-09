import React from 'react'
import PropTypes from 'prop-types';
const Subtitulo = ({Titulo}) => {
    return (
        <h6>
            {Titulo}
        </h6>
    )
}
Subtitulo.propTypes = {
    Titulo : PropTypes.string.isRequired
}
export default Subtitulo;
