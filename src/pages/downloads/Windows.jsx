import React from "react";

const Windows = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-semibold mb-4">Download for Windows</h1>
      <p className="mb-6 text-2xl">Click below to download the Windows version of the engine:</p>
      <a href="/SavingCaptainCino.zip" download="SavingCaptainCino.zip" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Download Windows Version
      </a>
    </div>
  );
};

export default Windows;