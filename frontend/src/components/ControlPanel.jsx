import React from "react";

const ControlPanel = ({ onStart, onStop, onReset }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <button
        onClick={onStart}
        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Start System
      </button>
      
      <button
        onClick={onStop}
        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
        </svg>
        Stop System
      </button>
      
      <button
        onClick={onReset}
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        Reset System
      </button>
    </div>
  );
};

export default ControlPanel;