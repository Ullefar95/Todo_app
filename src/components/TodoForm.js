import React, { useState, useEffect, useRef } from "react";
// Denne funktion håndterer de værdier som bruger indsætter //
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Sørger for at siden ikke refrecher når man trykker på add todo knappen //
  const handleSubmit = (e) => {
    e.preventDefault();

    // Giver en ny todo et ID //
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  // Hvis man editer sin todo skal der vises understående //
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Ret dit gøremål"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button edit">Update</button>
        </>
      ) : (
        // ellers, vis dette //
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
