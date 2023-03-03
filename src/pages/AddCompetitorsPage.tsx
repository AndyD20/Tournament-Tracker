import CompetitorList from "components/CompetitorList/CompetitorList";
import NameEntryField from "components/NameEntryField/NameEntryField";
import React from "react";
import useCompetitors from "../contexts/Competitors";
import {useNavigate} from "react-router-dom";

const AddCompetitorsPage = () => {
  const {competitors, setCompetitors} = useCompetitors();
  const navigate = useNavigate();

  return <div className="flex flex-col">
    <NameEntryField />
    <CompetitorList competitors={competitors} setCompetitors={setCompetitors}/>
    {competitors.length > 0
        ? <button
          className={`mt-2 p-5 border-2 rounded-md text-white bg-green-600`}
          type="button"
          onClick={() => navigate("/tournament")}
        >
          Start Tournament
        </button>
        : null
    }
  </div>;
};

export default AddCompetitorsPage;
