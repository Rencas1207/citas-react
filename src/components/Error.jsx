import React from 'react';

const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white uppercase font-bold p-5 mb-8 rounded-xl">
      {children}
    </div>
  );
};

export default Error;
