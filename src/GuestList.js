export default function GuestList({ guests, attendance }) {
  return (
    <div data-test-id="guest">
      <h3>Guest List</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Attending or not?</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={`guest-${guest.id}`}>
              <td> {guest.firstName} </td>
              <td> {guest.lastName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={guest.isAttending}
                  onChange={() => attendance(guest.id)}
                />
                {guest.isAttending ? 'Attending' : 'Not Attending'}
              </td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
