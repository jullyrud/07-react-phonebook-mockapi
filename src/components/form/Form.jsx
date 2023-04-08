
import { AddForm, Input, Label, Button } from './Form.styled'

import { useDispatch } from "react-redux"
import { addCont } from '../reduce/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'components/reduce/selectors';

export function Form() {
  const {contacts, isLoading } = useSelector(selectContacts)
  const dispatch = useDispatch()

    const handleSubmit = event  => {
      event.preventDefault()
      const name = event.target.name.value
      const number = event.target.number.value

      const data = {
        name,
        number
      }

      for (let cont of contacts) {
        if (data.name === cont.name) {
          return alert(`${data.name} is already in contacts`)
        }
      }
      dispatch(addCont(data)) 
      event.target.reset()
  }
 
  return (
    <>
      <AddForm  onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(?:[' -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
        />
          
        <Label htmlFor="number">Number</Label>
        <Input
          type="text"
          name="number"
          pattern="^\+?\d[\d\-\(\) ]{8,}\d$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
        />
        <Button disabled={isLoading} type="submit">add contact</Button>
      </AddForm>
    </>
  )

} 


