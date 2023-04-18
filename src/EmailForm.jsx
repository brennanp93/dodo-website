export default function EmailForm() {
  return (
    <div className="email-form-container">
      <div className="email-form">
        <h1>Subscribe to receive updates</h1>
        <form action="submit">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
