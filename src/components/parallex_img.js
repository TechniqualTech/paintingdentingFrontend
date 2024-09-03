import React from 'react'
import para_img from '../../src/assets/images/Bedroom-mob.jpg'
import '../css/entrybody.css'

export default function Parallex_img() {
  return (
    <div className='container temp_anim19'> 
        <div className='parallex d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column col-4 text-center justify-content-center align-items-center text-white' data-aos="zoom-in" data-aos-duration="500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim19" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <h3 className='title_lg font_res'>Call To Action</h3>
                <p className='text-white font_res2'>Create your dream home with our painting experts</p>
                <button className='title_sm font_res border-1 border-white shadow bg-transparent text-white hover_redbg'> Call To Action</button>
            </div>
        </div>
    </div>
  )
}
