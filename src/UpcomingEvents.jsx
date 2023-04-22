import { events } from "../data";
export default function UpcomingEvents() {
  return (
    <>
      <h1 id="events-title">Upcoming Events</h1>
      <div className="events-box">
        {events.map((e, idx) => (
          <div className="event-card" ket={idx}>
            <h3>
              When: <br /> {e.date}
            </h3>
            <h3>
              Where: {e.locationName}&nbsp;
              <br />
              <a
                href="https://maps.apple.com/place?q=Provisions%20Deli%20%26%20Bottle%20Shop&ll=33.789014162248925%2C-117.85288989543915&auid=16839856032145497476&lsp=9902&address=143%20N%20Glassell%20St%2C%20Orange%2C%20CA%2092866%2C%20United%20States"
                target="_blank"
              >
                {e.locationAddress}
              </a>
            </h3>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
