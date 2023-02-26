import React, { useState } from 'react';
import {
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import Card from './Components/Card';
import Search from './Components/Search';
import Category from './Components/Category';
import data from './Components/Data';
import CardDetails from './Components/CardDetails';
import { UserData } from './Components/contexts/GlobalContext';

const allCategories = [
  'Popular',
  ...new Set(data.map((item) => item.category)),
];

const App = () => {
  const [navCategory] = useState(allCategories);
  const [newData, setNewData] = useState(data);
  const [text, setText] = useState('');
  const [holderStatus, setHolderStatus] = useState(false);
  const [expandedIds, setExpandedIds] = useState([]);

  const filterCategory = (category) => {
    if (category === 'Popular') {
      setNewData(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setNewData(newItems);
  };

  const location = useLocation();
  const isCardDetailsPage = location.pathname.includes('/movies/');

  return (
    <div>
      <UserData.Provider
        value={{
          newData,
          text,
          setText,
          setNewData,
          data,
          filterCategory,
          navCategory,
          holderStatus,
          setHolderStatus,
          expandedIds,
          setExpandedIds,
        }}
      >
        {isCardDetailsPage ? (
          <nav className='bg-slate-900 flex p-4 rounded-md rounded-t-none mb-5 sticky top-0 z-50 flex-wrap '>
            <h1 className='text-white text-lg font-extrabold text-opacity-80 tracking-wide '>
              MovieCard
            </h1>
            <Link
              to='/'
              className='text-white text-lg font-extrabold text-opacity-80 hover:text-opacity-100 tracking-wide mx-auto pr-24'
            >
              Return
            </Link>
          </nav>
        ) : (
          <header className='bg-slate-900 flex justify-between p-4 rounded-md rounded-t-none mb-5 sticky top-0 z-50 flex-wrap '>
            <h1 className='text-white text-lg font-extrabold text-opacity-80 tracking-wide '>
              MovieCard
            </h1>
            <Category />
            <section>
              <Search />
            </section>
          </header>
        )}
        <Routes>
          <Route exact path='/' element={<Card />} />
          <Route path='/movies/:id' element={<CardDetails />} />
        </Routes>
      </UserData.Provider>
    </div>
  );
};

export default App;
