import {ICompetitor} from "../model/Competitor";

export default class Competitor implements ICompetitor {
    constructor(competitor_id: number, name: string) {
        this.competitor_id = competitor_id;
        this.name = name
    }

    competitor_id: number;
    name: string;

}