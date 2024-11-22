import React from 'react'

const LanguagesCard = () => {
  return (
    <div className=" mx-7 rounded-lg rotate-[-1deg] border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 flex-wrap overflow-auto p-1.5">
        <h1 className="font-poppins m-2 font-semibold">Languages I Speak</h1>
        <hr className="w-[90%] mx-auto"/>
        <div className='m-2'>
            <ul className='m-2 font-poppins font-semibold text-md'>
                <li className='p-1'> English 🇿🇦 </li>
                <li className='p-1'> Hindi  🇮🇳 </li>
                <li className='p-1'> Gujarati 🇮🇳 </li>
                <li className='p-1'> Urdu  🇵🇰 </li>                              
            </ul>
        </div>
    </div>
  )
}

export default LanguagesCard