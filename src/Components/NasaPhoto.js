import React from 'react'
import '../Photo.css'

const NasaPhoto = (props) => {
    return (
        <div className = 'nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}></img>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto
