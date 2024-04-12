// App.tsx
import React, { useEffect, useState } from 'react';
import { ListItems, Spacer } from '../../Components';
import { BSugarItem } from '../../Type/bsugar';
import BloodSugarForm from './form';

const MainPage: React.FC = () => {
    const [items, setItems] = useState<BSugarItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [typeValue, setTypeValue] = useState<string>('Random');

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items') || '[]') as BSugarItem[];
        setItems(storedItems);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const now = new Date();
            const newItem: BSugarItem = {
                id: `${now}`,
                value: inputValue.trim(),
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
        <div className="container mx-auto" style={{overflow: 'hidden'}}>
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
                        <BloodSugarForm
                            onSubmit={handleSubmit}
                            handleTypeChange={handleTypeChange}
                            handleInputChange={handleInputChange}
                            inputValue={inputValue}
                        />

                        <Spacer
                            size={20}
                        />
                        <ListItems
                            data={items}
                            handleDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainPage;
