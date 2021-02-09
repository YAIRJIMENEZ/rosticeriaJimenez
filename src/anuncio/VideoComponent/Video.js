import React from 'react'
import PropTypes from 'prop-types'
import './Container.css'
import { Footer } from '../../Footer/Footer'

const Video = ({Path}) => {
    return (
        <div className='Video'>
            <video src={Path} autoPlay={true} loop={true} muted={true} ></video>
            <Footer></Footer>
        </div>
    )
}

Video.propTypes = {
    Path: PropTypes.string.isRequired
}

export default Video
