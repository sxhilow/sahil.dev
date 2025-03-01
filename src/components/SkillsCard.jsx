import React from 'react'

const SkillsCard = () => {
  return (
    <div className=" mx-7 rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 rotate-1 flex-wrap overflow-auto p-1.5">
        <h1 className="font-poppins m-2 font-semibold">Tech Stack</h1>
        <hr className="w-[90%] mx-auto"/>
        <div className='m-2'>
            <ul className='m-2 font-poppins font-semibold text-md'>
                <li className='p-1'> <span className='text-teal-600'> — </span>Python</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>C++</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Javascript</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Node.js</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Express.js</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>React</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Tailwindcss</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>MongoDB</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>SQL</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>UI/UX</li>                
            </ul>
        </div>
    </div>
  )
}

export default SkillsCard