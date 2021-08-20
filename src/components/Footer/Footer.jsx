import React from 'react';
import "./Footer.css";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-column">
                Texto footer {props.myvar}
            </div>
            <div className="footer-column">
                Texto footer
            </div>
            <div className="footer-column">
                Texto footer
            </div>
        </div>
    )
}

export default Footer
