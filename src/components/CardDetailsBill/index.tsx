import React from 'react'
import { motion } from 'framer-motion'
import S from './cardDetailsBill.module.css'
import { CiCalendar } from 'react-icons/ci';


interface CardDetailsBillProps {
    contractInfo: {
        contractNumber: string;
        description: string;
        serviceType: string;
        originalValue: number;
        discountedValue: number;
        discountPercentage: number;
        dueDate: Date;

    }
}

const CardDetailsBill = ({ contractInfo }: CardDetailsBillProps) => {
    return (
        <motion.div
            className={S.detailsContainer}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={S.details}>
                <p>{contractInfo.contractNumber}</p>
                <h3>{contractInfo.description}</h3>
                <div className={S.detailsInfo}>
                    <h1>{contractInfo.serviceType}</h1>
                </div>
            </div>
            <div className={S.discount}>
                <h2>Desconto de {contractInfo.discountPercentage}%</h2>
                <div className={S.values}>
                    <div className={S.originalValue}>
                        <p>
                            {contractInfo.originalValue.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </p>
                    </div>
                    <div className={S.discountedValue}>
                        <p>
                            {contractInfo.discountedValue.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className={S.paymentDetails}>
                <div className={S.dateContainer}>
                    <span>Data de vencimento</span>
                    <div className={S.boxDate}>
                        <CiCalendar size={20} />
                        <span>{contractInfo.dueDate.toLocaleDateString('pt-BR')}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CardDetailsBill