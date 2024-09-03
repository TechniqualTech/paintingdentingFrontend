import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

export default function Num_count() {
    const [ex_count, ex_setCount] = useState(0);
    const [wk_count, wk_setCount] = useState(0);
    const [cu_count, cu_setCount] = useState(0);
    const [su_count, su_setCount] = useState(0);

    const [refcount, inView] = useInView({
        threshold: 0.5, // Adjust the threshold to trigger the animation when the element is 50% in view
      });

    useEffect(() => {
        if (inView) {
            ex_setCount(30);
            wk_setCount(1000)
            cu_setCount(1500)
            su_setCount(24)
        }
      }, [inView]);

    return (
        <div className=' position-absolute  d-flex justify-content-center align-items-center w-100 overflow-hidden top-50' ref={refcount}>
            <ul className='list-unstyled d-flex  col-12 text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="10%" data-aos-trigger="scroll" data-aos-anchor=".temp_anim11" data-aos-anchor-placement="top-bottom" data-aos-easing="linear" >
                <li className='col-3'>
                    <h2 className='title_lg font_res'><CountUp start={0} end={ex_count} duration={5} /></h2>
                    <p className='title_sm font_res2'>Year Experience</p>
                </li>
                <li className='col-3'>
                    <h2 className='title_lg font_res'><CountUp start={0} end={wk_count} duration={5} /></h2>
                    <p className='title_sm font_res2'>Total Works</p>
                </li>
                <li className='col-3'>
                    <h2 className='title_lg font_res'><CountUp start={0} end={cu_count} duration={5} /></h2>
                    <p className='title_sm font_res2'>Happy Customers</p>
                </li>
                <li className='col-3'>
                    <h2 className='title_lg font_res'><CountUp start={0} end={su_count} duration={5} /></h2>
                    <p className='title_sm font_res2'>Hour Of Support</p>
                </li>
            </ul>

        </div>
    )
}
