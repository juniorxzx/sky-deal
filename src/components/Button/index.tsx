'use client'

import React from 'react'
import S from './button.module.css'

interface ButtonProps {
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    type?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
}

const Button = ({ onClick, className, type = 'primary', disabled, label, size = 'medium', icon }: ButtonProps) => {
    return (
        <div
            className={`
                ${S.container}
                ${S[type]}
                ${S[size]}
                ${className}
                ${disabled ? S.disabled : ''}
            `}
            onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
            aria-disabled={disabled}>
            {icon && (
                <>
                    {icon}
                </>
            )}
            {label}
        </div>
    )
}

export default Button