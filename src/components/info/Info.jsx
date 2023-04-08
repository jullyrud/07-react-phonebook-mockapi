import { ContactList, ContactItem, DelButton } from './Info.styled'
import { useSelector } from 'react-redux'
import { selectContacts } from 'components/reduce/selectors'

export function Info ({ contacts ,deleteContactFunct }  ) {
   
    const { isLoading } = useSelector(selectContacts)

    return (
        <ContactList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <span>{`${name}: ${number}`}</span>
                    <DelButton onClick={()=>{deleteContactFunct(id)}} disabled={isLoading} type="button">Delete</DelButton>
                </ContactItem>
            ) )}
        </ContactList>
    )
}

 