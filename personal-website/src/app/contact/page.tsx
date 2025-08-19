export default function Contact() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Contact</h1>
      <p>Email: [Your Email]</p>
      <p>LinkedIn: [Your LinkedIn Profile]</p>
      <form style={{ marginTop: '2rem' }}>
        <label>Name:<br /><input type="text" name="name" /></label><br /><br />
        <label>Email:<br /><input type="email" name="email" /></label><br /><br />
        <label>Message:<br /><textarea name="message" rows={4} /></label><br /><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
