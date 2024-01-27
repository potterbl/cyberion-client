import './App.css';
import FranchisePage from "./pages/FranchisePage";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <FranchisePage/>
            </div>
        </Provider>
    );
}

export default App;
