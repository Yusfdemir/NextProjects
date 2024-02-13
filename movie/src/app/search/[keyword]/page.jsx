import Movies from '@/components/Movies';
import React from 'react'

const Page = async({params}) => {
    const keyword=params.keyword;
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=44af2036959367b3773da67e88aabe5c?query=${keyword}?include_adult=false&language=en-US`)
    const data=await res.json()
    console.log('data', data)
  return (
    <div>
        {
            !data?.results ? 
            <div>Aranılan şey bulunamadı !!!</div> :
            <div className='flex items-center justify-center flex-wrap gap-3'>
                {
                    data?.results?.map((dt,i)=>(
                        <Movies key={i} dt={dt}/>
                      ))
                  
                }
            </div>
                
        }
    </div>
  )
}

export default Page