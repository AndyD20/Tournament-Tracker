import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddCompetitorsPage from "pages/AddCompetitorsPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<AddCompetitorsPage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
