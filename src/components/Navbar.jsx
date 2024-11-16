import {NavLink} from 'react-router-dom'

export default function Navbar(){
  return (
    <div>
      <div className='flex justify-center items-center fixed bottom-0 w-screen h-[10%] border-t md:h-screen md:w-[10%] md:border-r border-slate-300'>
        <div >
          <ul className='flex flex-row md:flex-col gap-6'>
            <li className='w-5'>
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
            <li className='w-5'>
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
            
            <li className='w-5'>
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