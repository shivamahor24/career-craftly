import React from 'react';

const Input = ({ label, type = 'text', placeholder, ...props }) => {
    return (
        <div className="mb-6 relative group">
            <label className="block text-sm font-medium text-text-secondary mb-2 group-focus-within:text-accent-secondary transition-colors">
                {label}
            </label>
            <input
                type={type}
                className="w-full bg-white border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:border-accent-cyan focus:shadow-glow transition-all duration-300"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
