import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FranchisePage from "./pages/FranchisePage";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={'/franchise'} element={<FranchisePage/>}/>
                        <Route path={'*'} element={<Navigate to={'/franchise'}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
