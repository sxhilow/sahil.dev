import React from 'react'

const ToolsCrad = () => {
  return (
    <div className=" mx-7 rounded-lg border border-slate-200 dark:border-slate-800  dark:bg-gradient-to-br from-slate-800 to-slate-900 flex-wrap overflow-auto p-1.5">
        <h1 className="font-poppins m-2 font-semibold">Technologies I Know</h1>
        <hr className="w-[90%] mx-auto"/>
        <div className='m-2'>
            <ul className='m-2 font-poppins font-semibold text-md'>
                <li className='p-1'> <span className='text-teal-600'> — </span>Git</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Github</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Linux</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Figma</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>Cisco Packet Tracer</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>AWS</li>
                <li className='p-1'> <span className='text-teal-600'> — </span>VS Code</li>
                              
            </ul>
        </div>
    </div>
  )
}

export default ToolsCrad