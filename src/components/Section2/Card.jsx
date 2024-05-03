import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ data }) => {
  const theme = useSelector((store) => store.theme);

  // Define the class names based on the theme
  const cardContainerClasses = `flex flex-wrap border-solid rounded ${
    theme === 'Dark' ? 'bg-black text-white' : 'bg-white text-black'
  }`;
  const titleClasses = 'card-title text-lg font-bold tracking-wide flex items-center opacity-60';
  const descriptionClasses = 'mt-1 mb-5 text-sm text-opacity-60';

  return (
    <div className={`w-60 p-5 ${cardContainerClasses}`}>
      <a href={data.link} target='_blank' rel="noopener noreferrer">
        <div className={cardContainerClasses}>
          <div className="flex items-center truncate">
            <div className={titleClasses}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
              <span>{data.name}</span>
            </div>
          </div>
          <p className={descriptionClasses}>🚀 {data.desc}</p>
        </div>
        <div className="flex justify-between text-xs text-opacity-60">
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
            </svg>
            <span>{data.star}</span>
          </div>
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
            </svg>
            <span>{data.fork}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: 'rgb(43, 116, 137)' }} />
            <span>{data.language}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
