import React from 'react';
import PropTypes from 'prop-types';
import loadImg from '../../asset/image/icons/load.gif'
LoadGif.propTypes = {
    
};

function LoadGif(props) {
    return (
        <div className="placeholder">
            <img src={loadImg} alt="loading"/>
        </div>
    );
}

export default LoadGif;