'use client'

import React, { useState, useEffect } from 'react'
import S from './inputEmail.module.css'
import { motion } from 'framer-motion'

interface InputEmailProps {
    value?: string
    placeholder?: string
    id?: string
    label?: string
    onChange?: (value: string) => void
    setValid?: (isValid: boolean) => void;
}

const InputEmail = ({ id, label, placeholder, value, onChange, setValid }: InputEmailProps) => {
    const [focused, setFocused] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    useEffect(() => {
        if (value === undefined || value === '') {
            setIsValid(true)
        } else {
            setIsValid(validateEmail(value))
            setValid?.(validateEmail(value))
        }
    }, [value, setValid])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value
        if (onChange) {
            onChange(inputVal)
        }
    }

    return (
        <div className={S.inputContainer}>
            <label>{label}</label>
            <div className={S.inputGroup}>
                <motion.input
                    animate={{
                        borderColor: focused
                            ? '#e30609'
                            : isValid
                                ? '#f7f7f7'
                                : '#ef4444',
                        boxShadow: focused
                            ? '0 0 0 4px rgba(227, 6, 9, 0.25)'
                            : '0 0 0 0 rgba(0,0,0,0)',
                        scale: focused ? 1.01 : 1,
                    }}
                    type='email'
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />

                {!isValid && value && (
                    <div className={S.errorMessage}>
                        <span>Por favor, insira um email válido.</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputEmail
