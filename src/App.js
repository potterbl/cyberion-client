import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FranchisePage from "./pages/FranchisePage";
import Btn from "./components/Btn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={'/franchise'} element={<FranchisePage/>}/>
            <Route path={'*'} element={<Navigate to={'/franchise'}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
