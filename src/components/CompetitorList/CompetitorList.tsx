import { UserIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {Dispatch, SetStateAction, useState} from "react";
import {ICompetitor} from "../../model/ICompetitor";

interface CompetitorListProps {
  competitors: ICompetitor[];
  setCompetitors: Dispatch<SetStateAction<ICompetitor[]>>;
}

const CompetitorList = ({
  competitors,
  setCompetitors,
}: CompetitorListProps) => {
  const [highlightedItem, setHighlightedItem] = useState<number>(-1);

  const removeCompetitorFromList = (indexToRemove: number) => {
    setCompetitors(
      competitors.filter((_, index) => index !== indexToRemove)
    );
    setHighlightedItem(-1);
  };

  const RemoveCompetitor = ({index}: {index: number}) => {
    return (
      <div className="pt-2 flex flex-row items-center">
        <div>Remove Competitor?</div>
        <CheckIcon
          className="border-2 rounded-md ml-2 h-10 w-10 text-green-600 cursor-pointer"
          onClick={() => removeCompetitorFromList(index)}
        />
        <XMarkIcon
          className="border-2 rounded-md ml-2 h-10 w-10 text-red-600 cursor-pointer"
          onClick={() => setHighlightedItem(-1)}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col border-2 rounded-md border-slate-500 shadow-lg">
      {competitors.map((competitor, index) => {
        const lastItem = index === competitors.length - 1;

        return (
          <div key={competitor.name+index}>
            <div className="px-6 py-4 flex flex-col text-xl">
              <div
                className="flex flex-row cursor-pointer"
                onClick={() =>
                  index === highlightedItem
                    ? setHighlightedItem(-1)
                    : setHighlightedItem(index)
                }
              >
                <UserIcon className="self-center h-5 w-5 mr-2 text-orange-500" />
                <div>{competitor.name}</div>
              </div>

              {index === highlightedItem && <RemoveCompetitor index={index}/>}
            </div>
            {!lastItem && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default CompetitorList;
