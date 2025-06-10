'use client'

import React from 'react'
import { motion } from 'framer-motion'
import S from './cardDetailsBill.module.css'
import { DebtData } from '@/@types/debt.type';
import { BiCalendar } from 'react-icons/bi';
import { useAppContext } from '@/context/AppContext';


interface CardDetailsBillProps {
    debtSelected?: DebtData
}

const CardDetailsBill = ({ debtSelected }: CardDetailsBillProps) => {
    const { selectedDate } = useAppContext();
    return (
        <motion.div
            className={S.detailsContainer}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={S.details}>
                <p>{debtSelected?.contrato}</p>
                <h3>Negociação referente a quitação total do contrato</h3>
                <div className={S.detailsInfo}>
                    <h1>{debtSelected?.descricao}</h1>
                </div>

            </div>
            <div className={S.cardValue}>
                <div className={S.values}>
                    <div className={S.valueLabel}>Valor a pagar</div>

                    {/* {debt.valor !== debt.fValor && (
                        <div className={S.originalValue}>
                            De: {debt.valor}
                        </div>
                    )} */}
                    <div className={S.currentValue}>
                        {debtSelected?.fValor}
                    </div>
                </div>
            </div>

            <div className={S.paymentDetails}>
                <div className={S.dateSection}>
                    <div className={S.dateLabel}>
                        <BiCalendar size={16} />
                        <span>Vencimento Original</span>
                    </div>
                    <div className={S.dateValue}>
                        {selectedDate && selectedDate.toLocaleDateString('pt-BR')}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CardDetailsBill