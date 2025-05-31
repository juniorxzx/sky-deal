'use client'

import React from 'react'
import S from './button.module.css'

interface ButtonProps {
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    type?: 'primary' | 'secondary'
}

const Button = ({ onClick, className, type = 'primary', disabled, label }: ButtonProps) => {
    return (
        <div className={`${S.container} ${S[type]} ${className}`} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick?.()} aria-disabled={disabled}>
            {label}
        </div>
    )
}

export default Button