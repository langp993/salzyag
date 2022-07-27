import Salzburgicon from "./Images/Salzburgag.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";
import Step5 from "./Pages/Step5";
import Keininteresse from "./Pages/Keininteresse";
import Erinnerung from "./Pages/Erinnerung";

function App() {
  return (

    <div className="">

      
      <Router>
        <div className="flex items-center justify-center p-4 mb-4">
          <img className="w-52" src={Salzburgicon} alt="salzburgag" />
        </div>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/Step4" element={<Step4 />} />
          <Route path="/Step5" element={<Step5 />} />
          <Route path="/Erinnerung" element={<Erinnerung />} />
          <Route path="/keininteresse" element={<Keininteresse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
