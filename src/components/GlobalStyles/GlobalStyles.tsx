import React from 'react';
import './GlobalStyles.scss';

interface Props {
    children: JSX.Element;
}

const GlobalStyles: React.FC<Props> = ({ children }) => {
    return children;
};

export default GlobalStyles;
