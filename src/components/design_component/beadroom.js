import React from 'react'
import design1 from "../../assets/images/alldesign/b_design.jpg"
import design2 from "../../assets/images/alldesign/b_design2.jpg"
import design3 from "../../assets/images/alldesign/b_design3.jpg"
import design4 from "../../assets/images/alldesign/b_design4.jpg"

export default function Beadroom() {
  return (
    <div className='container-fluid temp_anim8'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 d-flex flex-column' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim8" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 mb-4 overflow-hidden'>
              <img src={design1} alt='image' className='img-fluid scale'></img>
            </div>
            <div className='col-12 overflow-hidden'>
              <img src={design2} alt='image' className='img-fluid scale'></img>
            </div>
          </div>
          <div className='col-4 d-flex flex-column' data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim8" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 overflow-hidden'>
              <img src={design3} alt='image' className='img-fluid scale'></img>

            </div>
          </div>
          <div className='col-4 d-flex flex-column' data-aos="fade-up" data-aos-duration="1700"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim8" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 overflow-hidden'>
              <img src={design4} alt='image' className='img-fluid scale'></img>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
