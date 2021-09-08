import React from 'react';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer className="footer">
                <div className="d-flex align-items-end justify-content-between">
                    <div className="footer-socials d-flex align-items-center flex-column">
                        <div className="footer-socials__facebook">
                            <a href="#top">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div className="footer-socials__instagram">
                            <a href="#top">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </div>
                        <div className="footer-socials__github">
                            <a href="#top">
                                <i className="fab fa-github-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-year">@2021</div>
                </div>
        </footer>
    );
}

export default Footer;