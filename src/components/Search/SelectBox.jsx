export default function SelectBox(props) {
  return (
    <div className="selectBox">
      <select>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
