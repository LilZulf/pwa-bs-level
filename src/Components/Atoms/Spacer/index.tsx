import React from 'react';

interface SpacerProps {
    axis?: 'horizontal' | 'vertical';
    size: number;
}

const Spacer: React.FC<SpacerProps> = ({ axis = 'vertical', size }) => {
    const spacerStyle: React.CSSProperties = {
        width: axis === 'horizontal' ? size : 'auto',
        height: axis === 'vertical' ? size : 'auto',
    };

    return <div style={spacerStyle} />;
};

export default Spacer;
