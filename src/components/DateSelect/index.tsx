import React from 'react'
import S from './dateSelect.module.css'

interface DateSelectProps {
    date?: Date;

}

const DateSelect = ({ date}: DateSelectProps) => {
    return (
        <div className={S.container}>
            <div className={S.dateSelect}>

                <div className={S.dateLabel} onClick={() => {}}>
                    {date?.toLocaleDateString('pt-BR')}
                </div>
                {/* <input
                    type="date"
                    className={S.dateInput}
                    value={date ? date.toISOString().split('T')[0] : ''}
                    onChange={(e) => {
                        const selectedDate = e.target.value ? new Date(e.target.value) : null;
                        setSelectedDate?.(selectedDate);
                    }}
                /> */}
            </div>

        </div>
    )
}

export default DateSelect