import { useState } from 'react';
import GuestForm from './GuestForm';
import GuestList from './GuestList';

const baseUrl = 'http://localhost:4000';
// States for the following
export default function App() {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [guests, setGuests] = useState([]);

  // Adding new Guest to API

  const addGuest = async (firstName, lastName) => {
    try {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const newGuest = await response.json();

      setGuests([...guests, newGuest]);
    } catch (error) {
      console.error('Failed to add guest:', error);
    }
  };

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
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
      <GuestList
        guests={guests}
        attendance={attendance}
        removeGuest={removeGuest}
      />
    </>
  );
}
