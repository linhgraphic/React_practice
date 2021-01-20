import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactCard = ({ contact }) => (
  <ul>
    <li>
      <a href={contact.linkedinUrl} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} /> - {contact.name}
      </a>
    </li>
    <li>
      <a
        href={`mailto:${contact.email}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelopeOpenText} /> - {contact.email}
      </a>
    </li>
  </ul>
);

export default ContactCard;
