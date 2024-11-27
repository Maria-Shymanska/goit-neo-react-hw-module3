import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => (
  <div className={css.contact}>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </div>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
