import { FormEvent } from "react";
import { useState } from "react";

interface NameEntryFieldProps {
  addNameToList: (name: string) => void;
}

const NameEntryField = ({ addNameToList }: NameEntryFieldProps) => {
  const [newName, setNewName] = useState<string>("");

  const addName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNameToList(newName);
    setNewName("");
  };

  return (
    <form
      onSubmit={(e) => {
        addName(e);
      }}
    >
      <div className="p-6 m-3 flex flex-col">
        <input
          id="add-competitor-name"
          type="text"
          value={newName}
          placeholder="Competitor Name"
          className="py-3 px-6 border-2 rounded-md border-slate-500 shadow-lg text-black"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className={`mt-2 p-5 border-2 rounded-md text-white ${
            newName === "" ? "bg-green-200" : "bg-green-600"
          }`}
          type="submit"
          disabled={newName === ""}
        >
          Add Competitor
        </button>
      </div>
    </form>
  );
};

export default NameEntryField;
