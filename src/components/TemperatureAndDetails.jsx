import React from 'react'
import { 
    UilArrowUp,
    UilArrowDown,
    UilTemperatureHalf,
    UilTear,
    UilWind,
    UilSun,
    UilSunset 
} from '@iconscout/react-unicons';

function TemperatureAndDetails() {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-200">
            <p>Feels Like Cloudy</p>
            
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="/clear.png" alt="" className=" w-20 " />
            <p className="text-5xl">35°</p>
            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperatureHalf size={20} className=" mr-1  " />
                    Real fell:
                    <span className=" font-medium ml-1"> 34° </span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={20} className=" mr-1  " />
                    Humidity:
                    <span className=" font-medium ml-1"> 75% </span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={20} className=" mr-1  " />
                    Wind Speed:
                    <span className=" font-medium ml-1"> 2km/h </span>
                </div>
            </div>
        </div>
        <div className=" flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

            <UilSun />
            <p className=" font-light ">
                Sun Rise: <span className=" font-medium ml-1">06:45 AM</span>
            </p>
            <p className=" font-light">
               | 
            </p>
            <UilSunset />
            <p className=" font-light ">
                Sunset: <span className=" font-medium ml-1">06:30 PM</span>
            </p>
            <p className=" font-light">
               | 
            </p>
            <UilArrowUp />
            <p className=" font-light ">
                High: <span className=" font-medium ml-1">50° </span>
            </p>
            <p className=" font-light">
               | 
            </p>
            <UilArrowDown />
            <p className=" font-light ">
                Low: <span className=" font-medium ml-1">-24°</span>
            </p>
            
        </div>
    </div>
  )
}

export default TemperatureAndDetails;