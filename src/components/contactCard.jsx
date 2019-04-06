import React from "react";
const ContactCard = props => (
  <ol>
    <li>Name: {props.contact.name}</li>
    <li>Email: {props.contact.email}</li>
    <li>Tel: {props.contact.tel}</li>
  </ol>
);

export default ContactCard;
