// import data from '../mock/data.json';
import {useSelector} from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectAllCard} from '../store/cards/cards-selectors'

const JobList = () => {
  const cards = useSelector(selectAllCard);
  return (
    <div className='job-list'>
      {cards.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};