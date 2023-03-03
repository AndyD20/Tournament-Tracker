import {ICompetitor} from "../model/Competitor";
import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";

export interface CompetitorsContextType {
    competitors: ICompetitor[];
    setCompetitors: Dispatch<SetStateAction<ICompetitor[]>>
}

export const CompetitorsContext = createContext<CompetitorsContextType>(
    {} as CompetitorsContextType
)

export function CompetitorsProvider({children}: {children: ReactNode}): JSX.Element {
    const [competitors, setCompetitors] = useState<ICompetitor[]>([]);

    const memoValue = useMemo(
        () => ({
            competitors: competitors,
            setCompetitors: setCompetitors
        }), [competitors, setCompetitors]
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