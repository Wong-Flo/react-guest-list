import { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

export default function App() {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [guests, setGuests] = useState([]);
  const addGuest = (firstName, lastName) => {
    setGuests([...guests, { firstName, lastName }]);
  };
  return (
    <>
      <h1>Adding Guests to List </h1>
      <GuestForm
        firstNameInput={firstNameInput}
        setFirstNameInput={setFirstNameInput}
        lastNameInput={lastNameInput}
        setLastNameInput={setLastNameInput}
        addGuest={addGuest}
      />

      <hr />
      <h2>Attending or not Attending</h2>
      <GuestList guests={guests} />
      <input type="checkbox" />
      <button>Remove</button>
    </>
  );
}
