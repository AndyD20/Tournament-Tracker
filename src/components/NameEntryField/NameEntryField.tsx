import { useState } from "react";

interface NameEntryFieldProps {
  addNameToList: (name: string) => void;
}

const NameEntryField = ({ addNameToList }: NameEntryFieldProps) => {
  const [newName, setNewName] = useState<string>("");

  const addName = () => {
    addNameToList(newName);
    setNewName("");
  }

  return (
    <div className="p-6 m-3 flex flex-col">
      <label htmlFor="add-competitor-name" className="mb-2">
        Name:
      </label>
      <input
        id="add-competitor-name"
        type="text"
        value={newName}
        className="py-3 px-6 border-2 rounded-md border-slate-500 shadow-lg text-black"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        className={`mt-2 p-5 border-2 rounded-md text-white ${newName === "" ? "bg-green-200" : "bg-green-600"}`}
        disabled={newName === ""}
        onClick={addName}
      >
        Add Competitor
      </button>
    </div>
  );
};

export default NameEntryField;
