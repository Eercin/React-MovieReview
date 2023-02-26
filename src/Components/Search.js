import React from 'react';
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

function Search() {
const { text, setText, setNewData, data, holderStatus, setHolderStatus } = useContext(UserData)

  
  const searchTerm = (e) => {
    const matchedFilms = data.filter((item) => {
      return `${item.title} ${item.category}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setNewData(matchedFilms);
    setText(e.target.value);
  };
  
 const handleFocus = () => {
  setHolderStatus(true) 
 }
 const handleBlur = () => {
  setHolderStatus(false)
 } 

  const setHolder = holderStatus || text ? "" : "search"
    
  return (
    <div>
      <input
        type='text'
        placeholder= {setHolder}
        value={text}
        onChange={searchTerm}
        className='rounded-md  text-center focus:outline-slate-700 outline-'
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default Search;


