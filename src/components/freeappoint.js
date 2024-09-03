import React from 'react'
import { useForm } from 'react-hook-form';
import rightarrow from '../assets/images/icons8-right-arrow-30.png'
import '../css/entrybody.css'

export default function Freeappoint() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='container-fluid my-5 min-vh-100 p-0'>
            <div className='freeappointbg col-12 min-vh-100 p-0 d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className='col-md-5 text-light p-lg-5 mx-auto d-none d-md-block'>
                        <h1 className='font_big'>YOUR MOST TRUSTED</h1>
                        <h1 className='title_lg font_res2'> PAINTING CONTRACTOR</h1>
                        <button className='px-lg-5 py-lg-2 border-0 bg-dark rounded text-light font_res2'>BOOK APPOINTMENT NOW !!!<span className='d-inline-block grid_icon p-2 lh-0 pt-0 back_forth'><img src={rightarrow} alt='arrow' className='img-fluid ' /></span></button>
                    </div>
                    <div className='col-md-5 p-lg-5 mx-auto'>
                        <form
                            className="m-4 p-4 shadow rounded-5 bg-white col-10"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h1 className="title_md">BOOK FREE SITE VISIT</h1>
                            <p className='font_small'>Get Complimentary Estimation and Colour Consultation from Our Experts</p>
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control mt-4"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                            <input
                                type="number"
                                placeholder="Mobile"
                                className="form-control mt-4"
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    minLength: { value: 10, message: "Mobile number must be 10 digits" },
                                })}
                            />
                            {errors.mobile && <p>{errors.mobile.message}</p>}
                            <select
                                name="dropdown"
                                id="dropdown"
                                className="form-control mt-4"
                                {...register("dropdown", { required: "Please select an option" })}
                            >
                                <option value="">Select an City</option>
                                <option value="option1">Ghansoli</option>
                                <option value="option2">Airoli</option>
                                <option value="option3">Belapur</option>
                                <option value="option4">Rabele  </option>
                            </select>
                            {errors.dropdown && <p>{errors.dropdown.message}</p>}
                            <button
                                className="px-5 py-2 my-4 border-0 bg-danger rounded text-light"
                                type="submit"
                            >
                                BOOK APPOINTMENT
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}
