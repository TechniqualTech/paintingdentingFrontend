import React from 'react'
import logo from '../../assets/logo/Weblogo.png'
export default function Header() {
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
    function hamburg(){
        const hamburg_container = document.querySelector('.hamburg_container');
        hamburg_container.classList.toggle('hamburg_container_show');

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
                            <li className='pe-4'><a href='#' className='text-decoration-none text-danger hover_red'>Home</a></li>
                            <li className='pe-4'><a href='#' className='text-decoration-none text-dark hover_red'>Gallery</a></li>
                            <li className='pe-4'><a href='#' className='text-decoration-none text-dark hover_red'>Services</a></li>
                            <li className='pe-4'><a href='#' className='text-decoration-none text-dark hover_red'>Projects</a></li>
                            <li className='pe-4'><a href='#' className='text-decoration-none text-dark hover_red'>OurStory</a></li>
                        </ul>
                    </div>
                    <div>
                        <button className='px-lg-3 px-2 py-1 rounded bg-danger text-white border-0 text-nowrap '><span className='p-2 '><svg className="bi bi-telephone" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </svg></span>Contact us</button>
                    </div>

                </div>
                <button className='hamburg_menu d-md-none border-0 d-md-none' onClick={()=>{hamburg()}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className='hamburg_container position-absolute top-0 start-0 col-12 rounded mt-5 hamburg_container_hide'>
                    <ul className='list-unstyled d-flex flex-column  m-2'>
                        <li className='p-2 '><a href='#' className='text-decoration-none text-dark'>Home</a></li>
                        <li className='p-2'><a href='#' className='text-decoration-none text-dark'>Gallery</a></li>
                        <li className='p-2'><a href='#' className='text-decoration-none text-dark'>Services</a></li>
                        <li className='p-2'><a href='#' className='text-decoration-none text-dark'>Projects</a></li>
                        <li className='p-2'><a href='#' className='text-decoration-none text-dark'>OurStory</a></li>
                    </ul>
                    <button className='px-3 py-1 rounded bg-danger text-white border-0 text-nowrap mx-3'><span className='p-2 '><svg className="bi bi-telephone" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                    </svg></span>Contact us</button>
                </div>
            </div>
        </div>
    )
}
