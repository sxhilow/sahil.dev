import { useEffect, useState } from "react"

const Quote = () => {    
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today")
            .then((res) => res.json())
            .then((data) => setData(data[0]))
    }, [setData]);

    
    return (
        <div className=" mx-7 rounded-lg shadow-xl border border-gray-300 hover:rotate-2 transition flex-wrap overflow-auto p-1.5">
            <h1 className="font-poppins m-2 font-semibold">Today's Quote</h1>

            <hr className="w-[90%] mx-auto"/>

            <p className="font-poppins font-light m-2 ">"{data.q}"</p>
            
            <footer className="font-poppins m-2 font-light">~{data.a}</footer>
            
            

        </div>
    )
}

export default Quote