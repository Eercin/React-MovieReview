import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

function CardDetails() {
  const {newData} = useContext(UserData);

  const {id} = useParams()
  const movie = newData.find((item) => +item.id === +id );
  
  const {title,image,description,trailer} = movie

  return (
    <div className='my-auto mt-20'>
      <main key={id}>
        <section>
          <img
            src={image}
            alt={title}
            className='m-auto h-80 w-65 transition duration-500 transform hover:scale-110 rounded-lg'
          />
        </section>
        <article className='container mx-auto bg-indigo-700/70 hover:bg-indigo-600 text-center rounded-lg w-8/12 mt-3'>
          <h3 className='font-bold text-xl text-black'>{title}</h3>
          <div className='text-lg text-stone-300/80 overflow-hidden'>
            <p>{description}</p>
          </div>
          <div className='w-8/12 mx-auto'>
            <div
              className='relative overflow-hidden rounded-lg'
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                title='trailer'
                src={trailer}
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full'
              />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default CardDetails;
