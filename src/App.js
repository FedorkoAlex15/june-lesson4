import logo from './logo.svg';
import './App.css';
import {createRef, useState} from "react";
import {saveUser} from "./services/user.api.server";
import UncontrolledForm from "./uncontrolledForm/uncontrolledForm";
import SuperForm from "./superForm/SuperForm";

function App() {



    return (

    <div className="App">
        <SuperForm/>
    </div>
  );
}

export default App;
