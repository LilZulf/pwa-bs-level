// App.tsx
import React, { useState, useEffect } from 'react';
import '../../output.css';
import { Button, TextInput, SelectInput, Spacer, FormInput } from '../../Components'

interface TodoItem {
    id: string;
    text: string;
    type: string;
}

const MainPage: React.FC = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>('Random');

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items') || '[]') as TodoItem[];
        setItems(storedItems);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hour = now.getHours().toString().padStart(2, '0');
            const minute = now.getMinutes().toString().padStart(2, '0');
            const second = now.getSeconds().toString().padStart(2, '0');
            const newItem: TodoItem = {
                id: `${year}-${month}-${day} ${hour}:${minute}:${second}`, // Format: YYYY-MM-DD HH:MM:SS
                text: inputValue.trim(),
                type: typeValue.trim()
            };
            setItems([...items, newItem]);
            setInputValue('');
            localStorage.setItem('items', JSON.stringify([...items, newItem]));
        }
    };

    const handleDelete = (id: string) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    };

    const handleTypeChange = (value: string) => {
        setTypeValue(value);
    };
    const handleInputChange = (value: string) => {
        setInputValue(value)
    }

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center pt-6">
                <div className="flex-none w-96 p-0">
                    <div className="flex flex-col items-center justify-center p-0">
                        <article className="prose">
                            <h2>🩸Blood Sugar Tracker</h2>
                            <h4>
                                Please input your current blood sugar.
                            </h4>
                        </article>
                        <Spacer
                            size={20}
                        />
                        <FormInput
                            onSubmit={handleSubmit}
                        >
                            <SelectInput
                                label="Select Type Check"
                                options={['Random', '2 Hours After Meal', 'After Fasting']}
                                onChange={handleTypeChange}
                            />
                            <Spacer
                                size={12}
                            />
                            <TextInput
                                placeholder='100'
                                type='number'
                                badge='mg/dL'
                                label='Input your blood sugar'
                                value={inputValue}
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                            <Button
                                type='submit'
                            >
                                Add
                            </Button>
                        </FormInput>

                        <Spacer
                            size={16}
                        />
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    {item.text}
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    <Spacer
                                        size={12}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainPage;
