import React from "react";
import { Link } from "react-router-dom";
import { DownloadIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Step4() {
  return (
    <div className="px-[8%] pb-[180px] bg-white">
      <div className="bg-white text-center leading-loose mb-8">
      <h3 className="font-bold text-black text-[20px] -ssm:text-[15px] -sm:text-[20px] text-[40px] font-nunito">IHR PERSÖNLICHES ANGEBOT:</h3>
      <p className="text-black mx-auto font-nunito text-[15px]">
        Wir haben auf Ihre Email Adresse folgende Dokumente zugesendet.
      </p>
      </div>

      <div class="bg-white max-w-[600px] mx-auto h-full grid grid-cols-1 md:grid-cols-1 gap-6">

      <button className="flex justify-between pl-6 pr-1 items-center text-white bg-primary w-full h-[50px] bg-white rounded-lg shadow-md">
        Rahmenvertrag ansehen
        <DownloadIcon className="w-6 h-6 mr-4 text-white" />
        
      </button>
      <button className="flex justify-between pl-6 pr-1 items-center text-white bg-primary w-full h-[50px] bg-white rounded-lg shadow-md">
        Allgemeine Vertragsunterlagen
        <DownloadIcon className="w-6 h-6 mr-4 text-white" />
      </button>
      <button className="flex justify-between pl-6 pr-1 items-center text-white bg-primary w-full h-[50px] bg-white rounded-lg shadow-md">
        Beitrittserklärung
        <DownloadIcon className="w-6 h-6 mr-4 text-white" />
      </button>

      </div>

      {/* <p className="mt-6">
        Wir schätzen Ihre monatliche Strom Ersparnis auf etwa{" "}
        <strong className="font-bold">130,00 Euro.* </strong>
      </p>

      <p className="mt-6 text-sm italic">
        *Dies ist nur ein Richtwert. Diese Schätzung bezieht sich auf
        durchschnittliche Werte der Salzburg AG der letzten 12 Monate. Der
        genaue Bertrag kann erst nach Betrieb Ermittelt werden. <br /> <br />
      </p> */}

      <div className="bg-white my-14 max-w-[600px] mx-auto">

      <p className="text-black">
        Florian Bauer <br />
        Pfarrhofgutweg 39 Top 16 <br />
        5400 Hallein
      </p>

      <div className="flex items-center py-4 mt-4 text-black border-t border-black ">
        <p className="flex-1">
          <strong className="block font-bold">Einmalige Kosten:</strong>
          Installation, Instandsetzung
        </p>

        <div className="font-bold">€ 0,00</div>
      </div>
      <div className="flex items-center py-4 mb-4 text-black border-t border-b border-black">
        <p className="flex-1">
          <strong className="block font-bold">Energiepreis
          </strong>
          Pro kWh in Cent netto / brutto
        </p>
        <div className="font-bold">¢ 23,0000 / <strong className="block text-right">27,6000</strong></div>
      </div>

      <div className="flex items-center pb-4 text-black border-b border-black">
        <p className="flex-1">
          <strong className="block font-bold">Gesamtpreis
          </strong>
          Pro kWh in Cent netto / brutto
        </p>
        <div className="font-bold">¢ 28,0408 / <strong className="block text-right">33,6490></strong></div>
      </div>

      </div>
    


{/* <div className="ismaincontainer bg-green-300 h-[320px]"> */}
<div className="bg-white h-full max-w-[400px] mx-auto">
<div className="bg-white h-full mb-3 -ssm:mb-10 flex ">
  <div className="bg-white mb-4 mr-2 flex h-full">
<label className="flex">
  <input type="checkbox" className="w-4 h-4 rounded mt-1.5 mr-0" />
</label>
</div>
<div>
<p>
  Hiermit erkläre ich ausdrücklich, dass die Salzburg
  AG mit der von mir beauftragte Dienstleitung vor Ablauf
  der 14 tägigen Rücktrittsfrist gemäß § 11 FAGG beginnen soll.
  </p>
</div>
</div>


<div className="bg-white mt-12 my-0 h-[full] relative flex items-center justify-center">
<Link
  to="/Step5"
  className="flex justify-between px-4 py-3 text-white rounded-lg bg-primary w-full">
  Bestellung/Angebot kostenpflichtig abschicken
  <div className="items-center flex">
  <ChevronRightIcon className="w-6 h-6" />
  </div>
</Link>
</div>

<div className="bg-white my-4 h-[50px] relative flex items-center justify-center">
<Link
  to="/erinnerung"
  className="flex px-4 py-3 items-center justify-center rounded-lg shadow-lg w-full bg-white">
  Erinnern Sie mich in einer Woche
</Link>
</div>

<div className="bg-white h-[50px] flex items-center justify-center">
<Link to="/keininteresse" className="text-center items-center justify-center">
  Kein Interesse
</Link>
</div>

</div>
    </div>
  
  );
}
