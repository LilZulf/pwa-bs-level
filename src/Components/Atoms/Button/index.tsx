import React from 'react';

interface ButtonProps  {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type, ...props }) => {
    return (
        <button className='btn btn-primary mt-5 w-full' type={type} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
