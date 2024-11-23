import React, { useState, useEffect} from 'react'
import { facts } from "../constants";

const FactsCard = () => {
    const [fact, setFact] = useState(facts[Math.floor(Math.random() * facts.length)]);
    
    useEffect(() => {
        setFact(facts[Math.floor(Math.random() * facts.length)]);
      }, [setFact]);
    
  return (
    <div className=" mx-7 rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 rotate-1 flex-wrap overflow-auto p-1.5">
        <h1 className="font-poppins m-2 font-semibold">Life as a Programmer</h1>

        <hr className="w-[90%] mx-auto"/>

        <h2 className='font-poppins m-2 font-normal'>{fact.heading}</h2>
        <p className="font-poppins font-light m-2 ">{fact.message}</p>
    </div>
  )
}

export default FactsCard