import React from "react";
import { contacts } from "../../constants";
import ContactCard from "../../components/ContactCard";
import "./Contacts.css";

const Contacts = () => (
  <main className="contacts-container">
    <h1>Contacts</h1>
    {contacts.map((contact) => (
      <ContactCard contact={contact} />
    ))}
  </main>
);

export default Contacts;
