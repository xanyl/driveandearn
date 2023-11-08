import React from 'react';
import Image from 'next/image';

const MusicPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-pink-800 w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-white">Discover Music</h1>

      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-2xl mb-2 flex flex-col justify-center items-center">
        <div className="mb-8">
          <Image
            width={400}
            height={400}
            src="/shawnmandes.jpg"
            alt="Album Cover"
            className="rounded-xl"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">It will be Okay</h2>
        <p className="text-gray-600 mb-8">Shawn Mendes</p>
        <div className="flex justify-center items-center space-x-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-md transition duration-300">
            Play
          </button>
          <button className="text-gray-500 hover:text-gray-600 transition duration-300">
            <svg
              className="h-12 w-12 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 17.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5zm0-15c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z"
              />
              <path d="M11 7H9v6h2V7zm5 0h-2v6h2V7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
