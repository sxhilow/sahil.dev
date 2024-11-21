import React from 'react'
import {richfield, school} from '../assets/images'

const Resume = () => {
  return (
    <section className="w-screen mb-[15%] md:mb-0 mt-5 md:ml-[10%] h-[90%] md:w-[90%] md:h-screen md:flex">
        <div className="md:w-[65%] md:h-screen ">
        <div className="p-4 m-4">
            <h1 className="text-4xl font-poppins font-semibold my-8 mx-4">My resume</h1>
            
            <div className="m-4">                
                <h3 className='text-2xl font-poppins font-semibold my-8'>Education</h3>
                <ul>
                    <li className='flex flex-row gap-8 font-poppins'>                        
                        <div className='absolute border border-slate-400 w-[60px] h-[60px] rounded-full mt-4'>
                            <img src={richfield} alt="richfield" className='rounded-full '/>
                        </div>  
                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="font-sm font-extralight text-slate-500">2023 - PRESENT</label>
                            <h2 className='font-semibold text-2xl'>BSc in Information Technology</h2>
                            
                            <h3 className='font-normal text-md'>Richfield Graduate Institute of Technology</h3>

                            <p className='font-poppins font-extralight text-md mt-2'>
                            Gained comprehensive knowledge in IT, focusing on software development, data structures, networking, and systems analysis. Developed problem-solving and analytical skills while working on projects. 
                            </p>
                        </div>
                    </li>
                    <li className='flex flex-row gap-8 font-poppins mt-8'>                        
                    <div className='absolute border border-slate-400 w-[60px] h-[60px] rounded-full mt-4'>
                        <img src={school} alt="richfield" className='rounded-full w-full h-full object-cover ' />
                    </div>

                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="font-sm font-extralight text-slate-500">2019 - 2022</label>
                            <h2 className='font-semibold text-2xl'>Bachelor's Pass</h2>
                            
                            <h3 className='font-normal text-md'>Centenary Secondary School </h3>

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
                        <div className='absolute border border-slate-400 w-[60px] h-[60px] rounded-full mt-2 flex justify-center items-center overflow-hidden'>
                            <img src={richfield} alt="richfield" className='rounded-full w-full h-full object-cover ' />
                        </div>
                        <div className='ml-[90px]'>
                            <label htmlFor="time" className="font-sm font-extralight text-slate-500">2023 - PRESENT</label>
                            <h2 className='font-semibold text-2xl'>Web Developer Intern</h2>
                            
                            <h3 className='font-normal text-md'>Richfield Graduate Institute of Technology</h3>

                            <p className='font-poppins font-extralight text-md mt-2'>
                                Worked as a web developer intern in the IT department, responsible for creating and maintaining web applications and websites.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Resume