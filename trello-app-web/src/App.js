import './App.scss';

function App() {
    return (
        <div className="trello-app">
            <nav className="navbar app">App Bar</nav>
            <nav className="navbar board">board Bar</nav>
            <div className="board-columns">
                <div className="column">
                    <header>Brainstorm</header>
                    <ul>
                        <li>
                            {/* <img
                                src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Trung-SE"
                            /> */}
                            Title: Trung-Van Nguyen
                        </li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                    </ul>
                    <footer>Add another cards</footer>
                </div>
                <div className="column">
                    <header>Brainstorm</header>
                    <ul>
                        <li>
                            {/* <img
                                src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Trung-SE"
                            /> */}
                            Title: Trung-Van Nguyen
                        </li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                        <li>Add you'd like to work on below</li>
                    </ul>
                    <footer>Add another cards</footer>
                </div>
            </div>
        </div>
    );
}

export default App;
