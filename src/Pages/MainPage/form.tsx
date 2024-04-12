// BloodSugarForm.tsx

import React from 'react';
import { FormInput, SelectInput, TextInput, Button, Spacer } from '../../Components';

interface BloodSugarFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleTypeChange: (value: string) => void;
    handleInputChange: (value: string) => void;
    inputValue: string;
}

const BloodSugarForm: React.FC<BloodSugarFormProps> = ({
    onSubmit,
    handleTypeChange,
    handleInputChange,
    inputValue,
}) => {
    return (
        <FormInput onSubmit={onSubmit}>
            <SelectInput
                label="Select Type Check"
                options={['Random', '2 Hours After Meal', 'After Fasting']}
                onChange={handleTypeChange}
            />
            <Spacer size={12} />
            <TextInput
                placeholder="100"
                type="number"
                badge="mg/dL"
                label="Input your blood sugar"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <Button type="submit">Add</Button>
        </FormInput>
    );
};

export default BloodSugarForm;
