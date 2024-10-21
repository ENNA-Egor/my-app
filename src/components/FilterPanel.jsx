import {useSelector, useDispatch} from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {selectFilters} from '../store/filters/filters-selectors';
import {clearFilter, removeFilter} from '../store/filters/filters-actions';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const curentFilter = useSelector(selectFilters);

  if (curentFilter.length === 0){
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {curentFilter.map(filter=> (
          <Badge
           key = {filter}
           variant="clearable">
            {filter}
           </Badge>
          ))}
        </Stack>

        <button className='link'
        onClick={()=> (dispatch(clearFilter))}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};