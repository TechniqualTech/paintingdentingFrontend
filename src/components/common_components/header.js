import React, { useState }  from 'react'
import logo from '../../assets/logo/Weblogo.png'
import phone from '../../assets/icons/white_phone.png'
//routing
import { useNavigate } from 'react-router-dom';

//contexts
import { useContext } from 'react';
import { CurrentContext} from '../../contexts/CurrentContext'

export default function Header() {
    //nav active item
    const [activeIndex, setActiveIndex] = useState(0);
    const handleActive = (index) => {
        setActiveIndex(index);
      };
    //routing object
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page); // Navigate to ComponentB
      };
    //context object
    const { current, setCurrent } = useContext(CurrentContext);

    //setting current section
    const handleNavClick = (page,section) => {
        handleClick(page)
        setCurrent(section);
      };
      
    //click handiling
    function logo_func(e) {
        e.preventDefault();
    }
    //handing hamburg_menu
    // if (document.querySelector('.hamburg_menu')) {
    //     console.log("i am called");

    //     const hamburg_menu = document.querySelector('.hamburg_menu');
    //     const hamburg_container = document.querySelector('.hamburg_container');
    //     hamburg_menu.addEventListener('click', () => {
    //         hamburg_container.classList.toggle('hamburg_container_show');
    //     })
    // }
    function hamburg(toggle){
        const hamburg_container = document.querySelector('.hamburg_container');
        hamburg_container.classList.toggle(`hamburg_container_${toggle}`);

    }

    return (
        <div className="container-fluid header_nav fixed-top bg-white temp_anim6" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim6" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
            <div className="container d-flex  justify-content-between align-items-center ">
                <div className=" col-2">
                    <a href='#' onClick={(event) => { logo_func(event) }}><img src={logo} alt='logo' /></a>
                </div>
                <div className='d-md-flex flex-row justify-content-between align-items-center col-lg-8 col-9 d-none'>
                    <div>
                        <ul className='list-unstyled d-flex flex-row  m-0 me-lg-5 me-2'>
                            <li className='pe-4'><a href='#' className={`text-decoration-none ${activeIndex === 0 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/');handleActive(0)}}>Home</a></li>
                            <li className='pe-4'><a className={`text-decoration-none ${activeIndex === 1 ? 'text-danger' : 'text-dark'} hover_red`} onClick={() => {handleNavClick('/','gallery');handleActive(1)}}>Gallery</a></li>
                            <li className='pe-4'><a href='#' className={`text-decoration-none ${activeIndex === 2 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/service');handleActive(2)}}>Services</a></li>
                            <li className='pe-4'><a href='#' className={`text-decoration-none ${activeIndex === 3 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/project');handleActive(3)}}>Projects</a></li>
                            <li className='pe-4'><a href='#' className={`text-decoration-none ${activeIndex === 4 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/ourstory');handleActive(4)}}>OurStory</a></li>
                        </ul>
                    </div>
                    <div>
                    <button className='px-3 py-1 rounded bg-danger text-white border-0 text-nowrap mx-3'><span className='text-white font_small'><img src={phone} alt='location' className='grid_icon  p-2 scaling_c' />+919821618045</span></button>

                    </div>

                </div>
                <button className='hamburg_menu d-md-none border-0 d-md-none' onClick={()=>{hamburg('show')}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className='hamburg_container position-absolute top-0 start-0 col-12 rounded mt-5 hamburg_container_hide bg-white'>
                    <ul className='list-unstyled d-flex flex-column  m-2'>
                        <li className='p-2 '><a href='#' className={`text-decoration-none ${activeIndex === 0 ? 'text-danger' : 'text-dark'} hover_red`}  onClick={()=>{handleClick('/');handleActive(0)}}>Home</a></li>
                        <li className='p-2'><a  className={`text-decoration-none ${activeIndex === 1 ? 'text-danger' : 'text-dark'} hover_red`} onClick={() => {handleNavClick('/','gallery');handleActive(1)}}>Gallery</a></li>
                        <li className='p-2'><a href='#' className={`text-decoration-none ${activeIndex === 2 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/service');handleActive(2)}}>Services</a></li>
                        <li className='p-2'><a href='#' className={`text-decoration-none ${activeIndex === 3 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/project');handleActive(3)}}>Projects</a></li>
                        <li className='p-2'><a href='#' className={`text-decoration-none ${activeIndex === 4 ? 'text-danger' : 'text-dark'} hover_red`} onClick={()=>{handleClick('/ourstory');handleActive(4)}}>OurStory</a></li>
                    </ul>
                    <button className='px-3 py-1 rounded bg-danger text-white border-0 text-nowrap mx-3'><span className='text-white'><img src={phone} alt='location' className='grid_icon  p-2 scaling_c' />+919821618045</span></button>
                </div>
            </div>
        </div>
    )
}
