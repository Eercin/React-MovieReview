import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

function Card() {
  
  const {newData,expandedIds,setExpandedIds} = useContext(UserData)
  

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-self-center h-120 w-90 mb-5'>
      {newData.map((item) => {
        const { title, image, description, id } = item;
        const isExpanded = expandedIds.includes(id);
        const showButton = description.length > 120;
        const truncatedDescription = description.slice(0, 120);

        return (
          <main key={id}>
            <div className='relative'>
              <img
                src={image}
                alt={title}
                className='m-auto h-80 w-65 transition duration-500 transform hover:scale-110 rounded-lg'
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100'>
                <Link to={`/movies/${id}`}>
                  <p className='text-white font-bold cursor-pointer transition duration-500 transform hover:scale-110 hover:underline text-lg'>
                    View More
                  </p>
                </Link>
              </div>
            </div>
            <article className='container mx-auto bg-indigo-700/70 hover:bg-indigo-600 text-center rounded-lg w-8/12'>
              <h3 className='font-bold text-xl text-black'>{title}</h3>
              <div className='text-lg text-stone-300/80 overflow-hidden'>
                <p className={isExpanded ? 'block' : 'hidden'}>{description}</p>
                <p className={isExpanded ? 'hidden' : 'block'}>
                  {truncatedDescription}
                  {showButton && (
                    <button
                      className='text-blue-600 font-bold hover:underline underline-blue-500 pl-2'
                      onClick={() => toggleExpand(id)}
                    >
                      Show More
                    </button>
                  )}
                </p>
                {showButton && isExpanded && (
                  <button
                    className='text-blue-600/90 font-bold hover:underline underline-blue-500 pl-2'
                    onClick={() => toggleExpand(id)}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </article>
          </main>
        );
      })}
    </div>
  );
}

export default Card;
