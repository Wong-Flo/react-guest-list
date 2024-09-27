import { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

export default function App() {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [guests, setGuests] = useState([]);
  const addGuest = (firstName, lastName) => {
    const newGuest = {
      id: guests.length + 1,
      firstName,
      lastName,
      isAttending: false,
    };
    setGuests([...guests, newGuest]);
  };
  const attendance = (id) => {
    setGuests((prevGuests) =>
      prevGuests.map((guest) =>
        guest.id === id ? { ...guest, isAttending: !guest.isAttending } : guest,
      ),
    );
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
      <GuestList guests={guests} attendance={attendance} />
    </>
  );
}
