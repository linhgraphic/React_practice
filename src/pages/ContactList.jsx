import React from "react";
import contacts from "../fixtures";
import ContactCard from "../components/contactCard";

const ContactList = () => (
  <div className="About">
    {contacts.map(contact => (
      <ContactCard contact={contact} />
    ))}
  </div>
);

export default ContactList;
