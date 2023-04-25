export const Filter = ({ getFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        onChange={evt => getFilter(evt.target.value)}
      />
    </label>
  );
};
