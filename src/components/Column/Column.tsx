import React from 'react';
import Task from '~/components/Task';
import './Column.scss';

const Column: React.FC = () => {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Add you'd like to work on below</li>
                <li className="task-item">Add you'd like to work on below</li>
                <li className="task-item">Add you'd like to work on below</li>
                <li className="task-item">Add you'd like to work on below</li>
                <li className="task-item">Add you'd like to work on below</li>
                <li className="task-item">Add you'd like to work on below</li>
            </ul>
            <footer>Add another cards</footer>
        </div>
    );
};

export default Column;
