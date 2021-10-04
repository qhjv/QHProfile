import React from 'react';
import PropTypes from 'prop-types';
import loadImg from '../../asset/image/icons/load.gif'
LoadGif.propTypes = {
    
};

function LoadGif(props) {
    return (
        <img src={loadImg} alt="loading" />
    );
}

export default LoadGif;