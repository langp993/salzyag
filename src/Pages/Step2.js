import React from "react";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Step2() {
  return (
 <div className="bg-green-500">
 
 <div className="bg-yellow-500 w-[60px]">hello2
 
 {/* <iframe
        className=""
        width="60"
        height="60"
        src="https://www.youtube.com/embed/vY_WN7hAczA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
  */}
 </div>

 {/* <iframe
        className="mx-md-0 -sm:mx-auto md:right-0 "
        width="60"
        height="60"
        src="https://www.youtube.com/embed/vY_WN7hAczA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
 
 
 </div> */}

<iframe
        className="-sm:mx-auto sm:right-0 sm:absolute"
        width="60"
        height="60"
        src="https://www.youtube.com/embed/vY_WN7hAczA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
 
 
 </div>
  );
}
