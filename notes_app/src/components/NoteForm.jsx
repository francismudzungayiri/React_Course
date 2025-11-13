import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelcetInput from "./inputs/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Low",
    description: "",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const buttonClick = (e) => {
    e.preventDefault();

    //validation
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // set new note
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    //add new note to notes array
    setNotes([newNote, ...notes]);

    //reset form
    setFormData({
      title: "",
      category: "Work",
      priority: "Low",
      description: "",
    });

    setIsFormVisible(false);
  };

  return (
    <>
      {!isFormVisible && (
        <button
          onClick={toggleFormVisibility}
          className="w-full text-right mt-5 text-red-500 font-semibold hover:text-accent/70 cursor-pointer transition duration-300"
        >
          Add a new Note
        </button>
      )}
      {isFormVisible && (
        <form onSubmit={buttonClick} className="w-full my-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <SelcetInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={["Low", "Medium", "High"]}
          />
          <SelcetInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={["Work", "Personal", "Ideas"]}
          />
          <div className="w-full mb-4 ">
            <label
              htmlFor="description"
              className="block text-left mb-2 font-semibold"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="w-full p-2 border border-accent rounded-lg focus:outline-none focus:ring focus:ring-accent"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-secondary py-2 px-4 rounded-lg font-semibold hover:bg-accent/70 cursor-pointer transition duration-300"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
