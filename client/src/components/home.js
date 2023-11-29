import React from 'react'
import beachVid from '../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
import Destinations from "./Destination";
import Search from "./search";
import Selects from "./selects";
import SelectsCard from "./selectscard";
import Carousel from "./carousel";


const Home = () => {
  return (
    <>
    <div className=' w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted />
        <div className='absolute w-full h-full top-0 left-0 '></div>
        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h2>Make Memerable Memories With Each Destination </h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <dive>
                    <input className=' bg-transparent w-[300px] sm:w-[400px] font-[poppins] focus:outline-none ' type="text" placeholder='Search Your Destinations' />
                </dive>
                <div>
                    <button className='p-3 border bg-gradient-to-r from-[var(--primery-dark)] to-[var(--primery-light)] text-white rounded-md'> <AiOutlineSearch size={20} className='icon'  style={{color: '#ffffff'}}/> </button>
                </div>
            </form>
        </div>
      
    </div>
    <Destinations />
    <Search />
    <Selects />
    <SelectsCard />
    <Carousel />
    </>
  )
}

export default Home