import React, { useState } from 'react';
import AuthorComp from '../components/AutherComp/AuthorComp.jsx';
import SearchComp from '../components/SearchComp/SearchComp.jsx';
import { authors } from '../data/authors.js';

export default function Authors() {
  const [autherSearch, SetAutherSearch] = useState('')
  const filterdAuthors = authors.filter((item) => item.name.toLowerCase().includes(autherSearch))
  return (
    <div>
      <div className='container mx-auto px-28'>
        <SearchComp SetAutherSearch={SetAutherSearch} autherSearch={autherSearch} />
        <section className='flex justify-around items-center flex-wrap' >
          {filterdAuthors <= 0 ? (<div className='text-2xl font-bold mb-12 mt-10 border-b-2 border-black'>No Author found </div>) : filterdAuthors.map((item) => {
            return (
              <AuthorComp item={item} key={item.id} />
            )
          })}


        </section>
      </div>
    </div>
  )
}
