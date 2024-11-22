import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import ThanksCrad from '../components/ThanksCrad'
import FavouriteFiction from '../components/FavouriteFiction'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 w-full pb-[15%] md:pb-0 md:ml-[10%] min-h-screen md:w-[90%] md:h-full md:flex">
        <div className="md:w-[70%] md:h-full ">
            <div className="p-6">
                <h2 className="text-4xl font-poppins font-semibold my-8 mx-4">Projects I've Worked On</h2>
                <div className="md:m-4 flex flex-col md:flex-row flex-wrap gap-8">
                <div className="lg:flex lg:flex-row gap-5">
                {projects.slice(0,2).map((project)=> (
                    <ProjectsCard key={project.title} {...project} />
                ))}
                </div>
                </div>
            </div>
        </div>
        <div className="md:w-[30%] md:h-full md:mt-[8%] md:mr-3">
        <aside >
          <div className="md:mt-[5%] mt-4">
            <ThanksCrad/>
          </div>
          <div className="md:mt-[5%] mt-4">
            <FavouriteFiction />
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Projects