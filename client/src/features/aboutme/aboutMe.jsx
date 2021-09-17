import React from 'react';
import PropTypes from 'prop-types';

AboutMe.propTypes = {
    
};

function AboutMe(props) {
    return (
        <section className="home section d-flex justify-content-between align-items-center" id="home" >
            <div className="home-text text-center" >
                <h2 className="d-flex flex-column">
                    about
                </h2>
            </div>
         </section>
    );
}

export default AboutMe;