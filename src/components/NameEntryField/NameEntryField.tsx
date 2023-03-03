import {FormEvent, useState} from "react";
import useCompetitors from "../../contexts/Competitors";
import Competitor from "../../classes/Competitor";



const NameEntryField = () => {
    const [newName, setNewName] = useState<string>("");
    const {competitors, setCompetitors} = useCompetitors();

    const addName = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (competitors.length > 0) {
            const lastCompetitorId = competitors[competitors.length - 1].competitor_id
            const newCompetitor = new Competitor(lastCompetitorId + 1, newName)
            setCompetitors(competitors.concat([newCompetitor]))
        } else {
            setCompetitors(competitors.concat([new Competitor(0, newName)]));
        }

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
