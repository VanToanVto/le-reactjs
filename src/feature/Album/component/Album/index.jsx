import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Album.propTypes = {
    album: PropTypes.isRequired,
};

function Album({ album }) {
    return (
        <div className='album'>
            <img className='album-img' src={album.imgUrl} alt=''></img>
            <p className='album-name'>{album.name}</p>
        </div>
    );
}

export default Album;