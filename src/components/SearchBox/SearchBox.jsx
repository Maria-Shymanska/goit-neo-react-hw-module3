import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => (
  <div className={css.search}>
    <label>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  </div>
);

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchBox;