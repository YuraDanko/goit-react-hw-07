import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.wraper}>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
