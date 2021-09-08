import React from 'react';
import logodark from '../asset/image/logo.png'

Header.propTypes = {
    
};

function Header(props) {
    return (
            <header className="header" id="header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="header-logo d-flex align-items-center">
                        <div className="header-logo__img">
                            <img src={logodark} alt="qhjv portfolio"/>
                        </div>
                        <div className="header-logo__text">
                            <a className="hover-text" href="#top">H-JV</a>
                        </div>
                    </div>
                    <div className="header-project hover-text">PRODUCTS</div>
                </div>
            </header>
    );
}

export default Header;