import React from 'react'
import exterior_service from '../../assets/images/interior_services/exterior_services.jpg'

import ex1 from '../../assets/images/interior_services/ex1.png'
import ex2 from '../../assets/images/interior_services/ex2.jpg'
import ex3 from '../../assets/images/interior_services/ex3.jpg'
import ex4 from '../../assets/images/interior_services/ex4.jpg'

export default function Exterior() {
  return (
    <div className='container-fluid d-flex flex-column shadow' id='exterior'>
      <div className=''>
        <img src={exterior_service} alt='interior_service' className='img-fluid'></img>
      </div>
      <div className='m-2'>
        <h1 className='title_md'>BEST WAY TO GET PERFECT EXTERIOR FINISHES</h1>
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center align-item-center'>
          <div className='col-6 d-flex align-items-center '>
            <img src={ex1} alt='step1' className='img-fluid rounded-circle'></img>
          </div>

          <div className='col-6 m-2'>
            <h1 className='title_sm'>
              1. Let's Roll
            </h1>
            <p className='font_small'>Starts with removing all light fixtures and other decorative items and covering immovables like air conditioning units and plants if any. In case of large exteriors, scaffolding will be required. A sturdy ladder is always required in the premises during the painting activity. Tools like steel wire brush, garden hose and safety goggles and a mask will always come in handy while painting exteriors.<b>Tools Used : Plastic Sheets, Scaffolding, Ladders, Wire Brush, Garden Hose</b></p>
          </div>
        </div>
        <div className='d-flex flex-row-reverse justify-content-center align-item-center'>
          <div className='col-6 d-flex align-items-center '>
            <img src={ex2} alt='step1' className='img-fluid rounded-circle'></img>
          </div>

          <div className='col-6 m-2'>
            <h1 className='title_sm'>
              2. Getting Rid of Mildew
            </h1>
            <p className='font_small'>Exterior walls are scrubbed thoroughly to remove algae, fungi and mildew using steel wire brush. Mild solution (like bleaching powder in water) can also be used to get rid of mildew and algae from the walls. Walls need to dry completely. High pressure water jet can also be used to wash away dirt and any old paint flakes.<b>Tools Used : Steel Wire Brush</b></p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-item-center'>
          <div className='col-6 d-flex align-items-center '>
            <img src={ex3} alt='step1' className='img-fluid rounded-circle'></img>
          </div>

          <div className='col-6 m-2'>
            <h1 className='title_sm'>

              3. Crack Filling & Sanding
            </h1>
            <p className='font_small'>Cracks need to be attended on priority. Cut in along the length of the crack using a knife. Crack Filling compounds are used to fill in the cracks. Surface is then sanded using sandpaper to even out the surface.<b>Tools Used : Putty Knife,Sandpaper</b></p>
          </div>

        </div>
        <div className='d-flex flex-row-reverse justify-content-center align-item-center'>
          <div className='col-6 d-flex align-items-center '>
            <img src={ex4} alt='step1' className='img-fluid rounded-circle'></img>
          </div>

          <div className='col-6 m-2'>
            <h1 className='title_sm'>

            4. Finishing Touches
            </h1>
            <p className='font_small'>Exterior Paints provide protection from extreme weather conditions that house is subjected to. Minimum of 2 coats will be applied to achieve durable, consistent layer. Though, painting will last for years, it is advisable to regularly clean the surface, for long lasting results. While choosing colours, it is good to consider the neighbouring colour scheme as well. The external environment can also affect the overall look of the house.<b>Tools Used : Roller , Brush</b></p>
          </div>

        </div>
      </div>
    </div>
  )
}
