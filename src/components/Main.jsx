import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import BG2 from '../assets/AZ_HP_BG2.png';
import BG1 from '../assets/AZ_HP_BG.png';
import bottleSolo from '../assets/AZ_HP_BottleSolo.png'
import rect from '../assets/Rectangle1.png';
import sixPack from '../assets/AZ_HP_SixPackScaled.png';
import bgLine from '../assets/Rectangle43.png';
import star from '../assets/Star1.png';
import wings from '../assets/Wangs.png';
import wings2 from '../assets/Wangs2.png';

const Main = () => {
    // const [section2, setSection2] = useState(null);

    // useEffect(() => {
    //     setSection2(document.querySelector('#section2'))
    //     const section3 = document.querySelector('#section3')
    //     const section4 = document.querySelector('#section4')
    // }, [])

    return (
        <>
            <div>
                <div className='h-screen w-screen flex justify-center content-center flex-col sticky z-0 '>
                    <img src={rect} className="h-full w-full object-cover -z-10 fixed -left-[30%]" />
                    <img src={bottleSolo} className="h-full w-full object-cover z-0 absolute -left-[40%] scale-150 -rotate-12" />
                    <img src={sixPack} className="absolute h-full w-full object-cover pl-64 " />
                    <div className="h-screen w-full flex justify-center content-center flex-col">
                        <img src={BG2} className="h-full w-full object-cover -z-20 " />
                    </div>
                    <div className='absolute w-[50%] left-[50%] top-0 h-full flex flex-col content-center'>
                        <h1 className=' text-prime-light mt-24 text-[48px] -ml-16 lg:text-[64px] xl:text-[96px] font-title'>
                            AZZARO'S
                        </h1>
                        <h1 className=' text-prime-light text-[24px] lg:text-[36px] xl:text-[48px] font-title lg:-mt-5 lg:-ml-16'>
                            HOT PURSUIT
                        </h1>
                        <p className='text-prime-light xl:-ml-16 font-body text-[24px] '>
                            is now available...
                        </p>
                        <h1 className='text-prime-light xl:-ml-16 font-title text-[48px]'>
                            ONLINE!
                        </h1>
                        <hr className='w-[30%] xl:-ml-16' />
                        <br />

                        <p className='text-prime-light xl:-ml-16 font-body text-[24px] '>
                            Your favorite hot sauce that goes<br />
                            on EVERYTHING, is finally here!<br />
                        </p>
                        <br />
                        <hr className='w-[30%] xl:-ml-16' />
                        <br />

                        <p className='text-prime-light xl:-ml-16 font-body text-[24px] '>
                            HOT & READY<br />
                            TO ORDER TODAY!
                        </p>
                    </div>
                    <div className='absolute w-[50%] left-[50%] bottom-0 h-[250px] sm:-ml-16 flex md:flex-row content-center justify-evenly flex-col'>
                        <button
                            onClick={() => section2.scrollIntoView({ behavior: 'smooth' })}
                            className='bg-prime-red text-prime-dark text-lg font-extrabold font-body z-20 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                            ABOUT US
                        </button>
                        <button
                            onClick={() => section4.scrollIntoView({ behavior: 'smooth' })}
                            className='bg-prime-red text-prime-dark text-lg font-extrabold font-body z-20 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                            ORDER NOW
                        </button>
                        <button
                            onClick={() => section3.scrollIntoView({ behavior: 'smooth' })}
                            className='bg-prime-red text-prime-dark text-lg font-extrabold font-body z-20 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                            WING RECIPE
                        </button>
                    </div>
                </div>
                <div id='section2' className="h-screen w-full flex justify-center content-center flex-col z-0 bg-prime-brown">
                    <img src={bgLine} className='relative -z-20 top-0 w-full my-11' />
                    <img src={bgLine} className='relative w-full z-10 my-11' />
                    <img src={bgLine} className='relative w-full z-10 my-11' />
                    <img src={bgLine} className='relative w-full z-10 my-11' />
                    <img src={bgLine} className='relative w-full z-10 my-11' />
                    <img src={bgLine} className='relative -z-20 top-[90%] w-full my-11' />
                    <div className='absolute w-[50%] left-[50%] top-[100%] h-full flex flex-col text-center content-center'>
                        <h1 className='font-fancy mt-[100px] text-[96px] text-prime-dark'>History</h1>
                        <div className='w-[80%] h-[55%] bg-prime-dark/70 rounded-2xl border-black border-4 self-center px-20 pt-10 text-left'>
                            <br />
                            <p className='text-prime-light font-body text-[18px]'> This is obviously where an about me section would go.  This can explain the history of the recipe from Aunt Judy’s family, and how it migrated to the KC restaurant, which evolved our family recipe that is now sold direct to consumer online over the internet.  The heat is on, Baby!</p>
                            <br />
                            <p className='text-prime-light font-body text-[18px]'> This is obviously where an about me section would go.  This can explain the history of the recipe from Aunt Judy’s family, and how it migrated to the KC restaurant, which evolved our family recipe that is now sold direct to consumer online over the internet.  The heat is on, Baby!</p>
                        </div>
                        <button
                            onClick={() => section3.scrollIntoView({ behavior: 'smooth' })}
                            className='bg-prime-red self-center mt-10 text-prime-dark text-lg font-extrabold font-body z-20 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                            WING RECIPE
                        </button>
                    </div>
                </div>
                <div id='section3' className="h-screen w-full flex justify-center content-center text-center flex-col bg-prime-light z-10 sticky">
                    <img src={star} className='-z-10 absolute' />
                    <div className='flex flex-row justify-evenly h-full'>


                        <div className='z-10 flex flex-col w-[33%]'>
                            <img src={wings} className=' w-[75%] h-[40%] rounded-full object-cover mt-10 ml-20' />
                            <img src={wings2} className='h-[40%] w-[70%] object-cover rounded-[50px] mt-10 ml-24 -rotate-6' />
                        </div>

                        <div className='z-10 w-[34%] text-center mt-10'>
                            <h1 className='font-concert text-[96px] mt-10'>AZZARO'S</h1>

                            <h2 className='font-body text-[48px]'>CLASSIC BUFFALO</h2>
                            <h2 className='font-body text-[48px]'>WING RECIPE</h2>

                            <div className='text-left ml-20 font-concert text-[24px] mt-10'>
                                <ol className='list-decimal'>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                    <li>
                                        List Item
                                    </li>
                                </ol>
                            </div>

                        </div>

                        <div className='z-20 w-[33%]'>
                            <div className='scale-150'>
                                <div className='scale-150'>
                                    <img src={bottleSolo} className=' absolute mt-10 -ml-10 rotate-6 scale-150' />
                                </div>
                            </div>
                        </div>



                    </div>
                    <button
                        onClick={() => section4.scrollIntoView({ behavior: 'smooth' })}
                        className='bg-prime-dark text-prime-light absolute self-center mt-96 text-lg font-bold font-body z-30 w-[180px] h-[60px] rounded-lg border-2 border-prime-dark shadow-inner shadow-prime-light/60 hover:scale-125 hover:shadow-prime-light active:shadow-prime-dark active:scale-100 '>
                        ORDER NOW
                    </button>
                </div>
                <div id='section4' className="h-screen w-full flex justify-center content-center flex-col bg-prime-dark z-20 sticky">
                    <img src={BG1} className="h-full top-0 left-0 w-full object-cover absolute -z-20 " />
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default Main