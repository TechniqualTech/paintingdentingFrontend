import React, { useState, useEffect, useRef } from 'react'
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
    const testimonials = [
        {
            image: t1,
            name: 'Vicky Gupta',
            rating: [1, 2, 3, 4],
            testimonial: 'Painting good service. Professionally done. I’m happy with the final outcome and at very reasonable price .',
        },
        {
            image: t2,
            name: 'John Doe',
            rating: [1, 2, 3, 4],
            testimonial: 'Great experience! The team was very professional and did an excellent job.',
        },
        {
            image: t3,
            name: 'Jane Smith',
            rating: [1, 2, 3, 4],
            testimonial: 'I am very satisfied with the service. The quality of work was exceptional and the price was reasonable.',
        },
    ];
    const [divs, setDivs] = useState(testimonials);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDivs((prevDivs) => {
                const newDivs = [...prevDivs];
                newDivs.push(newDivs.shift());
                return newDivs;
            });
        }, 3200); // every 2 seconds
        return () => clearInterval(intervalId);
    }, []);




    return (
        <div className='container d-flex flex-md-row flex-column white_parent temp_anim14'>
            <div className='col-md-5 col-12'  {...getFadeUpAnimationAttributes({ duration: 1000, anchor: '.temp_anim14' })}>
                <h5 className='title_md white_child'>Testimonials</h5>
                <p>One of the aspects I appreciated the most was their efficiency. They completed the project on time and within the budget, which is always a relief for homeowners. The team worked diligently, and I was impressed by their commitment to getting the job done right the first time.</p>
            </div>
            <div className='overflow-hidden col-md-7 col-12 d-flex flex-row'>
                {divs.map((testimonial, index) => (
                    <div key={index} className={`col-12 flex-column footer rounded-4 mx-2 ${index === 0 ? 'animate-from-right' : ''}`} {...getFadeUpAnimationAttributes({ duration: 1500, anchor: '.temp_anim14' })}>
                        <div className='flex-row m-3'>
                            <img src={testimonial.image} alt='testimonial' className='img-fluid rounded-circle grid_icon_div shadow p-1'></img>
                            <div className='d-inline-flex flex-column mx-4'>
                                <h5 className='title_sm m-0'>{testimonial.name}</h5>
                                <ol className='list-unstyled d-flex flex-row m-0'>
                                    {testimonial.rating.map((_, index) => (
                                        <li key={index} className='grid_icon '><img src={star} alt='star' className='img-fluid p-1'></img></li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className='col-12 p-2 m-2'>
                            <p className='px-2'><span className='d-inline-block grid_icon p-2 lh-0 pt-0'><img src={rightQuot} alt='next' className='img-fluid ' /></span>{testimonial.testimonial}<span className='d-inline-block grid_icon p-2 lh-0 pt-0'><img src={leftQuot} alt='next' className='img-fluid' /></span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
