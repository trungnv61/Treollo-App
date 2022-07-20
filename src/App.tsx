import './index.css';
import AppBar from '~/components/AppBar';
import BoardBar from '~/components/BoardBar';
import BoardContent from '~/components/BoardContent';

function App() {
    return (
        <div className="trello-app">
            <AppBar />
            <BoardBar />
            <BoardContent />
        </div>
    );
}

export default App;
