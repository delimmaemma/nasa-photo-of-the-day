import React from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    25% {
        opacity: .25
    }
    50% {
        opacity: .5
    }
    75% {
        opacity: .75
    }
    100% {
        opacity: 1;
        transform: scale(1) rotateZ(0)
    }
`

const StyledImage = styled.div`
    background-color: black;
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: space-between;

    h3 {
        font-weight: bold;
    }

    p:first-of-type {
        color: grey;
        opacity: 80%;
    }

    p:last-of-type {
        padding-left: 10px;
        padding-right: 10px;
    }

    img {
        max-width: 75%;
        object-fit: cover;
        padding: 10px;
        align-items: center;
        justify-items: space-between
        opacity: 0;
        transform: scale(2) rotateZ(180deg);
        animation: ${kf} 0.5s ease-in-out forwards;

    }
`

const NasaPhoto = (props) => {
    return (
        <StyledImage>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}></img>
            <p>{props.photo.explanation}</p>
        </StyledImage>
    )
}

export default NasaPhoto
