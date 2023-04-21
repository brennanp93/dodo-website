import { events } from "../data";
export default function UpcomingEvents() {

  return (
    <>
        <h1 id="events-title">Upcoming Events</h1>
      <div className="events-box">
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
