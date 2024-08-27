import React ,{useEffect,useRef} from 'react'
import t1 from "../assets/images/testimonial/boytestimonial.png"
import t2 from "../assets/images/testimonial/boytestimonial3.jpeg"
import t3 from "../assets/images/testimonial/boytestimonial4.png"
import t4 from "../assets/images/testimonial/boytestimonial5.png"
import star from "../assets/images/testimonial/icons8-star-48.png"
import leftQuot from "../assets/images/testimonial/icons8-quotation-left.png"
import rightQuot from "../assets/images/testimonial/icons8-quotation-right.png"
import '../css/entrybody.css'
import { getFadeUpAnimationAttributes } from '../App'

export default function Testimonial() {
  return (
    <div className='container d-flex flex-row white_parent temp_anim14'>
        <div className='col-5'  {...getFadeUpAnimationAttributes({  duration: 1000, anchor: '.temp_anim14' })}>
            <h5 className='title_md white_child'>Testimonials</h5>
            <p>One of the aspects I appreciated the most was their efficiency. They completed the project on time and within the budget, which is always a relief for homeowners. The team worked diligently, and I was impressed by their commitment to getting the job done right the first time.</p>
        </div>
        <div className='col-7 flex-column footer rounded-4' {...getFadeUpAnimationAttributes({  duration: 1500, anchor: '.temp_anim14' })}>
            <div className='flex-row m-3'>
                <img src={t1} alt='testimonial' className='img-fluid rounded-circle grid_icon_div shadow p-1'></img>
                <div className='d-inline-flex flex-column mx-4'>
                    <h5 className='title_sm m-0'>Vicky Gupta</h5>
                    <ol className='list-unstyled d-flex flex-row m-0'>
                        <li className='grid_icon '><img src={star} alt='star' className='img-fluid p-1'></img></li>
                        <li className='grid_icon '><img src={star} alt='star' className='img-fluid p-1'></img></li>
                        <li className='grid_icon '><img src={star} alt='star' className='img-fluid p-1'></img></li>
                        <li className='grid_icon '><img src={star} alt='star' className='img-fluid p-1'></img></li>

                    </ol>
                </div>
            </div>
            <div className='col-12 m-3'>
                <p className=''><span className='d-inline-block grid_icon p-2 lh-0 pt-0'><img src={rightQuot} alt='next' className='img-fluid '/></span>Painting good service. Professionally done. I’m happy with the final outcome and at very
                        reasonable price
                        .<span className='d-inline-block grid_icon  p-2 lh-0 pt-0'><img src={leftQuot} alt='next' className='img-fluid'/></span></p>
            </div>
        </div>
    </div>
  )
}
