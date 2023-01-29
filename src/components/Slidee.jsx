import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { books } from '../data/books.js';
import HeadingTitle from './HeadingTitle.jsx';
import Rating from './Rating.jsx';
export default function Slidee() {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ];
  return (
    <div>
      <Slide slidesToScroll={1} slidesToShow={1} indicators={false} autoplay={false} responsive={responsiveSettings}>
        {books.map((book) => {
          return (
            <div className=' ' key={book.id} style={{
              textAlign: 'center',
              background: 'white',
              padding: '50px 50px',
              fontSize: '30px'
            }}>
              <div className='border-2 border-black	pl-7 pr-5 pt-2 bg-slate-300 h-[27rem] w-64 shadow-2xl drop-shadow-2xl rounded-lg'>
                <img src={book.image} alt={book.title} className='w-48 h-64 drop-shadow-lg' />
                <div>
                  <h4 className='text-sm font-bold mt-2'>{book.title}</h4>
                  <div className='text-lg'>
                    <Rating rating={book.rating} reviews={book.reviews} />
                  </div>
                  <div className='text-lg pt-1 pb-2 text-red-600 font-bold'>
                    {book.price}$
                  </div>
                  <hr className='border-1 border-black' />
                  <div className='flex text-center justify-center items-center gap-5 mt-1' >
                    <AiFillEye cursor={'pointer'} />
                    <BsFillHandbagFill size={25} cursor={'pointer'} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  )
}
