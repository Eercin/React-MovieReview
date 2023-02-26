import React from 'react'
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

function Category() {
const {filterCategory,navCategory} = useContext(UserData)
  return (
    <div>
      <ul className='flex gap-8 '>
        {navCategory.map((item,index) => (
          <li key={index} className='text-white text-opacity-80 hover:text-opacity-100 text-lg tracking-wider active:outline outline-slate-600 active:bg-slate-800/80 outline-3 outline-offset-4 rounded-md cursor-pointer transition duration-500 transform hover:scale-110'>
            <button type='button' onClick={() => filterCategory(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category
