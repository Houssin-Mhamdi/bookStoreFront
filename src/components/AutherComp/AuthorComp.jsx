import React from 'react'

export default function AuthorComp({item}) {
    const {image, name} = item
    return (

        <div className=' border-2 border-black p-1 w-80 h-72 m-10 flex text-center items-center flex-col '>
            <img src={image} className='h-60 w-72 p-2' alt={name} />
            <h2 className='text-center font-bold'>{name}</h2>
        </div>

    )
}
