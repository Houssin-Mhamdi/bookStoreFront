import React from 'react';
import { data } from '../data/dataservices.js';
export default function Serveses() {
    return (
        <div className='container mx-auto px-5 py-5 flex justify-around'>
            {data?.map((service) => {
                return (
                    <div className=' w-60 rounded-full h-20 text-center border-2' key={service.id}>
                        <img src={service.img} alt="" className='w-8 h-8 ml-24 mt-3'/>
                        <span className='font-bold'>{service.title}</span>
                    </div>

                )
            })}


        </div>
    )
}
