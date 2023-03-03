import React from 'react';
import useCompetitors from "../contexts/Competitors";
import CompetitorList from "../components/CompetitorList/CompetitorList";

const TournamentDisplay = () => {
    const {competitors, setCompetitors} = useCompetitors();

    return (
        <div>
            <CompetitorList competitors={competitors} setCompetitors={setCompetitors}/>
        </div>
    );
};

export default TournamentDisplay;