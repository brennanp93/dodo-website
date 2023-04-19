import { events } from "../data";
export default function UpcomingEvents() {

  return (
    <>
      <div className="events-box">
        <h1>Upcoming Events</h1>
        {events.map((e, idx) => (
          <div className="event-card" ket={idx}>
            <h3>{e.name}</h3>
            <h2>Date: {e.date}</h2>
            <ul>
              <li>{e.locationName}</li>
              <li>{e.locationAddress}</li>
            </ul>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
