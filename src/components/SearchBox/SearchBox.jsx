import { useId } from "react";
import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  const searchId = useId();

  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className={css.SearchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={filter}
        onChange={(e) => handleFilter(e)}
        className={css.input}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default SearchBox;
