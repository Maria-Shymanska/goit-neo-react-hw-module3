import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <Contact
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
