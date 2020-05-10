import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    console.log(name);
    console.log("Value", value);

    setNote((prevValue) => {
      // Store old array into new array, then find target of name to store with value
      // Spread Operator
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function btnClick(event) {
    // Prevent refresh when btn click
    event.preventDefault();
    // Carry over value from note to onAdd
    props.onAdd(note);
    // Erase the state hooks after btn cick
    setNote({ title: "", content: "" });
    // Erase the form after btn click
    document.querySelector("#noteContent").value = "";
    document.querySelector("#noteTitle").value = "";
  }

  return (
    <div>
      <form>
        <input
          id="noteTitle"
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          id="noteContent"
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={btnClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
