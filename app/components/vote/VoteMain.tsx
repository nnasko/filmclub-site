import React, { useEffect, useState } from 'react';
import VoteCard from './VoteCard';

const VoteMain = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
            .then((response) => response.json())
            .then((data) => setMoviesData(data))
            .catch((error) => console.error("Error fetching data: " + error));
    }, []);

    return (
        <div className='bg-black w-screen h-screen flex flex-col justify-center items-center'>
            <p className='pb-8 text-lg font-bold text-white text-center pt-8'>VOTE ENDS IN <span className='text-primary font-semibold'>6D 18H 21S</span></p>
            <section className="">
                <div className="grid grid-cols-3 gap-16">
                    {moviesData.map((movie) => (
                        <VoteCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default VoteMain;
