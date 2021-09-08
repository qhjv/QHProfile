import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <section className="home section" id="home">
            <div className="home-text text-center">
                <h2>
                    <a href="#top">
                        CLICK TO
                        <br></br> 
                        VIEW INFOMATION
                        <br></br>
                        ABOUT ME
                    </a>
                </h2>
            </div>
         </section>
    );
}

export default Home;