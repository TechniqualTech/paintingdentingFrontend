import React from 'react'
import head from '../../src/assets/icons/white_headphone.png'
import phone from '../../src/assets/icons/white_phone.png'
import email from '../../src/assets/icons/white_email.png'


export default function Contact_card() {
    return (
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center bg-danger text-center my-4 p-4'>
            <span><img src={head} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>
            <p className='title_md  text-white'>Have a Question?</p>
            <span className='text-white'><img src={phone} alt='location' className='grid_icon  p-2 scaling_c' />+919821618045</span>
            <span className='text-white'><img src={email} alt='location' className='grid_icon  p-2 scaling_c' /> vickyg19052002@gmail.com</span>
        </div>
    )
}
