import React from 'react';
import { CiSearch } from "react-icons/ci";

export default function SearchComp({SetAutherSearch,autherSearch}) {
    return (

        <section className='mt-8 mb-5 ml-80'>
            <div className='relative'>
                <input type="text" placeholder='Search...' className='w-[35rem] h-10 rounded-lg p-3 shadow-lg border-2' onChange={(e)=>SetAutherSearch(e.target.value)} value={autherSearch}/>
                <CiSearch className='absolute top-2 right-[27rem] text-2xl' />
            </div>
        </section>

    )
}
