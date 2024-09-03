import React from 'react'
import location from '../assets/icons/icons8-location-100.png';
import phone from '../assets/icons/icons8-phone-100.png'
import email from '../assets/icons/icons8-email-100.png';
import clock from '../assets/icons/icons8-clock-96.png';
import { getFadeUpAnimationAttributes } from '../App'

import '../css/entrybody.css'


export default function Contact() {
    return (
        <div className='container temp_anim16 mt-5 py-2'>
            <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' {...getFadeUpAnimationAttributes({  duration: 1000, anchor: '.temp_anim16' })}>
                <div className='horizontal_line col-10 col-sm-6 col-md-5 col-lg-4'></div>
                <div className='position-absolute bg-white text-center'>
                    <h2 className='p-0 m-0 title_md'>Contact Us</h2>
                    <p className='p-0 m-0'>Feel free to Contact</p>
                </div>
            </div>
            <div className='d-flex flex-column'>
                <div className='row mt-2' {...getFadeUpAnimationAttributes({  duration: 1500, anchor: '.temp_anim16' })}>
                    <div className='col-6 shadow p-4 scaling_p'>
                        <span><img src={location} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>
                        <p className='title_md'>Address</p>
                        <p className='text-break'>Navi Mumabi, Ghansoli Near Dmart House no 810 ,room 406 -400701</p>
                    </div>
                    <div className='col-6 shadow p-4 scaling_p'>
                        <span><img src={phone} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>
                        <p className='title_md'>Call Us</p>
                        <p>+91 9821618045</p>
                        <p>+91 9029150327</p>

                    </div>
                </div>

                <div className='row mt-2' {...getFadeUpAnimationAttributes({  duration: 1500, anchor: '.temp_anim16' })}>
                    <div className='col-6 shadow p-4 scaling_p'>
                        <span><img src={email} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>
                        <p className='title_md'>Email Us</p>
                        <p className='text-break'>mahendrag8451@gmail.com</p>
                    </div>
                    <div className='col-6 shadow p-4 scaling_p'>
                        <span><img src={clock} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>
                        <p className='title_md'>Open Hours</p>
                        <p>24*7 Availabe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
