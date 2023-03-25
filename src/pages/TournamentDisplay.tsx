import useCompetitors from "../contexts/Competitors";
import { ICompetitor } from "model/ICompetitor";

const TournamentDisplay = () => {
    const {matchups} = useCompetitors();

    const Round = ({roundNumber, roundCompetitors}: {roundNumber: number, roundCompetitors: ICompetitor[][]}) => {
        return (
            <div>
                <h3>Round {roundNumber}</h3>
                <div>{roundCompetitors.map(comp => <><div>{comp[0].name} vs. {comp[1].name}</div><br/></>)}</div>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            {matchups.map((matchup, index) => <Round roundNumber={index} roundCompetitors={matchup}/>)}
        </div>
    );
};

export default TournamentDisplay;