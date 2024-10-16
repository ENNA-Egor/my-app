import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {addCards} from './store/cards/cards-actions';
import data from './mock/data.json';
 
import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(addCards(data));
  })

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
