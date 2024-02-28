import "./App.css";
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopBottons from "./components/TopBottons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";


function App() {
    return (

        <div className="flex flex-col mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
         shadow-gray-400 ">

            <TopBottons />
            <Inputs />


            <TimeandLocation />
            <TemperatureAndDetails />
            


        </div>
    );


}

export default App;