import "./ResultSummary.css";
import { Score } from "./Score";
import { Summary } from "./Summary";

export const ResultSummary = () => {
    return ( 
    <div className="card">
        <Score />
        <Summary />
    </div>
   );
};