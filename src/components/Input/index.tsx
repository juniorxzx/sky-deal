"use client"

import React, { useState } from 'react'
import Button from '../Button'
import S from './input.module.css'
import { motion } from 'framer-motion'
interface InputProps {
    value?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    id?: string;
    label?: string;
    onChange?: (value: string) => void
    mask?: 'cpf' | 'phone';
}

const Input = ({ id, label, placeholder, type, value, onChange }: InputProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [focused, setFocused] = useState(false)

    const formatCpf = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 11)

        return digits
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = formatCpf(e.target.value)
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
                        borderColor: focused ? '#3b82f6' : '#e5e7eb',
                        boxShadow: focused
                            ? '0 0 0 4px rgba(59, 130, 246, 0.3)'
                            : '0 0 0 0 rgba(0,0,0,0)',
                        scale: focused ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}

                    type={type} id={id} placeholder={placeholder} value={value}
                    onChange={handleChange}
                />
                <Button type='primary' label='Consultar' className={S.button} />
            </div>
        </div>
    )
}

export default Input