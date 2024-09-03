import React from 'react'
import waterproofing from '../../assets/images/interior_services/waterproofing.jpg'

export default function Water() {
  return (
    <div className='container-fluid d-flex flex-column shadow font_small' id='water'>
      <div className='mx-auto'>
        <img src={waterproofing} alt='interior_service' className='img-fluid'></img>
      </div>
      <div className='m-2'>
        <h1 className='title_md'>Shield your home fromwater's wrath!</h1>
        <div className='font_small'>
          <p>Trust ApnaPainter's to safegurad your spaces and ejoy a worry-free life, come rain or shine. Discover our top-notch waterproofing solutions designed to protect your spaces from water damage.</p>
          <p>Welcome to our comprehensive waterproofing services designed to safeguard your property against water damage and moisture infiltration. Our team of skilled professionals is dedicated to delivering high-quality solutions tailored to meet your specific needs. Whether you're looking to protect your home, office, or commercial space, we have the expertise and experience to provide reliable waterproofing solutions that stand the test of time.</p>
          <p>Our waterproofing services cover a wide range of areas, including basements, roofs, foundations, balconies, and more. We understand the importance of thorough preparation and meticulous application to ensure maximum effectiveness and longevity. Using premium-quality materials and advanced techniques, we offer durable waterproofing solutions that provide lasting protection against leaks, mold, mildew, and other water-related issues.</p>
          <p>At ApnaPainter, we prioritize customer satisfaction and strive to exceed your expectations with every project. From initial assessment to project completion, our team works closely with you to understand your requirements and provide personalized recommendations that address your concerns effectively. Whether you're dealing with existing water damage or looking to prevent future problems, you can trust us to deliver reliable waterproofing solutions that enhance the integrity and value of your property.</p>
        </div>
      </div>
    </div>
  )
}
