import React, { useState } from 'react';

const WeekPhoto = ({ photo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={photo.url} alt={`Week of ${photo.date}`} className="w-full h-auto object-cover rounded-lg" />
      <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="px-4 py-2 font-bold">
          {photo.date}
        </span>
      </div>
    </div>
  );
};

export default WeekPhoto;
