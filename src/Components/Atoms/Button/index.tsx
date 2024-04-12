import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    buttonClass?: string
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
    buttonClass = 'btn btn-primary mt-5 w-full'
}) => {
    return (
        <button className={buttonClass} type={type} onClick={onClick} >
            {children}
        </button>
    );
};

export default Button;
