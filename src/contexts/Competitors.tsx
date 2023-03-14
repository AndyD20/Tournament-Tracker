import {ICompetitor} from "../model/ICompetitor";
import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";
import {IMatchup} from "../model/IMatchup";

export interface CompetitorsContextType {
    competitors: ICompetitor[];
    setCompetitors: Dispatch<SetStateAction<ICompetitor[]>>;
    matchups: IMatchup[];
    createMatchups: () => void;
}

export const CompetitorsContext = createContext<CompetitorsContextType>(
    {} as CompetitorsContextType
)

export function CompetitorsProvider({children}: { children: ReactNode }): JSX.Element {
    const [competitors, setCompetitors] = useState<ICompetitor[]>([]);
    const [matchups, setMatchups] = useState<IMatchup[]>([]);

    const createMatchups = () => {
        const n = competitors.length;
        const isEven = n % 2 === 0;

        const fightsPerRound = isEven ? n / 2 : (n - 1) / 2;
        const numberOfRounds = isEven ? n - 1 : n;

        for (let i = 0; i < numberOfRounds; i++) {
            const

            for (let j = 0; j < fightsPerRound; j++) {

            }
        }

    }

    const memoValue = useMemo(
        () => ({
            competitors: competitors,
            setCompetitors: setCompetitors,
            matchups: matchups,
            createMatchups: createMatchups
        }), [competitors, setCompetitors, matchups, createMatchups]
    )

    return (
        <CompetitorsContext.Provider value={memoValue}>
            {children}
        </CompetitorsContext.Provider>
    );
}

export default function useCompetitors() {
    return useContext(CompetitorsContext)
}