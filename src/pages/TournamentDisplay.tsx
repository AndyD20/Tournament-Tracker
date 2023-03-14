import React, {useEffect} from 'react';
import useCompetitors from "../contexts/Competitors";
import CompetitorList from "../components/CompetitorList/CompetitorList";

const TournamentDisplay = () => {
    const {competitors, setCompetitors, createMatchups} = useCompetitors();

    useEffect(() => {
        createMatchups();
    }, [createMatchups])

    return (
        <div>
            <CompetitorList competitors={competitors} setCompetitors={setCompetitors}/>
        </div>
    );
};

export default TournamentDisplay;