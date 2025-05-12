import React from "react";
import classes from "./App.module.css"; 
import Inputs from "./components/Input"; 

function App() {
    return (
        <div className={classes.app}>
            <h2 className={classes.title}>Форма с инпутами</h2>
            <div className={classes.wrapper}>
                <Inputs />
            </div>
        </div>
    );
}

export default App;
