import { useState } from "react";

export const Movies = ({ searchData, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchData.map(({ title, id }) => {
        return (
          <li key={id}>
            <p>{title}</p>
          </li>
        );
      })}
    </section>
  );
};
