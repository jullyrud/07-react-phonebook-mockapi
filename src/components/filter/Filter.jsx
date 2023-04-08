import { setFilter } from '../reduce/filtersSlice'
import { useDispatch } from "react-redux"


export function Filter({filter}) {

  
    const dispatch = useDispatch()   
    
     function onFilterChange(e) {
         dispatch(setFilter(e.target.value))
         
  }

    return (
        <>  
            <label htmlFor="search"> Find contacts by name </label>
            <input onChange={onFilterChange} defaultValue={filter} type="text" id="search" />
        </>
    )

}

