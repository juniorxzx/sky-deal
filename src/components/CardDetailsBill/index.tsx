'use client'

import React from 'react'
import { motion } from 'framer-motion'
import S from './cardDetailsBill.module.css'
import { BiCalendar } from 'react-icons/bi';
import { useAppContext } from '@/context/AppContext';


interface CardDetailsBillProps {
    titulo?: {
        titulo: string,
        contrato: string,
        descricao: string,
        valor: string,
        fvalor: string,
        vencimento_original: string,
        status: number,
        codigo_barras: string,
        linha_digitavel: string
    }
}

const CardDetailsBill = ({  titulo }: CardDetailsBillProps) => {
    const { selectedDate } = useAppContext();
    return (
        <motion.div
            className={S.detailsContainer}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={S.details}>
                <p>{titulo?.contrato}</p>
                <h3>Negociação referente a quitação total do contrato</h3>
                <div className={S.detailsInfo}>
                    <h1>{titulo?.descricao}</h1>
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
                        {titulo?.fvalor}
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