import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='container'>
            <footer className='footer-area'>
                <div className='row'>
                  <div className="col-md-6">
                     <img className='img-icon' src={logo} alt='...'></img>
                  </div>

                  <div className="col-md-6">
                    <div className='row'>
                      <div className="col-md-6">
                          <p>About Online Food</p>
                          <p>Read our blog</p>
                          <p>Sign up to deliver</p>
                          <p>Add your restrurent</p>
                      </div>
                      <div className="col-md-6">
                           <p>Get help</p>
                           <p>Read FAQs</p>
                           <p>Sign up to deliver</p>
                           <p>Add your restrurent</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='footer-button row'>
                   <div className="copyright-text col-md-6">
                    <h6>Copyright 2020 online food</h6>
                    </div>
                    <div className="privacy-text col-md-6">
                      <p>Privacy Policy</p>
                      <p>Terms of Use</p>
                      <p>Pricing</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;