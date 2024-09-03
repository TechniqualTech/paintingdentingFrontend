import React from 'react'
import design1 from "../../assets/images/alldesign/k_design.jpg"
import design2 from "../../assets/images/alldesign/k_design2.jpg"
import design3 from "../../assets/images/alldesign/k_design3.jpg"
import design4 from "../../assets/images/alldesign/k_design4.jpg"
import design5 from "../../assets/images/alldesign/k_design.jpg"
import design6 from "../../assets/images/alldesign/k_design6.jpg"

export default function Kids() {
  return (
    <div className='temp_anim9'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 d-flex flex-column p-0 pe-1 pe-md-4' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim9" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design1} alt='image' className='img-fluid scale'></img>
            </div>
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design2} alt='image' className='img-fluid scale'></img>
            </div>
          </div>
          <div className='col-4 d-flex flex-column p-0 pe-1 pe-md-4' data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim9" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design3} alt='image' className='img-fluid scale'></img>

            </div>
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design4} alt='image' className='img-fluid scale'></img>

            </div>
          </div>
          <div className='col-4 d-flex flex-column p-0 pe-1 pe-md-4' data-aos="fade-up" data-aos-duration="1700"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim9" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design5} alt='image' className='img-fluid scale'></img>

            </div>
            <div className='col-12 mb-md-4 mb-1 overflow-hidden'>
              <img src={design6} alt='image' className='img-fluid scale'></img>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
