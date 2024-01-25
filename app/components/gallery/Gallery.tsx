import React from 'react';
import WeekPhoto from './WeekPhoto';

const filmClubPhotos = [

  { id: 1, date: 'Jan 7, 2024', url: 'https://via.placeholder.com/300x200.png?text=Week+1' },
  { id: 2, date: 'Jan 14, 2024', url: 'https://via.placeholder.com/300x200.png?text=Week+2' },
  { id: 3, date: 'Jan 21, 2024', url: 'https://via.placeholder.com/300x200.png?text=Week+3' },
  { id: 4, date: 'Jan 28, 2024', url: 'https://via.placeholder.com/300x200.png?text=Week+4' },
];

const Gallery = () => {
  return (
    <div className='bg-black w-screen h-screen flex-col justify-center items-center'>
    <section className="px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-8 pt-8">Weekly Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filmClubPhotos.map(photo => (
          <WeekPhoto key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Gallery;
