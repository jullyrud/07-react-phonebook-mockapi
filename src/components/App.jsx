import { Form } from './form/Form'
import { Info } from './info/Info'
import { Filter } from './filter/Filter'
import { Wrap } from './App.styled'
import { Error } from './Error/Error'
import { useSelector, useDispatch } from "react-redux"

import { selectContacts, visibleContacts } from './reduce/selectors'
import { useEffect } from 'react';
import { fetchContacts, deleteCont } from './reduce/operations';


export function App() {
  const dispatch = useDispatch();
  const { error } = useSelector(selectContacts)
  const contacts = useSelector(visibleContacts) 
  

 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   function deleteContactFunct(id) {
    dispatch(deleteCont(id))
  }

return (
  <>
    <Wrap>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter/>
      {error && <Error text='There is something wrong' />}
      <Info contacts={contacts} 
        deleteContactFunct={deleteContactFunct} />
    </Wrap>
  </>
    ) 

}