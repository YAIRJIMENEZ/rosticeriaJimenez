import React from 'react'
import PropTypes from 'prop-types'
import './Container.css'
import Video from './Video'
import { Footer } from '../../Footer/Footer'

const VideoTextFront = ({Id,Name,Path,Description}) => {
    return (
        <div className="Container">
             <Video Path={Path}></Video>
            <div className='BackGround'>
                <p className="Text">
                    {Description}
                </p>
            </div>
        </div>
    )
}

export default VideoTextFront
