import React from 'react'
import { Link } from 'react-router-dom'

const ThanksCrad = () => {
  return (
    <div className=" mx-7 rounded-lg border border-slate-100 dark:border-slate-800  dark:bg-gradient-to-br from-slate-800 to-slate-900 flex-wrap overflow-auto p-1.5">
            <div className='flex justify-start items-center'>
                <h1 className="font-poppins m-2 font-semibold">Thanks for Dropping In! </h1>
                <span className='text-2xl'>🤝</span> 
            </div>

            <hr className="w-[90%] mx-auto"/>

            <p className="font-poppins font-light m-2 text-sm">Feel free to reach out or explore more!</p>
            
            <Link to='/projects'>
                <p className="font-poppins m-2 font-normal underline text-teal-600 hover:text-teal-700">View My Projects</p>
            </Link>

            <a href="mailto:jadasahil06@gmail.com">
                <p className="font-poppins m-2 font-normal underline text-teal-600 hover:text-teal-700">Say Hello!</p>
            </a>
            
            

        </div>
  )
}

export default ThanksCrad