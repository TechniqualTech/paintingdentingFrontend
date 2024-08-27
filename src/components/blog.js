import React from 'react'
import blog1 from "../../src/assets/images/blog/blog1.jpg"
import blog2 from "../../src/assets/images/blog/blog2.jpg"
import blog3 from "../../src/assets/images/blog/blog3.jpg"
import { getFadeUpAnimationAttributes } from '../App'


export default function Blog() {
    return (
        <div className='container temp_anim15'>
            <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' {...getFadeUpAnimationAttributes({  duration: 1000, anchor: '.temp_anim15' })}>
                <div className='horizontal_line col-3'></div>
                <div className='position-absolute bg-white text-center'>
                    <h2 className='p-0 m-0 title_md'>Blogs</h2>
                    <p className='p-0 m-0'>Some Interesting things...</p>
                </div>
            </div>
            <div className='row flex-nowrap'>
                <div className='col-4 m-2 p-3 shadow rounded-5 white_parent' {...getFadeUpAnimationAttributes({  duration: 1500, anchor: '.temp_anim15' })}>
                    <img src={blog1} alt='blog1' className='img-fluid scale'></img>
                    <p className='text-secondary'>Kitchen</p>
                    <h2 className='title_sm white_child'>Top Kitchen Design Trends In 2022</h2>
                    <p>You may have a great Living Space and beautiful Bedrooms, but your Kitchen is the heart & soul of the home. It should stand out and enhance your entire living space. Also, if the kitchen decor is not up to the mark, your overall space won’t look very.....</p>
                </div>
                <div className='col-4 m-2 p-3 shadow rounded-5 white_parent' {...getFadeUpAnimationAttributes({  duration: 1600, anchor: '.temp_anim15' })}>
                    <img src={blog2} alt='blog1' className='img-fluid scale'></img>
                    <p className='text-secondary'>TV Wall Color</p>
                    <h2 className='title_sm white_child'>Transform Your Living Room With The Perfect Tv Wall Color</h2>
                    <p>Winters call for a cup of hot chocolate, slouching inside a comfy blanket, and binge-watching your favourite TV shows. Isn’t that the most fun part about the cold...</p>
                </div>
                <div className='col-4 m-2 p-3 shadow rounded-5 white_parent' {...getFadeUpAnimationAttributes({  duration: 1700, anchor: '.temp_anim15' })}>
                    <img src={blog3} alt='blog1' className='img-fluid scale'></img>
                    <p className='text-secondary'>Stairs</p>
                    <h2 className='title_sm white_child'>Stairs color combination</h2>
                    <p>Not only does it serve a utilitarian purpose in connecting two (or more) floors in a house, a staircase has become a defining point of design and style within....</p>
                </div>
            </div>
        </div>
    )
}
