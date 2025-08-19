export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Email: chrispickreign@gmail.com</p>
      <p>Phone: (978)-549-0130</p>
      <p>LinkedIn | Github</p>
      <form style={{ marginTop: '2rem' }}>
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          Email:
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <br />
        <label>
          Message:
          <br />
          <textarea name="message" rows={4} />
        </label>
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
