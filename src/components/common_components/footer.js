import React from 'react'
import '../../css/header_footer.css'
import logo from '../../assets/logo/Weblogo.png'
import facebook from '../../assets/icons/icons8-facebook-48.png';
import linkedin from '../../assets/icons/icons8-twitter-48.png';
import twitter from '../../assets/icons/icons8-linkedin-48.png';
import instagram from '../../assets/icons/icons8-instagram-48.png';

import phone from '../../assets/icons/icons8-phone-50.png';
import email from '../../assets/icons/icons8-email-52.png';
import location from '../../assets/icons/icons8-location-50.png';



export default function Footer() {
  return (
    <div className='container-fluid footer overflow-hidden'>
      <div className='container d-flex flex-column p-2'>
        <div className='footer_body col-12 d-flex flex-lg-row flex-column'>
          <div className='col-lg-5 col-12 p-2'>
            <div className="">
              <a href='#'><img src={logo} alt='logo' /></a>
            </div>
            <div className='title'>
              <p>Painting your home is exciting, but choosing the right colours, products, and house painter while ensuring your family's safety can be a huge task.</p>
            </div>
            <div className='socal_media d-flex flex-row'>
              <div className='rounded-circle d-inline bg-secondar'>
                <img src={facebook} alt='facebook' className='social_media_icon' />
              </div>
              <div className='rounded-circle d-inline'>
                <img src={instagram} alt='instagram' className='social_media_icon' />
              </div>
              <div className='rounded-circle d-inline'>
                <img src={twitter} alt='twitter' className='social_media_icon' />
              </div>
              <div className='rounded-circle d-inline'>
                <img src={linkedin} alt='linkedin' className='social_media_icon' />
              </div>
            </div>
          </div>

          <div className='useful_section col-lg-7 col-12 d-flex flex-column  flex-md-row p-2 '>
            <div className='col-md-8 col-12 d-flex'>
              <div className='useful_link col-6'>
                <h6><b>Useful Links</b></h6>
                <ul className='list-unstyled'>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Home</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Blogs</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Services</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>FAQS</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Contact</a></li>
                </ul>
              </div>
              <div className='service col-6'>
                <h6><b>Painting Services</b></h6>
                <ul className='list-unstyled'>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Interior Painting</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Exterior painting</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Wood Coating</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Metal painting</a></li>
                  <li className='my-2'><a href='#' className='text-decoration-none text-dark hover_red'>Wall Texture</a></li>
                </ul>
              </div>
            </div>
            <div className='contact col-md-4 col-12 py-4 py-md-0'>
              <h6><b>Contact Us</b></h6>
              <div>
                <p><span><img src={phone} alt='phone' className='mini_favicon mb-1' /></span><b> Phone:</b> +91 9821618045</p>
                <p><span><img src={email} alt='email' className='mini_favicon mb-1' /><b> Email:</b></span> vickyg19052002@gmail.com</p>
                <p><span><img src={location} alt='location' className='mini_favicon mb-1' /><b> Address:</b></span> Navi Mumabi, Ghansoli Near Dmart House no 810 ,room 406 -400701</p>
              </div>
            </div>
          </div>
        </div>

        <div className='footer_copyright text-center col-12 pt-3'>
          <p>	&#169; Copyright <span className="fw-bold">PaintingDenting </span>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
