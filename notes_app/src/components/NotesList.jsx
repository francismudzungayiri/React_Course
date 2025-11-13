const NotesList = ({ notes, deleteNote }) => {
  const getBorderColor = (note) => {
    switch (note.priority) {
      case "High":
        return "border-red-500";
      case "Medium":
        return "border-orange-400";
      case "Low":
        return "border-green-500";
      default:
        return "border-gray-500";
    }
  };
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap  p-6 mt-5 shadow rounded-lg">
      {notes.length === 0 ? (
        <p className="w-full mt-10 text-center">No notes available</p>
      ) : (
        notes.map((note, index) => (
          <div
            key={index}
            className={`p-4 max-w-sm bg-secondary border-l-4 ${getBorderColor(
              note
            )}  rounded-lg m-2`}
          >
            <p className="font-bold text-lg mb-2">Title: {note.title}</p>
            <p>
              <span className="text-accent/70 mr-2">Priority: </span>
              {note.priority}
            </p>
            <p>
              <span className="text-accent/70 mr-2">Category: </span>
              {note.category}
            </p>
            <p className="mt-3">{note.description}</p>
            <button
              onClick={() => deleteNote(index)}
              className="mt-4 text-red-500 font-semibold hover:text-accent/70 cursor-pointer transition duration-300"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
