import React from 'react';

interface InputFieldProps {
    label: string;
    placeholder?: string;
    value: string;
    type?: string;
    large?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    value,
    type = 'text',
    large = false,
    onChange
}) => {

    return (
        <div className="flex flex-col space-y-2 pt-4">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            {large ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical min-h-[100px] text-gray-700"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                />
            )}
        </div>
    );
};

export default InputField;