import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsStar, BsStarHalf } from "react-icons/bs";
export default function Rating({ rating, reviews }) {
    return (
        <div>
            <div className='flex justify-around items-center mt-2 text-orange-600'>
                {rating >= 1 ? <AiFillStar /> : rating >= 0.5 ? <BsStarHalf /> : <BsStar />}
                {rating >= 2 ? <AiFillStar /> : rating >= 1.5 ? <BsStarHalf /> : <BsStar />}
                {rating >= 3 ? <AiFillStar /> : rating >= 2.5 ? <BsStarHalf /> : <BsStar />}
                {rating >= 4 ? <AiFillStar /> : rating >= 3.5 ? <BsStarHalf /> : <BsStar />}
                {rating >= 5 ? <AiFillStar /> : rating >= 4.5 ? <BsStarHalf /> : <BsStar />}
                <span className='mr-2 ml-2 text-sm text-orange-600'>{rating}</span>
            </div>
            <span className='text-sm'>{reviews}(reviews)</span>
        </div>
    )
}
