import React from 'react';
import Column from '~/components/Column';
import './BoardContent.scss';

const BoardContent: React.FC = () => {
    return (
        <div className="board-content">
            <Column />
            <Column />
        </div>
    );
};

export default BoardContent;
