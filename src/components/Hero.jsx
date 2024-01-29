import React from 'react';
import BG from '../assets/AZ_HP_BG.png';
import Bottle from '../assets/AZ_HP_Bottle.png';
import AzzTxt from '../assets/AZ_HP_AzzTxt.png';
import HotTxt from '../assets/AZ_HP_HotTxt.png';
import PurTxt from '../assets/AZ_HP_PurTxt.png';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full flex justify-center content-center flex-col">
            <img src={BG} className="h-full w-full object-cover z-0 " />
            <img src={Bottle} className="h-full w-full object-cover absolute left-0 top-0 z-20" />
            <img src={AzzTxt} className="h-full w-full object-cover absolute left-0 top-0 z-20" />
            <img src={PurTxt} className="h-full w-full object-cover absolute left-0 top-0 z-20" />
            <img src={HotTxt} className="h-full w-full object-cover absolute left-0 top-0 z-10" />
            <button
                onClick={() => navigate('/main')}
                className='bg-prime-red text-prime-dark text-lg font-extrabold font-body absolute bottom-[32%] left-[39%] z-20 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                Enter
            </button>
        </div>
    )
}

export default Hero