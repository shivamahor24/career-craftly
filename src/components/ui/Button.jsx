import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-3 rounded-full text-lg font-medium transition-all duration-300";

    const variants = {
        primary: "bg-accent-primary text-white hover:shadow-glow hover:scale-105",
        outline: "glass text-text-primary hover:bg-white hover:scale-105 border border-border-light",
        ghost: "text-text-primary hover:text-accent-secondary"
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
