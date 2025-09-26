function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/xdkwoqpj" 
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "auto"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ margin: "10px", padding: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ margin: "10px", padding: "10px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{ margin: "10px", padding: "10px" }}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
export default Contact;
