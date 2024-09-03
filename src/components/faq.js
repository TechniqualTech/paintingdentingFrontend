import React from 'react'
import next from "../../src/assets/icons/icons8-next-page-24.png"

export default function Faq() {
  return (
    <div className='container temp_anim12 my-4'>
      <div className='row'>
        <div className='col-md-4' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim12" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='p-md-4 m-md-4'>
                <p className='title_lg'> Frequently Asked</p>
                <p className='title_md'><b>Questions</b></p>
                <p>Got a question or a doubt? We've got the answers right here</p>
            </div>
        </div>
        <div className='col-md-8 flex-column' data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim12" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className='shadow p-3 my-3 rotate_p unblock_p white_parent' >
                <p className='title_sm m-0 white_child  '><span className='px-2 text-danger'>1.</span>What is PaintingDenting?<span className='float-end rotate_c'><img src={next} alt='next'/></span></p>
                <p className='d-none unblock_c'>PaintingDenting.in is the most reliable and easiest way to get your home painting done. Connecting well-trained painters to needful customers, ApnaPainter creates a platform with an automated process from booking to payment that is time-efficient and super smooth. We also provide waterproofing that has become an integral part to maintain the integrity of homes.</p>
            </div>
            <div className='shadow p-3 my-3 rotate_p unblock_p white_parent' >
                <p className='title_sm m-0 white_child'><span className='px-2 text-danger'>2.</span>Why PaintingDenting and not any local painter?<span className='float-end rotate_c'><img src={next} alt='next'/></span></p>
                <p className='d-none unblock_c'>We are true to our work and words. We do not charge a lump sum. We measure the exact square feet and ensure usage of materials promised. And yes, work is delivered on time . Our empanelled teams of painters are trained to deliver and are ably managed by a full team of project managers to assure job completion and satisfaction.</p>
            </div>
            <div className='shadow p-3 my-3 rotate_p unblock_p white_parent' >
                <p className='title_sm m-0 white_child'><span className='px-2 text-danger'>3.</span>Latest Home Painting Service Ideas?<span className='float-end rotate_c'><img src={next} alt='next'/></span></p>
                <p className='d-none unblock_c'>Whether you’re looking to get interior house painting service done with the best wall paints, want to revamp your home furniture that is looking a little worn out or give the metal surfaces in your home a nice shiny look with some polishing, our painting ideas have got you covered.</p>
            </div>
            <div className='shadow p-3 my-3 rotate_p unblock_p white_parent' >
                <p className='title_sm m-0 white_child'><span className='px-2 text-danger'>4.</span>How do we operate?<span className='float-end rotate_c'><img src={next} alt='next'/></span></p>
                <p className='d-none unblock_c'>We are here to help you with all your painting needs. One of the best house painting services in the business, ApnaPainter acts as a platform providing a range of professional home painting services including interior and exterior painting, wood painting, textures and stencils. We offer excellent bang for your buck with affordable house painting costs.</p>
            </div>
            <div className='shadow p-3 my-3 rotate_p unblock_p white_parent' >
                <p className='title_sm m-0 white_child'><span className='px-2 text-danger'>5.</span>Services provide by PaintingDenting<span className='float-end rotate_c'><img src={next} alt='next'/></span></p>
                <p className='d-none unblock_c'>When you start searching extensively for wall painters in Rohtak, Delhi, Banglore, Gurugram and other big cities/States in India, you might find a plethora of home painting services but then you need to choose the best option. When you find the one, you need to explain how you envision your home and the end result doesn’t turn out the way you had expected it. This is a problem that most of you face. With us you don’t have to look for ‘painters near me’ or ‘house painters near me’ anymore as we are already associated with some of the best painters in Haryana, Delhi and other major States.</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}
