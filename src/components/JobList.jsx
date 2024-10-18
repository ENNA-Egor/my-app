// import data from '../mock/data.json';
import {useSelector, useDispatch} from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectAllCard} from '../store/cards/cards-selectors'

import {addFilter} from '../store/filters/filters-actions'

const JobList = () => {

  const dispatch = useDispatch();
  const cards = useSelector(selectAllCard);

  const handleAddFilter = (filter)=> {
    dispatch (addFilter(filter));
  }
  return (
    <div className='job-list'>
      {cards.map(item => (
        <JobPosition key={item.id} {...item} handleAddFilter = {handleAddFilter} />
      ))}
    </div>
  )
}

export {JobList};