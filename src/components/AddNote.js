import React, { useState, useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const { showAlert } = props;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (event) => {
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    showAlert("Added note successfully", "success");
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value,
    });
  };
  return (
    <div className="container" style={{padding: "20px", borderRadius: "15px", background: "white"}}>
      <div className="container my-3 ">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
              minLength={5}
              value={note.title}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              onChange={handleChange}
              minLength={5}
              value={note.description}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={handleChange}
              value={note.tag}
            />
          </div>
          <div className="col-12">
            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              className="btn btn-primary"
              type="submit"
              onClick={handleClick}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
