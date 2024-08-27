import React,{useState} from 'react'
import arrow_right from '../assets/icons/icons8-double-right-48.png'
import Interior from "../components/services/interior"
import Exterior from "../components/services/exterior"
import Metal from "../components/services/metal"
import Water from "../components/services/water"
import Wood from "../components/services/wood"


export default function Services() {
    const [currentComponent, setComponent] = useState("All")
    const design = (d) => {
        setComponent(d)
    }
    return (
        <div className='container-fluid mt-5'>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim2" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                    <div className='horizontal_line'></div>
                    <div className='position-absolute bg-white text-center'>
                        <h2 className='p-0 m-0 title_md'>Services</h2>
                        <p className='p-0 m-0'>We Help You With</p>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-4 shadow'>
                        <h1 className='title_md m-2'>Services List</h1>
                        <hr className='hr-gray'></hr>
                        <ul className=' list-unstyled'>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c' onClick={() => design('Interior')}>Interior Painting</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c' onClick={() => design('Exterior')}>Exterior Painting</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c' onClick={() => design('Metal')}>Metal Painting</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c' onClick={() => design('Wood')}>Wood Painting</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c' onClick={() => design('Water')}>Water Proofing</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c'>Color Visualizer</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c'>Stencils</a></li>
                            <li className='bg-light icon_color_p p-2 m-2 hover_redbg'><span className='float-start grid_icon p-2 pt-0'><img src={arrow_right} alt='next' className='img-fluid icon_color_c' /></span><a href='#' className='text-decoration-none icon_color_c'>Texture</a></li>
                        </ul>
                    </div>
                    <div className='col-8'>
                        <div className='container'>
                            {currentComponent === "Interior" ? <Interior /> : currentComponent === "Exterior" ? <Exterior /> : currentComponent === "Metal" ? <Metal /> : currentComponent === "Water" ? <Water />: currentComponent === "Wood" ? <Wood /> : <Interior />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
