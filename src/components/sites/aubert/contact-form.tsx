"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "L’envoi n’est pas connecté dans cette reproduction. Pour contacter le cabinet, utilisez la réservation Doctolib.",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="contact-name">
        Nom
      </label>
      <input id="contact-name" name="name" placeholder="Nom *" required />
      <label className="visually-hidden" htmlFor="contact-message">
        Message
      </label>
      <textarea id="contact-message" name="message" placeholder="Message" />
      <label className="visually-hidden" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        placeholder="Email *"
        required
      />
      <button type="submit">Envoyer</button>
      {notice ? (
        <p className="form-notice" role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
