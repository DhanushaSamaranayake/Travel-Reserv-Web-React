import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
    <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2> blu blu blu blul blul blbuul </h2>
            <p className='py-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem inventore 
                adipisci rerum quasi, nesciunt atque nam vero fugit minus ad mollitia commodi
                quaerat quo quod sapiente? Consectetur repellendus facilis molestias unde odio 
                accusamus pariatur exercitationem sapiente illum reiciendis veniam accusantium 
                officiis laborum temporibus aperiam, incidunt deserunt fugit excepturi aut labore, 
                expedita voluptatum? Suscipit eius ut maxime quam voluptatibus, fuga fugiat quasi 
                commodi voluptatum ullam maiores explicabo non cum omnis at vel perferendis velit. 
                Incidunt id vitae natus ut voluptas ipsa doloremque necessitatibus, eligendi quis 
                eius doloribus nisi officiis reiciendis assumenda perspiciatis consectetur autem eos 
                molestiae libero quam facilis quisquam. </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className=' flex flex-col lg:flex-row items-center text-center'>
                <button className='p-3 border bg-gradient-to-r from-[var(--primery-dark)] to-[var(--primery-light)] text-white rounded-md'><RiCustomerService2Fill size={30} /></button>
                <div>
                  <h3 className='py-2'> LEADING SERVICE</h3>
                  <p className='py-1'> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
            <div className=' flex flex-col lg:flex-row items-center text-center'>
                <button className='p-3 border bg-gradient-to-r from-[var(--primery-dark)] to-[var(--primery-light)] text-white rounded-md'><MdOutlineTravelExplore size={30} /></button>
                <div>
                  <h3 className='py-2'> LEADING SERVICE</h3>
                  <p className='py-1'> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
        </div>
    </div>

    <div>
      <div className='border text-center'>
        <p className='bg-gray-800 text-white py-2'>BOOK NOW</p>
      </div>
      <form className='w-full'>
        <div className='flex flex-col my-2'>
          <label>Destination</label>
          <select className='border rounded-md p-2'>
            <option value="">Hikkaduwa Beach</option>
            <option value="">Anurada pura</option>
            <option value="">Nuwara Eliya</option>
            <option value="">Sigiriya</option>
          </select>
        </div>
        <div className='flex flex-col my-2'>
          <label>Check In</label>
          <input className='border rounded-md p-2' type="date"/>
        </div>
        <div className='flex flex-col my-2'>
        <label>Check Out</label>
          <input className='border rounded-md p-2' type="date"/>
        </div>
        <button className='w-full my-4 p-3 border bg-gradient-to-r from-[var(--primery-dark)] to-[var(--primery-light)] text-white rounded-md' >Rates & Availabilities</button>
      </form>
    </div>

    </div>
  )
}

export default Search     