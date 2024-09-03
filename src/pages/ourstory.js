import React from 'react'
import Breadcum from '../components/breadcum'
import rightarrow from '../assets/images/icons8-right-arrow-30.png'
import workflow from '../assets/images/work.png'  
import location from '../assets/icons/icons8-location-100.png'
import '../css/entrybody.css'

//routing
import { useNavigate } from 'react-router-dom';


export default function OurStory() {
  //routing object
  const navigate = useNavigate();
  
  const handleClick = (page) => {
    navigate(page); // Navigate to ComponentB
  };

  return (
    <div className='my-5 py-4'>
      <Breadcum />
      <div className='container-fluid my-5'>
        <div className='container p-sm-4 p-2'>

          <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim2" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='horizontal_line'></div>
            <div className='position-absolute bg-white text-center'>
              <h2 className='p-0 m-0 title_md'>How We Works </h2>
              <p className='p-0 m-0'>Procees for Change</p>
            </div>
          </div>

          <div className='d-flex flex-column flex-sm-row'>
            <div className='col-sm-8 col-12'>
              <p className='px-sm-4'>PaintingDenting Contractor will help renovate your house in <span className='title_sm'>6 simple steps Book your Free inspection today!</span></p>
            </div>
            <div className='col-sm-4 px-sm-0 col-12'>
              <button className=' p-sm-2 border-0 bg-danger rounded-5 text-light font_res2' onClick={()=>{handleClick('/ourstory/formpage')}}>BOOK APPOINTMENT NOW !!!<span className='d-inline-block grid_icon  lh-0 pt-0 back_forth'><img src={rightarrow} alt='arrow' className='img-fluid ' /></span></button>

            </div>
          </div>

          <div className='col-12 p-2 mt-5 shadow  overflow-hidden'>
            <img src={workflow} alt='workflow' className='img-fluid'></img>
          </div>

          <div className='row my-5'>
            <div className='col-md-5'>
              <h1 className='title_md'>Some Of Our Trusted Opinion Industry Partner</h1>
              <p className=''>Suniel Grover the Star of Comedy world ,has share their some opinion based on Personal experience <span className='title_sm'> "Ahahah, my friends! Asian Paints is like a vibrant 'gutthi' of colors for your home! And, trust me, their hues will complement your interior work like a perfect 'jodi'!"</span>
              </p>
            </div>
            <div className='col-md-7'>
              <iframe className='wall_design2 w-100' src="https://www.youtube.com/embed/xlDuCEem4bs?si=U1Ltv5raRTO7p45c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div className='row my-5'>
            <div className='col-md-5'>
              <h1 className='title_md'><span><img src={location} alt='location' className='grid_icon_div  p-2 scaling_c' /></span>You Could Find us here...</h1>
              <p className=''>We are located here any time can contact and book visit appointment... </p>
            </div>
            <div className='col-md-7'>
              <iframe className='col-12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30150.733751007607!2d72.95607984066012!3d19.158404538468623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8b34363b207%3A0xf26b272c67048bf0!2sMahavir%20Electric%20%26%20Hardware!5e0!3m2!1sen!2sin!4v1725292827261!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
