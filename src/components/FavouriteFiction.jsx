import React from 'react'

const FavouriteFiction = () => {
  return (

    <a href='https://www.imdb.com/title/tt0388629/'>
        <div className="bg-black mx-7 rounded-lg border border-gray-300 relative rotate-[-1deg] mb-[10%]">

        <div className="relative z-10 p-2">
            <h1 className="font-poppins m-2 font-semibold text-slate-100">Favorite Piece of Fiction!</h1>
            <hr className="w-[90%] mx-auto" />
            <p className="font-poppins font-medium m-2 text-slate-100">
                *One Piece* is my favorite piece of fiction. A boy who wants to become the King of Pirates...
            </p>

        </div>

        <div className="absolute inset-0 bg-onepiece-image bg-cover bg-center bg-no-repeat opacity-50 rounded-lg"></div>
        </div>
    </a>


  )
}

export default FavouriteFiction