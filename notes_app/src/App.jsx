import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };
  return (
    <>
      <div className="max-w-xl bg-secondary text-center mx-auto p-6 mt-10 shadow rounded-lg">
        <h1 className="text-2xl font-bold ">Notes App</h1>
        <NoteForm notes={notes} setNotes={setNotes} />
      </div>
      <NotesList notes={notes} deleteNote={deleteNote} />
    </>
  );
};

export default App;
