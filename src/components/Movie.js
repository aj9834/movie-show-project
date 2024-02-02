import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image from './image .jpg';
import { FcLike, FcLikePlaceholder } from "react-icons/fc"


const Movie = ({ shows }) => {
    const [data, setDetail] = useState({});
    const id = useSearchParams()[0].get('id')

    useEffect(() => {
        shows && shows.forEach(item => {
            if (item.show.id === Number(id)) setDetail(item);
        })
    }, [id])
    
//console.log(data)
console.log(data && data?.show?.id)
const htmldata = data && data?.show?.summary;
    return (
     <div className="bg-bgDark2  min-h-[100vh] w-[100vw]">
      <div>
      <nav className="bg-bgDark py-4">
        <h1 className="text-3xl font-bold text-center text-white">Shows</h1>
      </nav>
    </div>
    
          <div className='flex flex-row w-[auto] bg-bgDark bg-opacity-80 rounded-md overflow-hidden m-2 p-2'>
     
            {/* { data && data?.show?.id } */}
           <div className='flex flex-col text-2xl text-slate-200 font-bold m-1 '>
                { data && data?.show?.name}


            </div>
            <img className='border border-cyan-800 rounded-xl m-2 p-2' src={data?.show?.image != null?data?.show?.image?.medium:image} alt='images'/>
            
            
             {/* <div dangerouslySetInnerHTML={{ __html:  { data?.show?.summary} }}> </div> */}

             <div className='flex flex-col'>
             <p className='text-2xl text-slate-100'>Description</p>
             <div className='text-xl text-slate-400 ' dangerouslySetInnerHTML={{ __html: htmldata }} />
             </div>
             
           


        </div>
     </div>
        
    )
}

export default Movie
