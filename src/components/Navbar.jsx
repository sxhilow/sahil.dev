import React from 'react';
import {NavLink} from 'react-router-dom'
import { useTheme } from '../context/theme';

export default function Navbar(){
  const {defaultTheme, darkTheme, lightTheme} = useTheme()
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
      
    }else{
      lightTheme();
    }
  }
  
  return (
    <div className='bg-white dark:bg-slate-900 fixed bottom-0 w-full h-[10%] border-t md:border-t-0 md:h-full md:w-[10%] md:border-r border-slate-300 overflow-hidden z-50'>
      <div className='flex flex-row md:flex-col h-[100%] md:w-[100%]'>
      <div className='absolute w-[20%] h-full md:w-full md:h-[20%] overflow-hidden z-50'>
        <div className='flex justify-center items-center h-full '>
        
        <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                  <input 
                  type="checkbox" 
                  className="theme-controller" 
                  value="" 
                  onChange={onChangeBtn}
                  checked={defaultTheme === "dark"}
                  />

                  {/* sun icon */}
                  <svg
                    className='swap-off h-7 w-7 md:h-8 md:w-8 fill-current'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className='swap-on h-7 w-7 md:h-8 md:w-8 fill-current'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
        </label>
        
        </div>
        
      </div>
      <div className='relative flex justify-center items-center w-[100%] md:h-full '>
        
          <ul className='flex flex-row md:flex-col gap-8'>
            <li className='w-6'>
              <NavLink 
                  to='/' 
                  className={({isActive}) => `hover:text-teal-500 ${isActive ? "text-teal-500" : "text-slate-500"}`}
                >
                  <svg 
                    className="fill-slate-500 hover:fill-teal-500"  
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    
                  >
                    <path 
                      stroke="currentColor" 
                      fill="currentColor"
                      d="M21,21V8.4a1,1,0,0,0-.44-.829l-8-5.4a1,1,0,0,0-1.12,0l-8,5.4A1,1,0,0,0,3,8.4V21a1,1,0,0,0,1,1H20A1,1,0,0,0,21,21Zm-2-1H5V8.932l7-4.725,7,4.725Z"
                      
                    />
                  </svg>
                </NavLink>
            </li>
            <li className='w-6'>
              <NavLink to="/projects"
                className={({isActive}) => `hover:text-teal-500 ${isActive ? "text-teal-500" : "text-slate-500"}`}>
                <svg
                  className="stroke-slate-500 hover:stroke-teal-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M19,9a7,7,0,0,1-4,6.32V18H9V15.32A7,7,0,1,1,19,9Z"
                  ></path>
                  <line
                    stroke="currentColor"
                    strokeWidth="3"
                    x1="9"
                    y1="22"
                    x2="15"
                    y2="22"
                  ></line>
                </svg>
              </NavLink>
            </li>
            
            <li className='w-6'>
              <NavLink to="/resume"
                className={({isActive}) => `hover:text-teal-500 ${isActive ? "text-teal-500" : "text-slate-500"}`}>
                <svg 
                  className="stroke-slate-500 hover:stroke-teal-500" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                  stroke="currentColor" 
                  fill="currentColor"
                  
                  d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
                   
                  />
                </svg>
              </NavLink>
            </li>
            
          </ul>
        
      </div>
      </div>
    </div>
  );
}