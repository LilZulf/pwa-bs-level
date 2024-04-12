import React from 'react';

interface FormInputProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className='px-5 flex w-full flex-col'>
            {children}
        </form>
    );
};

export default FormInput;
