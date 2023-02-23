import CompetitorList from "components/CompetitorList/CompetitorList";
import NameEntryField from "components/NameEntryField/NameEntryField";
import React, { useState } from "react";

const AddCompetitorsPage = () => {
  const [competitors, setCompetitors] = useState<Array<string>>([]);

  return <div className="flex flex-col">
    <NameEntryField addNameToList={(competitor: string) => setCompetitors(competitors.concat([competitor]))}/>
    <CompetitorList competitorNames={competitors} setCompetitorNames={setCompetitors}/>
  </div>;
};

export default AddCompetitorsPage;
