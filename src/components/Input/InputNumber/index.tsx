'use client'

import React, { useEffect, useState } from 'react'
import S from './inputNumber.module.css'
import { motion } from 'framer-motion'


interface InputNumberProps {
    value?: string;
    placeholder?: string;
    id?: string;
    label?: string;
    onChange?: (value: string) => void
    setValid?: (isValid: boolean) => void;
}


const InputNumber = ({ id, label, placeholder, value, onChange, setValid }: InputNumberProps) => {
    const [focused, setFocused] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const formatPhone = (val: string) => {
        const numeric = val.replace(/\D/g, '')
        if (numeric.length === 0) return ''

        if (numeric.length <= 2)
            return `(${numeric}`
        if (numeric.length <= 6)
            return `(${numeric.slice(0, 2)}) ${numeric.slice(2)}`
        if (numeric.length <= 10)
            return `(${numeric.slice(0, 2)}) ${numeric.slice(2, 6)}-${numeric.slice(6)}`
        return `(${numeric.slice(0, 2)}) ${numeric.slice(2, 7)}-${numeric.slice(7, 11)}`
    }

    const validatePhone = (val: string) => {
        const numeric = val.replace(/\D/g, '')

        const isRepeated = /^(\d)\1+$/.test(numeric)
        const isLengthValid = numeric.length === 10 || numeric.length === 11

        return isLengthValid && !isRepeated
    }

    useEffect(() => {
        if (value === undefined || value === '') {
            setIsValid(true)
        } else {
            setIsValid(validatePhone(value))
            setValid?.(validatePhone(value))
        }
    }, [value, setValid])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value.replace(/\D/g, '').slice(0, 11)
        const masked = formatPhone(inputVal)
        if (onChange) {
            onChange(masked)
        }
    }
    return (
        <div className={S.inputContainer}>
            <label >{label}</label>
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

                    id={id} placeholder={placeholder} value={value}
                    type='tel'
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {!isValid && value && (
                    <div className={S.errorMessage}>
                        <span>Por favor, insira um número de telefone válido.</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputNumber