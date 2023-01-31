import React from 'react';
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
export default function Contact() {
  return (
    <div className='container mx-auto px-20 py-10'>
      <section className='flex justify-between items-center'>
        <div className='flex flex-col items-center'>
          <AiFillHome size={35} color={'619AD4'} />
          <h2 className='text-xl font-light text-black'>address</h2>
          <h2 className='text-xl font-light text-black'>Tunis - bardo denden</h2>
        </div>
        <div className='flex flex-col items-center'>
          <AiFillPhone size={35} color={'619AD4'} />
          <h2 className='text-xl font-light text-black'>Phone</h2>
          <h2 className='text-xl font-light text-black'>123-23-45-587</h2>
        </div>
        <div className='flex flex-col items-center'>
          <MdEmail size={35} color={'619AD4'} />
          <h2 className='text-xl font-light text-black'>Email</h2>
          <h2 className='text-xl font-light text-black'>houssinmhamdi123@gmail.com</h2>
        </div>
      </section>
      <section>
        <h2 className='text-center text-3xl mt-10'>Contact Form</h2>
        <div className='ml-[10rem] mb-40 mt-10'>
          <form className='flex flex-col text-center w-[66rem] h-40'>
            <div className='flex justify-between items-center'>
              <input className='border-2 p-2 w-80 border-black' type="text" placeholder='Name' />
              <input className='border-2 p-2 w-80 border-black' type="text" placeholder='Subject*' />
              <input className='border-2 p-2 w-80 border-black' type="text" placeholder='Email' />
            </div>
            <div className='w-5 h-5 mt-3'>
              <textarea placeholder='Your Message' cols="30" rows="10" className='h-30 w-[66rem] border-2 border-black'></textarea>
            </div>
            <button className='mt-[15rem] text-left ml-5 bg-[#619AD4] block w-14 p-1 text-white pl-2 rounded-xl'>Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}
