import React from 'react';

const DepoCard = ({ img, indx,title, des }) => {
  return (
    <div className="relative w-72 h-96 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col items-center justify-between shadow-[0_0_30px_#ff00ff20] hover:shadow-[0_0_60px_#ff00ff60] transition-all duration-500">
      {/* Image or scroll target */}
      {indx == 3 ? (
        <div className="third h-32 w-32 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-pulse shadow-lg"></div>
      ) : (
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="h-32 w-32 bg-cover bg-center rounded-full border-4 border-white/30 shadow-lg"
        ></div>
      )}

      {/* Text Section */}
      <div className="text-center space-y-2 mt-6">
        <h2 className="text-xl font-bold text-white drop-shadow-md">{title}</h2>
        <p className="text-sm text-white/70 leading-5">
          {des}
        </p>
      </div>

      {/* Glowing ring effect */}
      <div className="absolute -bottom-4 w-1/2 h-2 rounded-full blur-md bg-fuchsia-500/70"></div>
    </div>
  );
};

export default DepoCard;
