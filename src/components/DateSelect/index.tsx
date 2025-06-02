'use client'

import React, { useMemo, useState } from 'react'
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'


import S from './dateSelect.module.css'

interface DateSelectProps {
    initialDate: Date
    numberOfDays: number
    selectedDate: Date | null
    onSelectDate: (date: Date) => void

}

const DateSelect = ({ initialDate,
    numberOfDays,
    selectedDate,
    onSelectDate }: DateSelectProps) => {
    const [currentMonth, setCurrentMonth] = useState(initialDate)

    const validDates = useMemo(() => {
        return Array.from({ length: numberOfDays }, (_, i) => addDays(initialDate, i))
    }, [initialDate, numberOfDays])

    const monthDays = useMemo(() => {
        const start = startOfWeek(startOfMonth(currentMonth), { locale: ptBR })
        const end = endOfWeek(endOfMonth(currentMonth), { locale: ptBR })
        const days = []

        for (let day = start; day <= end; day = addDays(day, 1)) {
            days.push(day)
        }

        return days
    }, [currentMonth])

    const isValid = (date: Date) => {
        return validDates.some(d => isSameDay(d, date))
    }

    return (
        <div className={S.container}>
            <div className={S.header}>
                <span>{format(currentMonth, "MMMM yyyy", { locale: ptBR })}</span>
            </div>
            <div className={S.weekdays}>
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(day => (
                    <span key={day}>{day}</span>
                ))}
            </div>
            <div className={S.calendar}>
                {monthDays.map((day, idx) => {
                    const inMonth = isSameMonth(day, currentMonth)
                    const valid = isValid(day)
                    const selected = selectedDate && isSameDay(day, selectedDate)

                    return (
                        <button
                            key={idx}
                            disabled={!valid || !inMonth}
                            className={`${S.day} ${!inMonth ? S.outside : ''} ${valid ? S.valid : ''} ${selected ? S.selected : ''}`}
                            onClick={() => valid && onSelectDate(day)}
                        >
                            {format(day, 'dd')}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default DateSelect