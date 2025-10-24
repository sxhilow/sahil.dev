import React from 'react'

const SkillsCard = () => {
  return (
    <div className="mx-7 rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 rotate-1 flex-wrap overflow-auto p-1.5">
      <h1 className="font-poppins m-2 font-semibold">Tech Stack</h1>
      <hr className="w-[90%] mx-auto"/>
      <div className='m-2'>
        <ul className='m-2 font-poppins font-semibold text-md'>
          <li className='p-1'><span className='text-teal-600'>—</span> C# / ASP.NET</li>
          <li className='p-1'><span className='text-teal-600'>—</span> Java / Servlets / Android dev</li>
          <li className='p-1'><span className='text-teal-600'>—</span> JavaScript (ES6+)</li>
          <li className='p-1'><span className='text-teal-600'>—</span> Python / C++ (Foundational)</li>
          <li className='p-1'><span className='text-teal-600'>—</span> React.js / Node.js / Express.js</li>
          <li className='p-1'><span className='text-teal-600'>—</span> MongoDB / PostgreSQL</li>
          <li className='p-1'><span className='text-teal-600'>—</span> RESTful APIs</li>
          <li className='p-1'><span className='text-teal-600'>—</span> Authentication (JWT, OAuth)</li>
          <li className='p-1'><span className='text-teal-600'>—</span> Tailwind CSS / Responsive Design</li>
        </ul>
      </div>
    </div>
  )
}

export default SkillsCard