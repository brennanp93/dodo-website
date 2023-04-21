import { events } from "../data";
export default function UpcomingEvents() {
  return (
    <>
      <h1 id="events-title">Upcoming Events</h1>
      <div className="events-box">
        {events.map((e, idx) => (
          <div className="event-card" ket={idx}>
            {/* <h3>{e.name}</h3> */}
            <h2>When: {e.date}</h2>

            <h4>
              Where: {e.locationName}&nbsp;
              <br />
              {e.locationAddress}
            </h4>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
