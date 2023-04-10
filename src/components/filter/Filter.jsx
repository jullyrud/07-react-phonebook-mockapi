import { setFilter } from '../reduce/filtersSlice'
import { useDispatch } from "react-redux"


export function Filter() {
    const dispatch = useDispatch()   
    
    function onFilterChange(e) {
        const filterValue = e.target.value
        localStorage.setItem('savedFilterValue', filterValue);
        dispatch(setFilter(filterValue))
}
    
    const savedDefaultValue = localStorage.getItem('savedFilterValue')
        
    return (    
        <>  
            <label htmlFor="search"> Find contacts by name </label>
            <input onChange={onFilterChange} defaultValue={savedDefaultValue} type="text" id="search" />
        </>
    )

}

