import {IMatchup} from "../model/IMatchup";

export default class Matchup implements IMatchup {
    constructor(competitor1Id: number, competitor2Id: number) {
        this.competitor1Id = competitor1Id;
        this.competitor1Score = 0;
        this.competitor2Id = competitor2Id;
        this.competitor2Score = 0;
    }
    competitor1Id: number;
    competitor1Score: number;
    competitor2Id: number;
    competitor2Score: number;

}