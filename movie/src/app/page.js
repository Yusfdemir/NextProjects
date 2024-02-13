import Movies from "@/components/Movies";


export default async function Home({searchParams}) {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" +searchParams.genre : "trending/all/day"}?api_key=44af2036959367b3773da67e88aabe5c&language=en-US&page=1`,{next: {revalidate:10000}})
  const data= await res.json()
  console.log('data', data)
  return (
    <div className="flex justify-center items-center flex-wrap gap-3">
      {
        data?.results?.map((dt,i)=>(
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  );
}
