import React from 'react'

interface TextInputProps {
    type: 'number' | 'text' | 'email',
    placeholder: string,
    label?: string,
    badge?: string,
    value?: string; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    type,
    placeholder,
    label,
    badge,
    value,
    onChange,
    ...inputProps
}) => {
    return (
        <>
            {label &&
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
            }
            <label className="input input-bordered input-primary flex items-center gap-2 w-full">
                <input
                    type={type}
                    className="w-full max-w-xs"
                    placeholder={placeholder}
                    value={value} 
                    onChange={onChange} 
                    {...inputProps}
                />
                {badge && <span className="badge badge-info">{badge}</span>}
            </label>
        </>
    )
}

export default TextInput