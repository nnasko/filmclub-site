import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const VoteCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-24 sm:w-32 md:w-64 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.poster} alt={movie.name} className="w-full h-auto rounded-lg shadow-lg" />
      <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <Button className="px-4 py-2 bg-secondary text-white font-bold rounded hover:bg-[#7e2cd4] transition">
          VOTE
        </Button>
      </div>
    </div>
  );
};

export default VoteCard;
