import React from "react";

export default function FrontPage() {
  return (
    <div className="text-white bg-black h-screen flex flex-col justify-center items-center">
      <div className="mt-20"> 
        <h1 className="text-3xl font-bold font-sans">Hi there! I am a 3D model robot created by Archie</h1>
      </div>
      
      <iframe
        src="https://app.vectary.com/p/6St30vXiLhDKnZlyUav6kz"
        frameBorder="0"
        width="100%"
        height="950"
        title="Vectary 3D Model"
      ></iframe>
    </div>
  );
}
