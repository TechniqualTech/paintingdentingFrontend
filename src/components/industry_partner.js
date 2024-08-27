import React from 'react'
import asianpaint from "../../src/assets/images/industry_partner/asianpaint.png"
import berger from "../../src/assets/images/industry_partner/berger.png"
import delux from "../../src/assets/images/industry_partner/delux.png"
import indigo from "../../src/assets/images/industry_partner/indigo.png"
import kansai from "../../src/assets/images/industry_partner/kansai.png"
import nippon from "../../src/assets/images/industry_partner/nippon.png"
import '../css/entrybody.css'
export default function Industry_partner() {
    return (
        <div className='container temp_anim13'>
            <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim13" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <div className='horizontal_line col-3'></div>
                <div className='position-absolute bg-white text-center'>
                    <h2 className='p-0 m-0 title_md'>Industry Partner</h2>
                    <p className='p-0 m-0'>Let's Create the bond of Trust</p>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center position-relative mb-5'>
                <ol className=' list-unstyled d-flex col-10 justify-content-between  ' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim13" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <li className='grid_icon_div'><img src={asianpaint} alt='asianpaint' className='img-fluid' /></li>
                    <li className='grid_icon_div'><img src={berger} alt='berger' className='img-fluid' /></li>
                    <li className='grid_icon_div'><img src={delux} alt='delux' className='img-fluid' /></li>
                    <li className='grid_icon_div'><img src={indigo} alt='indigo' className='img-fluid' /></li>
                    <li className='grid_icon_div'><img src={kansai} alt='kansai' className='img-fluid' /></li>
                    <li className='grid_icon_div'><img src={nippon} alt='nippon' className='img-fluid' /></li>
                </ol>
            </div>
        </div>
    )
}
