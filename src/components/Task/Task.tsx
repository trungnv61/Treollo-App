import React from 'react';
import './Task.scss';

const Task: React.FC = () => {
    return (
        <li className="task-item">
            <img
                src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Trung-SE"
            />
            Title: Trung-Van Nguyen
        </li>
    );
};

export default Task;
