const ProjectsCard = ({imgURL, title, description, link}) =>{
  return(
    <div className="mt-2 mb-7 lg:mb-0 w-full rounded-lg shadow-md border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 hover:rotate-2 transition flex-wrap overflow-auto p-1.5">
      <a href={link}>
      <div className="flex flex-row justify-center items-center m-4 rounded-full gap-6">
        <div>
          <img src={imgURL} alt={title} className="rounded-full w-[70px] border border-gray-300" />
        </div>
        <div>
          <h1 className="text-xl font-poppins font-medium text-center">{title}</h1>
        </div>
      </div>
      <div className="m-4">
        <p className="font-poppins font-light">{description}</p>
      </div>
      </a>
    </div>
  )
}

export default ProjectsCard