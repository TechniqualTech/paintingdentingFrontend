import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import cv from '../../src/assets/gif/Color Visualizer.gif'
import ep from '../../src/assets/gif/Exterior Painting - 1.gif'
import ip from '../../src/assets/gif/Interior Painting.gif'
import mp from '../../src/assets/gif/Metal Painting - 1.gif'
import stan from '../../src/assets/gif/Stencils.gif'
import textu from '../../src/assets/gif/Textures.gif'
import wp from '../../src/assets/gif/Water Proofing - 1.gif'
import Wop from '../../src/assets/gif/Wood Painting.gif'


export default function Serviceproduct() {
    return (
        <div className='container d-flex flex-wrap text-center title_sm temp_anim11'>
            <div className='col-3' data-aos="fade-up" data-aos-duration="1500"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className='m-3 white_parent'>
                    <MDBCardImage src={cv} alt='...' position='top' className='p-5' />
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Color Visualizer
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={ep} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Exterior Painting
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="1700"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={ip} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            interior Painting
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="1800"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={mp} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Metal Painting
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="1900"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={stan} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Stencils
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="2000"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={textu} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Texture
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="2100"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={wp} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Water Proofing
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-3' data-aos="fade-up" data-aos-duration="2200"  data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear">
                <MDBCard className=' m-3 white_parent'>
                    <MDBCardImage src={Wop} alt='...' position='top' className='p-5'/>
                    <MDBCardBody>
                        <MDBCardText className='white_child'>
                            Wood Painting
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
}
