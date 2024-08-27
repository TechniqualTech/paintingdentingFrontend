import { React, useState, useEffect, useRef } from 'react'
import '../../css/entrybody.css'
import entrybody from '../../assets/images/entryhouse.jpg'
import notebook from '../../assets/icons/icons8-notebook-100.png'
import search from '../../assets/icons/icons8-search-100.png'
import shine from '../../assets/icons/icons8-shine-96.png'
import paint from '../../assets/icons/icons8-paint-100.png'
import sofa from '../../assets/images/CC_LIVING_ROOM179.webp'

import bag from '../../assets/icons/briefcase.png'
import checklist from '../../assets/icons/checklist.png'
import graph from '../../assets/icons/graph-analysis.png'
import telescope from '../../assets/icons/telescope.png'
import sun from '../../assets/icons/sun.png'
import calender from '../../assets/icons/calendar.png'

import wall_design from '../../assets/images/wall_design.jpg'
import wall_design2 from '../../assets/images/wall_design2.jpg'
import beadroom from '../../assets/images/beadroom.jpg'
import rightarrow from '../../assets/images/icons8-right-arrow-30.png'

import All from '../design_component/all';
import Beadroom from '../design_component/beadroom';
import Kids from '../design_component/kids';
import Living from '../design_component/living';
import Serviceproduct from '../serviceproduct'
import Faq from '../faq'
import Parallex_img from '../parallex_img'
import Industry_partner from '../industry_partner'
import Contact from '../contact'
import Blog from "../blog"
import Testimonial from "../testimonial"
import Ptc from "../ptc"

export default function Entrybody() {
    const [currentComponent, setComponent] = useState("All")
    const design = (d) => {
        setComponent(d)
    }

    useEffect(() => {
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className='position-relative mt-4'>
                <div className='container-fluid p-0 m-0'>
                    <img src={entrybody} alt='entry_body' className='img-fluid'></img>
                </div>
                <div className='fw-bolder text-light position-absolute top-50 ms-4'  data-aos="fade-up" data-aos-once="true" data-aos-duration="2000"  data-aos-offset="200">
                    <h2 className=' title_lg'>Your Home Makes You a Happy Environment</h2>
                    <p className='text-white'>India’s Best Homes Interior Work Service</p>
                </div>
            </div>
            <div className='container-fluid my-5 footer temp_anim'>
                <div className='row p-4'>
                    <div className='col-5 p-4 ' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                        <button className='border-0 text-danger mb-4'>About us</button>
                        <h2 className='fw-bold title_md'>Looking for the best painters or painting services for your home?</h2>
                        <p>No matter where on earth we go, we act in response to colors. However, the significance of color is often undervalued. Choosing the right painters for our home is essential to us. And the easiest way to pick the most excellent paint colors is to start with our simple color engine. Check out the extensive range of splendid colors, and the conventional color schemes won't bind you for a scrupulous decorating style. Our paint visualizer provides a breathtaking way to create inspiration boards for your much-loved ideas. So you can keep all your color ideas in one dot. ApnaPainter’s color engine is the sneakiest way to add color to your walls without losing the comforting vibe of the room.</p>
                        <button className='px-5 py-2 border-0 bg-danger rounded text-light'>Read More <span className='d-inline-block grid_icon p-2 lh-0 pt-0 back_forth'><img src={rightarrow} alt='arrow' className='img-fluid ' /></span></button>
                    </div>
                    <div className='col-7 d-flex  justify-content-center align-items-center'>
                        <div className='col-6 flex-column  justify-content-center align-items-center ' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                            <div className='col-11 rounded bg-white p-5 mt-4 shadow hover_red_parent scale icon_color_p'>
                                <div className='grid_icon_div rounded-circle  d-flex align-items-center justify-content-center mb-4 child'>
                                    <img className=' img-fluid grid_icon icon_color_c' src={notebook}></img>
                                </div>
                                <h2 className='title_sm'>Plan</h2>
                                <p>Schedule a free onsite consultation by giving us a call.</p>
                            </div>
                            <div className='col-11  rounded bg-white  p-5 mt-4 shadow hover_red_parent scale icon_color_p'>
                                <div className='grid_icon_div rounded-circle  d-flex align-items-center justify-content-center mb-4 child'>
                                    <img className=' img-fluid grid_icon icon_color_c' src={paint}></img>
                                </div>
                                <h2 className='title_sm'>Paint</h2>
                                <p>Watch on apnapainter's expert painters beautifully transform your space..</p>
                            </div>
                        </div>
                        <div className='col-6 flex-column mx-auto ' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">

                            <div className='col-11  rounded bg-white  p-5 mt-4 shadow hover_red_parent scale icon_color_p'>
                                <div className='grid_icon_div rounded-circle  d-flex align-items-center justify-content-center mb-4 child'>
                                    <img className=' img-fluid grid_icon icon_color_c' src={search}></img>
                                </div>
                                <h2 className='title_sm'>Preview</h2>
                                <p>Get personalized design & color assistance to your living space.</p>
                            </div>
                            <div className='col-11  rounded bg-white p-5 mt-4 shadow hover_red_parent scale icon_color_p'>
                                <div className='grid_icon_div rounded-circle d-flex align-items-center justify-content-center mb-4 child    '>
                                    <img className=' img-fluid grid_icon icon_color_c' src={shine}></img>
                                </div>
                                <h2 className='title_sm'>Finishing and Handover</h2>
                                <p>The project team has diligently cleaned the premises, removing any paint residues, debris, or equipment that might have been left behind during the painting process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 m-0 position-relative temp_anim11'>
                <div className='till_now overflow-hidden'>
                    <img src={sofa} alt='entry_body' className='img-fluid translate-middle-y '></img>
                </div>
                <div className=' position-absolute  d-flex justify-content-center align-items-center w-100 overflow-hidden top-50'>
                    <ul className='list-unstyled d-flex  col-12 text-center' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear" >
                        <li className='col-3'>
                            <h2 className='title_lg'>30</h2>
                            <p className='title_sm'>Year Experience</p>
                        </li>
                        <li className='col-3'>
                            <h2 className='title_lg'>1000</h2>
                            <p className='title_sm'>Total Works</p>
                        </li>
                        <li className='col-3'>
                            <h2 className='title_lg'>1500</h2>
                            <p className='title_sm'>Happy Customers</p>
                        </li>
                        <li className='col-3'>
                            <h2 className='title_lg'>24</h2>
                            <p className='title_sm'>Hour Of Support</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='container-fluid temp_anim2'>
                <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim2" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='horizontal_line'></div>
                    <div className='position-absolute bg-white text-center'>
                        <h2 className='p-0 m-0 title_md'>Services</h2>
                        <p className='p-0 m-0'>We Help You With</p>
                    </div>
                </div>
                <div className='mx-5' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim2" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='row'>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon  m-4'>
                                <img src={bag} alt="bag" className='img-fluid'></img>
                            </div>
                            <div>
                                <p className='title_sm  white_child'>Interior Painting</p>
                                <p>Our décor experts study the existing décor and understand requirements in the
                                    first visit. We transform your space into the home of your dreams within timelines.</p>
                            </div>
                        </div>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon  m-4'>
                                <img src={checklist} alt="bag" className='img-fluid'></img>
                            </div>
                            <div>
                                <p className='title_sm white_child'>Exterior Painting</p>
                                <p>Exterior painting may be the most-effective defence for your house against
                                    external environmental factors. So choosing the right exterior paint is critical...</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon m-4'>
                                <img src={graph} alt="bag" className='img-fluid'></img>

                            </div>
                            <div>
                                <p className='title_sm white_child '>Wood Coating</p>
                                <p>Wood Painting Preparation- Useful Wood Painting Tools and Tips It’s imperative to
                                    follow proper technique when using wood paint to increase its longevity and restore...</p>
                            </div>
                        </div>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon  m-4'>
                                <img src={telescope} alt="bag" className='img-fluid'></img>

                            </div>
                            <div>
                                <p className='title_sm white_child'>Metal Painting</p>
                                <p>Refurbish your metal items at home such as grills, metal tools and equipment,
                                    basically any metal surface with our metal painting services at ApnaPainter...</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon  m-4'>
                                <img src={sun} alt="bag" className='img-fluid'></img>

                            </div>
                            <div>
                                <p className='title_sm white_child'>Water Proofing</p>
                                <p>ApnaPainter is the reckoned service providers of Waterproofing Services,
                                    Injection Grouting Services, Terrace Waterproofing, Basement Waterproofing...   </p>
                            </div>
                        </div>
                        <div className='col-6  d-flex border-top white_parent'>
                            <div className='service_icon m-4'>
                                <img src={calender} alt="bag" className='img-fluid'></img>

                            </div>
                            <div>
                                <p className='title_sm white_child'>Wall Textures</p>
                                <p>A textured wall in your home can create a more dramatic effect than a regular
                                    painted wall or one with wallpaper. Make a style statement with these wall texture... </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid temp_anim3'>
                <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim3" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='horizontal_line'></div>
                    <div className='position-absolute bg-white text-center'>
                        <h2 className='p-0 m-0 title_md'>Features</h2>
                        <p className='p-0 m-0'>Let's Explore it</p>
                    </div>
                </div>
                <div className='mx-5 white_parent' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim3" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='row'>
                        <div className='col-5'>
                            <div>
                                <h2 className='title_md white_child'>
                                    Fall In Love With Wall Texture House Painting</h2>
                                <p>
                                    Choosing the perfect color for your home's interior is a crucial decision, as it sets the tone and adds personality to your living space. When it comes to revamping your living room, repainting the walls can work wonders for its overall look. With paint, you have endless possibilities to create captivating washes, and textures, and replace outdated effects with sophisticated brushwork. One remarkable way to enhance your living room is by creating a striking feature wall using two shades of the same color, where one is darker than the other, resulting in a mesmerizing effect. Another technique to add a touch of elegance is to paint the sides of the walls in different hues. This approach not only breathes new life into dated paint but also brings a modern twist with minimal effort. Additionally, introducing an artistic painting idea on a single wall can effortlessly rejuvenate the entire ambiance of your living room. At ApnaPainter, we offer creative and innovative painting solutions to help you elevate your living space with ease.
                                </p>
                                <button className='px-5 py-2 border-0 bg-danger rounded text-light'>Get Started</button>
                            </div>

                        </div>
                        <div className='col-7'>
                            <div className='position-relative w-100 h-100 py-4'>
                                <div className='position-absolute wall_design overflow-hidden end-0 scale'>
                                    <img src={wall_design} alt='wall_design' className='img-fluid p-1 bg-white'></img>
                                </div>
                                <div className='position-absolute wall_design2 overflow-hidden bottom-0 scale'>
                                    <img src={wall_design2} alt='wall_design2' className='img-fluid p-1 bg-white'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row flex-row-reverse white_parent'>
                        <div className='col-5' data-aos="fade-up" data-aos-duration="2000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim3" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                            <div>
                                <h2 className='title_md white_child'>
                                    Wall Painting Ideas for Bedroom</h2>
                                <p>When it comes to wall painting ideas for your bedroom, the possibilities are endless</p>
                                <p><span className='title_sm'><svg xmlns="http://www.w3.org/2000/svg" fill="#FA5252" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4830714 2 2 6.4830754 2 12 C 2 17.516925 6.4830714 22 12 22 C 17.516929 22 22 17.516925 22 12 C 22 6.4830754 17.516929 2 12 2 z M 12 3 C 16.976489 3 21 7.0235146 21 12 C 21 16.976485 16.976489 21 12 21 C 7.0235112 21 3 16.976485 3 12 C 3 7.0235146 7.0235112 3 12 3 z M 16.490234 8.9960938 A 0.50005 0.50005 0 0 0 16.146484 9.1464844 L 10.5 14.792969 L 7.8535156 12.146484 A 0.50005 0.50005 0 1 0 7.1464844 12.853516 L 10.146484 15.853516 A 0.50005 0.50005 0 0 0 10.853516 15.853516 L 16.853516 9.8535156 A 0.50005 0.50005 0 0 0 16.490234 8.9960938 z" /></svg>Geometric Shapes:</span>Create a modern look by painting geometric shapes on your walls. You can choose different shapes and colours to create a unique and eye-catching design.</p>
                                <p><span className='title_sm'><svg xmlns="http://www.w3.org/2000/svg" fill="#FA5252" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4830714 2 2 6.4830754 2 12 C 2 17.516925 6.4830714 22 12 22 C 17.516929 22 22 17.516925 22 12 C 22 6.4830754 17.516929 2 12 2 z M 12 3 C 16.976489 3 21 7.0235146 21 12 C 21 16.976485 16.976489 21 12 21 C 7.0235112 21 3 16.976485 3 12 C 3 7.0235146 7.0235112 3 12 3 z M 16.490234 8.9960938 A 0.50005 0.50005 0 0 0 16.146484 9.1464844 L 10.5 14.792969 L 7.8535156 12.146484 A 0.50005 0.50005 0 1 0 7.1464844 12.853516 L 10.146484 15.853516 A 0.50005 0.50005 0 0 0 10.853516 15.853516 L 16.853516 9.8535156 A 0.50005 0.50005 0 0 0 16.490234 8.9960938 z" /></svg>Abstract Art:</span>If you want to add a bit of colour to your bedroom, consider painting abstract art. This type of art is perfect for adding a pop of colour to your walls.it.</p>
                                <p><span className='title_sm'><svg xmlns="http://www.w3.org/2000/svg" fill="#FA5252" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4830714 2 2 6.4830754 2 12 C 2 17.516925 6.4830714 22 12 22 C 17.516929 22 22 17.516925 22 12 C 22 6.4830754 17.516929 2 12 2 z M 12 3 C 16.976489 3 21 7.0235146 21 12 C 21 16.976485 16.976489 21 12 21 C 7.0235112 21 3 16.976485 3 12 C 3 7.0235146 7.0235112 3 12 3 z M 16.490234 8.9960938 A 0.50005 0.50005 0 0 0 16.146484 9.1464844 L 10.5 14.792969 L 7.8535156 12.146484 A 0.50005 0.50005 0 1 0 7.1464844 12.853516 L 10.146484 15.853516 A 0.50005 0.50005 0 0 0 10.853516 15.853516 L 16.853516 9.8535156 A 0.50005 0.50005 0 0 0 16.490234 8.9960938 z" /></svg>Textured Walls:</span>For a unique touch, consider adding texture to your walls. This could be done by painting with a sponge or by using a textured paint.</p>

                                <button className='px-5 py-2 border-0 bg-danger rounded text-light'>Get Started</button>
                            </div>

                        </div>
                        <div className='col-7' data-aos="fade-up" data-aos-duration="2000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim3" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                            <div className='position-relative w-100 h-100 my-4 scale'>
                                <img src={beadroom} alt='beadroom' className='img-fluid pe-5'></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid temp_anim4'>
                <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim4" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='horizontal_line  col-4'></div>
                    <div className='position-absolute bg-white text-center'>
                        <h2 className='p-0 m-0 title_md'>Some Designs</h2>
                        <p className='p-0 m-0'>That's really make your day and night</p>
                    </div>
                </div>
                <div className='container'>
                    <ul className='list-unstyled d-flex flex-row justify-content-center'>
                        <li className=' px-3 py-1 mx-1  bg-danger rounded-pill hover_redbg red_parent'><a className='text-decoration-none text-white red_child' onClick={() => design('All')}>All</a></li>
                        <li className=' px-3 py-1 mx-1 rounded-pill hover_redbg red_parent'><a className='text-decoration-none text-dark red_child' onClick={() => design('Beadroom')}>Badroom</a></li>
                        <li className=' px-3 py-1 mx-1 rounded-pill hover_redbg red_parent'><a className='text-decoration-none text-dark red_child' onClick={() => design('Living')}>Living Room</a></li>
                        <li className=' px-3 py-1 mx-1 rounded-pill hover_redbg red_parent'><a className='text-decoration-none text-dark red_child' onClick={() => design('Kids')}>Kids Room</a></li>
                    </ul>
                </div>
                <div className='container'>
                    {currentComponent === "All" ? <All /> : currentComponent === "Beadroom" ? <Beadroom /> : currentComponent === "Kids" ? <Kids /> : currentComponent === "Living" ? <Living /> : <All />}
                </div>
            </div>
            <div className='container-fluid temp_anim5'>
                <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim5" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='horizontal_line  col-4'></div>
                    <div className='position-absolute bg-white text-center'>
                        <h2 className='p-0 m-0 title_md'>Product and Services</h2>
                        <p className='p-0 m-0'>We will do Our Best</p>
                    </div>
                </div>
                <Serviceproduct />
                <Faq />
            </div>
            <Parallex_img />
            <Industry_partner />
            <Testimonial />
            <Blog />
            <Contact />
        </div>
    )
}
