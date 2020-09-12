import React from 'react'
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MoiveThumb = ({ image, movieId, clickable}) => (
<StyledMovieThumb>

{clickable ? (
        <img className="clickable" src={image} alt ="moviethumb"/>
    ) : (
        <img src={image} alt="moviethumb"/>
    )}

</StyledMovieThumb>


)

export default MoiveThumb;