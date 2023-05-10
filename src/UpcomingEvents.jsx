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
                href="https://www.google.com/maps/place/Provisions+Deli+%26+Bottle+Shop/@33.7890624,-117.8555634,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcd9e7360824bd:0xfd72bdd5173e32bc!8m2!3d33.7890624!4d-117.8529885!16s%2Fg%2F1tflmr32"
                target="_blank"
              >
                {e.locationAddress}
              </a>
              {/* <a href="maps.apple.com/maps?q=cupertino" target="_blank">
                {e.locationAddress}
              </a> */}
            </h3>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
