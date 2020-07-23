import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Main} from "./Pages/Main";
import {Employees} from "./Pages/Employees";
import {Navbar} from "./Components/Navbar";
import {Alert} from "./Components/Alert";
import {AlertState} from "./Context/Alert/AlertState";

function App() {
    return (
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route path={'/'} exact component={Main}/>
                            <Route path={'/employees'} exact component={Employees}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
    );
}

export default App;
