import React from 'react';

interface SelectInputProps {
    label: string;
    options: string[];
    onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className="select-input">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <select className="select select-primary flex w-full" onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
