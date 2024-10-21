
import {useSelector, useDispatch} from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisibleCards} from '../store/cards/cards-selectors'
import {selectFilters} from 'store/filters/filters-selectors'

import {addFilter} from '../store/filters/filters-actions'

const JobList = () => {

  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const cards = useSelector((state) => selectVisibleCards(state, currentFilters));

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