import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import ThanksCrad from '../components/ThanksCrad'
import FavouriteFiction from '../components/FavouriteFiction'
import { projects } from '../constants'
import FactsCard from '../components/FactsCard'

const Projects = () => {
  return (
    <section className="bg-white dark:bg-base-100 text-slate-900 dark:text-slate-200 w-full pb-[15%] md:pb-0 md:ml-[10%] min-h-screen md:w-[90%] md:h-full md:flex">
        <div className="md:w-[70%] md:h-full ">
            <div className="p-6">
                <h2 className="text-4xl font-poppins font-semibold my-8 mx-4">Projects I've Worked On</h2>
              <div className="md:m-4 gap-8">
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project)=> (
                        <ProjectsCard key={project.title} {...project} />
                    ))}
                  
                </div>                
              </div>
            </div>
        </div>
        <div className="md:w-[30%] md:h-full md:mt-[8%] md:mr-3">
        <aside >
          <div className="my-8">
            <ThanksCrad label={"View my Resume"} path={"/resume"}/>
          </div>
          <div className='my-8'>
            <FactsCard/>
          </div>
          <div className="my-8">
            <FavouriteFiction />
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Projects