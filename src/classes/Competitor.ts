import {ICompetitor} from "../model/ICompetitor";

export default class Competitor implements ICompetitor {
    constructor(competitor_id: number, name: string) {
        this.competitorId = competitor_id;
        this.name = name
    }

    competitorId: number;
    name: string;

}