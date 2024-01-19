import React from 'react';
import VideoPlayer from './VideoPlayer';
import Emailinterest from './Emailinterest';
import Footer from './Footer';

const Main = () => {
  return (
    <div className='bg-black w-screen h-screen flex flex-col justify-center items-center pt-12'>
      <div className="text-center">
        <p className='font-semibold text-4xl text-primary pt-32'>WELCOME,</p>
        <p className='font-light text-lg text-white pb-4'>Watch this video to see what we are about!</p>
      </div>
      <VideoPlayer />
      <Emailinterest />
      <Footer />
    </div>
  );
};

export default Main;
