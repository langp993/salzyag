import React from "react";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
<div className="mb-8">
   
     {/* <div className="py-2 md:top-[300px] bg-yellow-500 w-full"> */}
     <div class="py-2 md:top-[300px] bg-yellow-500 w-full h-26 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">

       <div className="bg-purple-500 max-w-[500px] sm:max-w-full">
       <div className="bg-pink-500">

       <div className="bg-green-500 max-w-sm mx-auto md:ml-0">
       <h3 className="font-bold text-center md:text-left">Solar Top:</h3>
       </div>
       <div className="bg-green-500 max-w-sm mx-auto md:ml-0">
       <p className="">
         Sie haben eine 100KW Anlage auf dem Dach Ihres Gebäudes, die Strom um-
         Weltfreundlich produziert.
       </p>
       </div>
       <div className="bg-red-500 max-w-sm mx-auto md:ml-0 text-center md:text-left">
       <h2 className="my-4 text-lg font-bold uppercase text-primary">
         Zusammen Stromkosten sparen
         <span className="block text-gray-600">Was ist Solar.Top?</span>
       </h2>
       </div>
       </div>
       </div>
       <div className="bg-red-500 max-w-[639px] sm:max-w-full">
     <iframe
         className="-sm:mx-auto sm:right-0 sm:absolute mx-auto "
         width="60"
         height="60"
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe>
 </div>
       </div>
    

 <div className="">
       {/* <iframe
         className="max-w-full"
         width="560"
         height="215"
         width="560"
         height="215"
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe> */}
 
 
       {/* <iframe
         className="max-w-full sm:max-w-xl mx-auto px-8"
         width="560"
         height="315"
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe> */}
 
{/* <iframe
         className="max-w-full sm:max-w-xl mx-auto md:right-[0px] md:top-[300px] absolute"
         width="560"
         height="315"
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe> */}
 
 
{/*
       <div className="py-4"></div>
 
       <div className="aspect-w-16 aspect-h-9">
         <iframe
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         frameBorder="0"
         width="560"
         height="215"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen>
         </iframe>
       </div> */}
 
      
{/*
       <div className="bg-white max-w-sm my-4 mx-auto md:ml-0 text-center md:text-left">
       <h1 className="font-bold text-lg">Für Ihr Gebäude möglich:</h1>
       <p className="">
         Wir haben bereits mit Ihrer Gebäude Hausverwaltung den Anschluss
         vorbereitet:
       </p>
       </div>
 
       <button className="flex w-full px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md max-w-sm">
         <DownloadIcon className="w-6 h-6" />
         Rahmenvertrag ansehen
       </button> */}
 
     <div class="h-26 grid grid-cols-1 md:grid-cols-2 gap-4 content-start bg-white md:mx-20 top-[800px] absolute">
     <div className="bg-white max-w-sm my-0 mx-auto md:ml-0 text-center md:text-left">
       <h1 className="font-bold text-lg">Für Ihr Gebäude möglich:</h1>
       <p className="">
         Wir haben bereits mit Ihrer Gebäude Hausverwaltung den Anschluss
         vorbereitet:
       </p>
       </div>
 
<div>
       <button className="flex w-full px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md max-w-sm ">
         <DownloadIcon className="w-6 h-6" />
         Rahmenvertrag ansehen
       </button>
       </div>
{/*
       <div className="bg-yellow-200">02</div>
       <div className="bg-yellow-200">03</div>
       <div className="bg-yellow-200">04</div>
       <div className="bg-yellow-200">05</div>
       <div className="bg-yellow-200">06</div>
        */}
     </div>
 
       {/* <p className="my-4 text-center md:top-[200px] absolute">Ihr Beitritt ist selbstverständlich freiwilig.</p> */}
   
    
     <div className="px-4">
     <Link
       className="flex w-full justify-between mx-auto max-w-sm font-bold text-white rounded-lg shadow-md bg-yellow-500 top-[800px] absolute"
       to="/step3">
       <button className="px-4 py-3 w-full bg-primary mx-auto  max-w-sm flex justify-between rounded">
       Unverbindlich mehr erfahren.
       <ChevronRightIcon className="w-6 h-6" />
       </button>
     </Link>
     </div>
 
     <Link to="/keininteresse" className="block p-4 text-center top-[950px] absolute">
       Kein Interesse.
     </Link>
     </div>
   </div>
 );
}

