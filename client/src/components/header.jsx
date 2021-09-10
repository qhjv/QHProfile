import React from 'react';
import logodark from '../asset/image/logo.png'
import logolight from '../asset/image/logo.png'
import $ from 'jquery'
Header.propTypes = {
    
};

function Header(props) {
    const handleClickLogo = () => {
        $('body').toggleClass('light-theme');
        $(".header-logo__img img").attr("src",`${logolight}`);
    }
    return (
            <header className="header" id="header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="header-logo d-flex align-items-center hover-cursor">
                        <div className="header-logo__img" onClick={handleClickLogo}>
                            <h1><img src={logodark} alt="qhjv portfolio"/></h1>
                        </div>
                        <div className="header-logo__text">
                            <a className="hover-cursor hover-text hover-text-underlined" href="#top">H-JV</a>
                        </div>
                    </div>
                    <div className="header-project hover-text hover-cursor hover-text-underlined">PRODUCTS</div>
                </div>
            </header>
    );
}

export default Header;