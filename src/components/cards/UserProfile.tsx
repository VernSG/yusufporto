"use client";
import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-md bg-gray-800 text-white rounded-lg p-6 shadow-lg mx-auto">
      <div className="flex items-center">
        <img
          src="https://cdn.discordapp.com/avatars/1256409606373113988/81c69174d311bf4aeec2b5ec0766cfb7.webp?size=512"
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div className="flex-grow">
          <h1 className="text-xl font-bold">Ryo Yamada</h1>
          <h2 className="text-gray-400">Ryo Yamada#9164</h2>
        </div>
        <div className="bg-indigo-600 text-white px-2 py-1 rounded text-sm">APP</div>
      </div>
      <div className="mt-6">
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">ABOUT ME</h3>
          <p>/help</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">MEMBER SINCE</h3>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 012 0v1a1 1 0 01-2 0V9zM7 12a1 1 0 110-2h2a1 1 0 110 2H7z"/></svg>
            Jun 29, 2024
          </p>
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 012 0v1a1 1 0 01-2 0V9zM7 12a1 1 0 110-2h2a1 1 0 110 2H7z"/></svg>
            Jul 20, 2024
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">PLAYING A GAME</h3>
          <p>/help</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">ROLE</h3>
          <div className="bg-green-600 font-bold text-white px-2 py-1 rounded text-sm inline-block">Zona Belajar</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
