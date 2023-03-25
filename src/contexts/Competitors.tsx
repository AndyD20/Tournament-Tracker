import { ICompetitor } from "../model/ICompetitor";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { IMatchup } from "../model/IMatchup";
import Competitor from "classes/Competitor";

export interface CompetitorsContextType {
  competitors: ICompetitor[];
  setCompetitors: Dispatch<SetStateAction<ICompetitor[]>>;
  matchups: Array<Array<Array<ICompetitor>>>;
  createMatchups: () => void;
}

export const CompetitorsContext = createContext<CompetitorsContextType>(
  {} as CompetitorsContextType
);

export function CompetitorsProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [competitors, setCompetitors] = useState<ICompetitor[]>([]);
  const [matchups, setMatchups] = useState<ICompetitor[][][]>([]);

  const createMatchups = useCallback(() => {
    const DUMMY = -1;

    // n = num players
    const rs: any[] = []; // rs = round array
    const compList = competitors;

    let n = compList.length

    if (compList.length % 2 === 1) {
      compList.push(new Competitor(-1, "DUMMY")); // so we can match algorithm for even numbers
      n += 1;
    }

    for (let j = 0; j < n - 1; j += 1) {
      rs[j] = []; // create inner match array for round j
      for (let i = 0; i < n / 2; i += 1) {
        const o = n - 1 - i;
        if (compList[i].competitorId !== DUMMY && compList[o].competitorId !== DUMMY) {
          // flip orders to ensure everyone gets roughly n/2 home matches
          const isHome = i === 0 && j % 2 === 1;
          // insert pair as a match - [ away, home ]
          rs[j].push([isHome ? compList[o] : compList[i], isHome ? compList[i] : compList[o]]);
        }
      }

      const x = compList.pop();
      if (x) {
        compList.splice(1, 0, x); // permutate for next round 
      }
    }
    setMatchups(rs);
  }, [competitors]);

  const memoValue = useMemo(
    () => ({
      competitors: competitors,
      setCompetitors: setCompetitors,
      matchups: matchups,
      createMatchups: createMatchups,
    }),
    [competitors, setCompetitors, matchups, createMatchups]
  );

  return (
    <CompetitorsContext.Provider value={memoValue}>
      {children}
    </CompetitorsContext.Provider>
  );
}

export default function useCompetitors() {
  return useContext(CompetitorsContext);
}
