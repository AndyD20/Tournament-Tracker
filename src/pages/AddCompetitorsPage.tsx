import CompetitorList from "components/CompetitorList/CompetitorList";
import NameEntryField from "components/NameEntryField/NameEntryField";
import React, {useEffect, useState} from "react";

const AddCompetitorsPage = () => {
  const [competitors, setCompetitors] = useState<Array<string>>([]);

  useEffect(() => {
    console.log(competitors.length)
  }, [competitors])

  return <div className="flex flex-col">
    <NameEntryField addNameToList={(competitor: string) => setCompetitors(competitors.concat([competitor]))}/>
    <CompetitorList competitorNames={competitors} setCompetitorNames={setCompetitors}/>
    {competitors.length > 0
        ? <button
          className={`mt-2 p-5 border-2 rounded-md text-white bg-green-600`}
          type="button"
        >
          Start Tournament
        </button>
        : null
    }
  </div>;
};

export default AddCompetitorsPage;
