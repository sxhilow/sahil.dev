import React from 'react'
import {richfield, school, do4you} from '../assets/images'
import SkillsCard from '../components/SkillsCard'
import ToolsCrad from '../components/ToolsCrad'
import LanguagesCard from '../components/LanguagesCard'

const Resume = () => {
  return (
    <section className="bg-white dark:bg-base-100 text-slate-900 dark:text-slate-200 w-full pb-[15%] md:pb-0 md:ml-[10%] h-full md:w-[90%] md:h-full md:flex">
        <div className="md:w-[65%] md:h-full ">
        <div className="p-6">
            <h1 className="text-4xl font-poppins font-semibold my-8 mx-4">My resume</h1>
            
            <div className="m-4">                
                <h3 className='text-2xl font-poppins font-semibold my-8'>Education</h3>
                <ul>
                    <li className='flex flex-row gap-8 font-poppins'>                        
                        <div className='absolute border border-slate-100 dark:border-slate-800 w-[60px] h-[60px] rounded-full mt-4'>
                            <img src={richfield} alt="richfield" className='rounded-full '/>
                        </div>  
                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="text-sm font-extralight text-slate-500">2023 - PRESENT</label>
                            <h2 className='font-semibold text-2xl'>BSc in Information Technology</h2>
                            
                            <a href="https://richfield.ac.za">
                                <h3 className='font-normal text-md hover:text-slate-500'>Richfield Graduate Institute of Technology</h3>
                            </a>

                            <p className='font-poppins font-extralight text-md mt-2'>
                            Gained comprehensive knowledge in IT, focusing on software development, data structures, networking, and systems analysis. Developed problem-solving and analytical skills while working on projects. 
                            </p>
                        </div>
                    </li>
                    <li className='flex flex-row gap-8 font-poppins mt-8'>                        
                    <div className='absolute border border-slate-100 dark:border-slate-800 w-[60px] h-[60px] rounded-full mt-4'>
                        <img src={school} alt="school" className='rounded-full w-full h-full object-cover ' />
                    </div>

                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="text-sm font-extralight text-slate-500">2019 - 2022</label>
                            <h2 className='font-semibold text-2xl'>Bachelor's Pass</h2>
                            
                            <a href="">
                                <h3 className='font-normal text-md hover:text-slate-500'>Centenary Secondary School </h3>
                            </a>
                            <p className='font-poppins font-extralight text-md mt-2'>
                                Completed high school with a Bachelor's Pass in 2022, choosing Physical Science, Life Science, and Accounting as my majors.
                            </p>

                        </div>
                    </li>
                </ul>               
            </div>

            <div className='m-4'>
                <h3 className='text-2xl font-poppins font-semibold my-8'>Work Experience</h3>
                <ul>
                    <li className='flex flex-row gap-8 font-poppins'>
                        <div className='absolute border border-slate-100 dark:border-slate-800 w-[60px] h-[60px] rounded-full mt-4 flex justify-center items-center overflow-hidden'>
                            <img src={do4you} alt="do4you" className='rounded-full' />
                        </div>
                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="text-sm font-extralight text-slate-500">OCT 2024 - PRESENT</label>
                            <h2 className='font-semibold text-2xl'>Freelance Web Developer</h2>
                            
                            <a href="https://do4you.co.za">
                            <h3 className='font-normal text-md hover:text-slate-500'>do4you</h3>
                            </a>

                            <p className='font-poppins font-extralight text-md mt-2'>
                            Developed a custom, responsive landing page for do4you to promote its services and enhance its online presence. Built using React, and Tailwind CSS, ensuring a modern, fast, and user-friendly experience. Collaborated closely with the client to align the design with business goals and expectations. Optimized for SEO and performance to improve visibility and drive engagement.
                            </p>
                        </div>
                    </li>
                    <li className='flex flex-row gap-8 font-poppins mt-8'>
                        <div className='absolute border border-slate-100 dark:border-slate-800 w-[60px] h-[60px] rounded-full mt-4 flex justify-center items-center overflow-hidden'>
                            <img src="" alt="Ceiling" className='rounded-full' />
                        </div>
                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="text-sm font-extralight text-slate-500">2024</label>
                            <h2 className='font-semibold text-2xl'>Technical Assistant</h2>
                            
                            <h3 className='font-normal text-md'>Ceiling Boards</h3>

                            <p className='font-poppins font-extralight text-md mt-2'>
                                Assisted with troubleshooting and repairing printer issues, ensuring smooth daily operations.Set up a work requirement system to improve efficiency in processing customer orders and inventory tracking. Provided basic tech support, ensuring that all devices were connected and functioning properly for staff use.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            

        </div>
        </div>
        <div className="md:w-[35%] md:h-full md:mt-[4%] md:mr-3">
        <aside >
            <div className='my-8'>
                <SkillsCard/>
            </div> 
            <div className='my-8'>
                <ToolsCrad/>
            </div>
            <div className='my-8'>
                <LanguagesCard/>
            </div>
        </aside>
        </div>
    </section>
  )
}

export default Resume