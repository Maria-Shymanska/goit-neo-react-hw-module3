import PropTypes from "prop-types";
import css from "../Contact/Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.Contact}>
      <ul>
        <li>
          <FaUser /> {name}
        </li>
        <li>
          <FaPhone /> {number}
        </li>
      </ul>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default Contact;
