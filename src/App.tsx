import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddCompetitorsPage from "pages/AddCompetitorsPage";
import {CompetitorsProvider} from "./contexts/Competitors";
import TournamentDisplay from "./pages/TournamentDisplay";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <CompetitorsProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<AddCompetitorsPage/>}/>
                            <Route path="/tournament" element={<TournamentDisplay/>}/>
                        </Routes>
                    </BrowserRouter>
                </CompetitorsProvider>
            </header>
        </div>
    );
};

export default App;
