import React from 'react'

function Footer() {
    return (
       <footer className='footer'>
           <div className='email-div'>
               <input 
                    type='email' 
                    placeholder='Email address' 
                    className='email'
                />
                <input type='checkbox' id='in' className='ch'/>
                <label for='in' className='ch-l'>
                    Subscribe to receive communications from Aesop 
                    about our products and services. By subscribing, 
                    you confirm you have read and accept our <a href='#'>privacy policy</a> 
                </label>
                <div className='sus-con'>
                    <h4 className='sus'>Sustainability</h4>
                    <a href='#' className='sus-info'>
                        All Aesop products are vegan, and we do not test our formulations 
                        or ingredients on animals. We are Leaping Bunny approved and a Certified 
                        B Corporation. Learn more
                    </a>
                </div>
           </div>
           <div className='flex-div'>
               <div className='list'>
                   <h4 className='li-head'>Orders and support</h4>
                   <ul className='services-li'>
                    <li><a href='#'>Contact us</a></li>
                    <li><a href='#'>FAQs</a></li>
                    <li><a href='#'>Shipping</a></li>
                    <li><a href='#'>Returns</a></li>
                    <li><a href='#'>Terms and conditions</a></li>
                   </ul>
               </div>
               <div className='list'>
                   <h4 className='li-head'>Services</h4>
                    <ul className='services-li'>
                        <li><a href='#'>Live assistance</a></li>
                        <li><a href='#'>Corporate gifts</a></li>
                        <li><a href='#'>Facial appointments</a></li>
                   </ul>
               </div>
               <div className='list'>
                    <h4 className='li-head'>Location preferences</h4>
                    <ul className='services-li'>
                        <li><a href='#'>Shipping: Hong Kong</a></li>
                        <li><a href='#'>Language: English</a></li>
                   </ul>
               </div>
               <div className='list'>
                    <h4 className='li-head'>About</h4>
                    <ul className='services-li'>
                        <li><a href='#'>Our story</a></li>
                        <li><a href='#'>foundation</a></li>
                        <li><a href='#'>Careers</a></li>
                   </ul>
               </div>
               <div className='list'>
                    <h4 className='li-head'>Social media</h4>
                    <ul className='services-li'>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Twitter</a></li>
                        <li><a href='#'>LinkedIn</a></li>
                   </ul>
               </div>
           </div>
       </footer>
    )
}

export default Footer
