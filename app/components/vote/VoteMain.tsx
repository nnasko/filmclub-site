import React from 'react'
import VoteCard from './VoteCard';

const moviesData = [
  {
    id: 1,
    name: "Interstellar",
    poster: "https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg",
  },
  {
    id: 2,
    name: "Cloudy With A Chance Of Meatballs",
    poster: "https://images.moviesanywhere.com/303cb93f117afa0a2f22b872560d99e8/8909beeb-6678-4097-b6c7-e493a06d9cef.jpg",
  },
  {
    id: 3,
    name: "The Matrix",
    poster: "https://i.ebayimg.com/images/g/tD4AAOSw31JfmYLd/s-l1600.jpg",
  },
];

const VoteMain = () => {
  return (
    <div className='bg-black w-screen h-screen flex flex-col justify-center items-center'>
      <p className='pb-8 text-lg font-bold text-white text-center pt-8'>VOTE ENDS IN <span className='text-primary font-semibold'>6D 18H 21S</span></p>
      <section className="">
        <div className="grid grid-cols-3 gap-16">
          {moviesData.map(movie => (
            <VoteCard key={movie.id} movie={movie} />
          ))}
        </div>
    </section>
    </div>
  )
}

export default VoteMain