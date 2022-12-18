import React from 'react'
import payment from './img/44-440249_paypal-payment-methods-icons-hd-png-download.png'
import mobileApp from './img/téléchargement (1).png'
function Contact() {
  return (
    <div className="section">
        <div>           
            <h4>Contact</h4>
            <p>Address: 14 Time Square,Street 42 New York</p>
            <p>Phone: +178154629</p>
        </div>
        <div>
            <h4>About </h4>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
        </div>
        <div>
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="img">
                <img src={mobileApp} alt=""/>
            </div> 
        </div>
        <div className="payement">
            <h4>Payment Gateways</h4>
            <img src={payment} alt=""/>
        </div>
    </div>
  )
}

export default Contact