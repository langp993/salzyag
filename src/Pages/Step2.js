import React from "react";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
<div className="bg-white mb-8 px-[4%]">

<div className="bg-white px-0 mb-0">

  <div class="bg-white h-full"> 
  
      {/* <p className="lg:mb-0 max-w-sm">
         Sie haben eine 100KW Anlage auf dem Dach Ihres Gebäudes, die Strom um-
         Weltfreundlich produziert.
       </p>

       <h2 className="lg:mb-[40px] my-4 text-lg font-bold uppercase text-primary">
         Zusammen Stromkosten sparen
         <span className="block text-gray-600">Was ist Solar.Top?</span>
       </h2> */}

      <h3 className="font-bold text-black mb-6 text-[20px] text-center md:text-[30px] font-mono">ZUSAMMEN STROMKOSTEN SPAREN
      <span className="block text-red-500">Was ist Solar.Top?</span>
      </h3>
      
      <div className="bg-white">
      <p className="text-black mx-auto max-w-[500px] text-center mx-auto mb-8 font-mono text-[15px]">
      Sie haben eine 100KW Anlage auf dem Dach Ihres Gebäudes, die Strom um-
      Weltfreundlich produziert.
      </p>
      </div>

       </div>


  <div class="bg-white mb-10 mx-auto justify-center flex">
    <iframe
         className="-sm:mx-auto md:w-[610px] md:h-[360px] sm:right-0 mx-auto object-scale-down"
         width="410"
         height="260"
         src="https://www.youtube.com/embed/vY_WN7hAczA"
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen></iframe> 
         
</div>
  
  <div class="bg-white">
    
    <button className="flex justify-between w-full px-4 py-3 mx-auto mb-6 bg-white rounded-lg shadow-md max-w-sm ">
        Rahmenvertrag ansehen
         <DownloadIcon className="w-6 h-6" />
       </button>

       <p className="my-4 text-center">Ihr Beitritt ist selbstverständlich freiwilig.</p>

       
       <Link
     className="flex w-full justify-between mx-auto max-w-sm font-bold text-white rounded-lg shadow-md bg-yellow-500"
     to="/step3">
     <button className="px-4 py-3 w-full bg-primary mx-auto  max-w-sm flex justify-between rounded">
     Unverbindlich mehr erfahren.
     <ChevronRightIcon className="w-6 h-6" />
     </button>
   </Link>

   <Link to="/keininteresse" className="block p-4 text-center top-[950px]">
     Kein Interesse.
   </Link>

       </div>
  
</div>
</div>

     
 
      

 );
}

