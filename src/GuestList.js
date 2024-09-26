export default function GuestList({ guests }) {
  return (
    <div>
      <h3>Guest List</h3>
      {guests.map((guest) => (
        <div key={`guest-${guest.id}`}>
          <p>
            {guest.firstName}
            {guest.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}
