import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FranchisePage from "./pages/FranchisePage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {useEffect, useRef, useState} from "react";

function App() {
    const appRef = useRef(null)

    const [appHeight, setAppHeight] = useState(0)

    useEffect(() => {
        if(appRef.current){
            const appHeightNew = appRef.current.getBoundingClientRect().height;
            setAppHeight(appHeightNew);
            console.log(appHeightNew)
        }
    }, [appRef])

    return (
        <Provider store={store}>
            <div className="App" ref={appRef} style={{height: appHeight !== 0 ? appHeight : 'unset'}}>
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
