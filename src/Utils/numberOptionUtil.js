export const Numbers = (index, style) => {
  const numbers = [];
  for (let i = 1; i <= index; i++) {
    numbers.push(
      <option value={i} className={style}>
        {i + "번"}
      </option>
    );
  }
  return numbers;
};
