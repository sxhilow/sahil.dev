import { useLoaderData } from "react-router-dom"

const QuoteCard = () => { 
   const data = useLoaderData();
    /*
    const [data, setData] = useState([])
    useEffect(() => {
        fetch()
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [setData]);
   */
    
    return (
        <div className=" mx-7 rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 rotate-1 flex-wrap overflow-auto p-1.5">
            <h1 className="font-poppins m-2 font-semibold">Quote of the Moment</h1>

            <hr className="w-[90%] mx-auto"/>

            <p className="font-poppins font-light m-2 ">"{data.quote}"</p>
            
            <footer className="font-poppins m-2 font-light">~{data.author}</footer>
            
            

        </div>
    )
}

export default QuoteCard

export const quote = async () => {
    return await fetch("https://programming-quotesapi.vercel.app/api/random")
    .then((response) => response.json())
    .catch(() => (
        {
        quote:"Sorry, Quote Unavailable ATM!", 
        author:"system"
        }
    ))
    
}