import React, { useState } from 'react';
import { getFadeUpAnimationAttributes } from '../App';
import location from '../../src/assets/icons/icons8-location-100.png';
import project1 from '../../src/assets/images/projects/projects..jpg';
import project2 from '../../src/assets/images/projects/project2.jpg';
import project3 from '../../src/assets/images/projects/project3.jpg';
import project4 from '../../src/assets/images/projects/project4.jpg';
import project5 from '../../src/assets/images/projects/project5.jpg';
import Breadcum from '../components/breadcum';

// ProjectCard component
const ProjectCard = ({ project }) => {
    return (
        <div className='col-lg-6 col-12 rounded-5 my-2 white_parent' {...getFadeUpAnimationAttributes({ duration: 1500, anchor: '.temp_anim15' })}>
            <div className='col-12 shadow overflow-hidden rounded h-lg-100 h-150 py-2 my-2'>
                <img src={project.img} alt='blog1' className='img-fluid scale h-50 w-100'></img>
                <div className='col-12 p-lg-4 p-2'>
                    <p className='text-secondary'><span className='text-white'><img src={location} alt='location' className='grid_icon p-2 scaling_c' /></span>{project.location}</p>
                    <h2 className='title_sm white_child'>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;

    const projects = [
        {
            id: 1,
            img: project1,
            location: "Thane Yeur , Mumbai",
            title: "Interior Painting and Crack filling",
            description: '"Successful project completed in 5 days! Client thrilled with flawless painting and crack filling results. Team worked seamlessly, ensuring timely completion. 5/5 customer satisfaction rating. Client praised professionalism, quality workmanship, and attention to detail. Effective communication ensured a smooth process, delivering a beautiful, crack-free finish that exceeded expectations."'
        },
        {
            id: 2,
            img: project2,
            location: "Ghansoli , Navi Mumbai",
            title: "Terrace Water Proofing",
            description: '"Leak-free and durable outdoor spaces guaranteed! Our 5-day terrace waterproofing project included painting and crack filling, resulting in a flawless finish. Efficient teamwork met the deadline, exceeding client expectations. 5/5 customer satisfaction rating. We deliver beautiful, waterproofed terraces that withstand harsh weather, thanks to our attention to detail and quality workmanship."'
        },
        {
            id: 3,
            img: project3,
            location: "Ambernath , Mumbai",
            title: "Exterior Painting",
            description: '"Transform your homes exterior with our expert painting services! Our 2-day project delivers a durable, long-lasting finish that withstands harsh weather. Attention to detail and quality workmanship ensure a flawless, vibrant exterior that boosts curb appeal. 5/5 customer satisfaction rating. Trust us for a beautiful, protected exterior that lasts!"'
        },
        {
            id: 4,
            img: project4,
            location: "Airoli , Navi Mumbai",
            title: "Wood Clearning and Coating",
            description: '"Revitalize your wood surfaces with our expert cleaning and painting services! Our 1-day project delivers a thorough clean and durable paint coat. Attention to detail ensures a smooth finish that enhances the natural beauty of the wood. 5/5 customer satisfaction rating. Trust us to restore and protect your decks, fences, and outdoor wood features."'
        },
        {
            id: 5,
            img: project5,
            location: "Pen , Raigad",
            title: "Metal Oil Paint Coating",
            description: '"Protect and revitalize metal surfaces with our expert paint coating services! Our 1-day project delivers a thorough clean and durable, corrosion-resistant coat. Attention to detail ensures a smooth finish that withstands harsh weather. 5/5 customer satisfaction rating. Trust us to coat gates, railings, and industrial equipment, resisting rust and extending lifespan."'
        },
        {
            id: 6,
            img: project1,
            location: "Thane Yeur , Mumbai",
            title: "Interior Painting and Crack filling",
            description: '"Successful project completed in 5 days! Client thrilled with flawless painting and crack filling results. Team worked seamlessly, ensuring timely completion. 5/5 customer satisfaction rating. Client praised professionalism, quality workmanship, and attention to detail. Effective communication ensured a smooth process, delivering a beautiful, crack-free finish that exceeded expectations."'
        },
        {
            id: 7,
            img: project5,
            location: "Pen , Raigad",
            title: "Metal Oil Paint Coating",
            description: '"Protect and revitalize metal surfaces with our expert paint coating services! Our 1-day project delivers a thorough clean and durable, corrosion-resistant coat. Attention to detail ensures a smooth finish that withstands harsh weather. 5/5 customer satisfaction rating. Trust us to coat gates, railings, and industrial equipment, resisting rust and extending lifespan."'
        },
        {
            id: 8,
            img: project1,
            location: "Thane Yeur , Mumbai",
            title: "Interior Painting and Crack filling",
            description: '"Successful project completed in 5 days! Client thrilled with flawless painting and crack filling results. Team worked seamlessly, ensuring timely completion. 5/5 customer satisfaction rating. Client praised professionalism, quality workmanship, and attention to detail. Effective communication ensured a smooth process, delivering a beautiful, crack-free finish that exceeded expectations."'
        },
    ];

    // Logic for pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='my-5 py-4'>
            <Breadcum />
            <div className='container-fluid mt-5 overflow-hidden'>
                <div className='container mt-5'>
                    <div className='d-flex justify-content-center align-items-center position-relative mb-5 line_div_high' {...getFadeUpAnimationAttributes({ duration: 1000, anchor: '.temp_anim15' })}>
                        <div className='horizontal_line col-10 col-sm-6 col-md-5 col-lg-4'></div>
                        <div className='position-absolute bg-white text-center'>
                            <h2 className='p-0 m-0 title_md'>Our Projects</h2>
                            <p className='p-0 m-0'>Some Interesting Works...</p>
                        </div>
                    </div>
                    <div className='row flex-nowrap overflow-x-auto overflow-y-hidden'>
                        {currentProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <nav className='pagination justify-content-center mt-4'>
                        <ul className='pagination'>
                            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <button onClick={() => paginate(i + 1)} className='page-link'>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Projects;
