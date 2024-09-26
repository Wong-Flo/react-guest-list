export default function GuestForm({
  firstNameInput,
  setFirstNameInput,
  lastNameInput,
  setLastNameInput,
  addGuest,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstNameInput && lastNameInput) {
      addGuest(firstNameInput, lastNameInput);
      setFirstNameInput('');
      setLastNameInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstNameInput">First Name </label>
      <input
        id="firstNameInput"
        value={firstNameInput}
        onChange={(event) => setFirstNameInput(event.currentTarget.value)}
      />

      <label htmlFor="lastNameInput">Last Name </label>
      <input
        id="lastNameInput"
        value={lastNameInput}
        onChange={(event) => setLastNameInput(event.currentTarget.value)}
      />
      <button>Return</button>
    </form>
  );
}
