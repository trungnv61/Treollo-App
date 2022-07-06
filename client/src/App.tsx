import React from "react";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="trello-container">
            <nav className="navbar app">App bar</nav>
            <nav className="navbar board">Board bar</nav>
            <div className=""></div>
        </div>
    );
};

export default App;
