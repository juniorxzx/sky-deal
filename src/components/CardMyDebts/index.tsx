'use client'

import React from 'react'
import S from './cardMyDebts.module.css'
import Button from '../Button';
import { BiCalendar, BiCreditCard, BiInfoCircle } from 'react-icons/bi';
import { DebtData } from '@/@types/debt.type';


interface CardMyDebtsProps {
    setOpen: (open: boolean) => void;
    debt: DebtData;
    setSelectedDebt?: (debt: DebtData) => void;
}

const CardMyDebts = ({ setOpen, debt, setSelectedDebt }: CardMyDebtsProps) => {


    const handlePay = () => {
        if (!setSelectedDebt) return;
        setSelectedDebt(debt);
        setOpen(true);
    }
    return (
        <div className={S.card}>
            <div className={S.cardHeader}>
                <h1>{debt?.descricao}</h1>
                <span>{debt?.contrato}</span>
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
                        {debt.fValor}
                    </div>
                </div>
            </div>

            <div className={S.cardBody}>
                <div className={S.dateSection}>
                    <div className={S.dateLabel}>
                        <BiCalendar size={16} />
                        <span>Vencimento Original</span>
                    </div>
                    <div className={S.dateValue}>
                        {debt.vencimentoOriginal}
                    </div>
                </div>

                <div className={S.infoSection}>
                    <div className={S.infoItem}>
                        <div className={S.infoIcon}>
                            <BiCreditCard size={14} />
                        </div>
                        <span className={S.infoText}>
                            Você ainda poderá trocar o vencimento
                        </span>
                    </div>

                    <div className={S.infoItem}>
                        <div className={S.infoIcon}>
                            <BiInfoCircle size={14} />
                        </div>
                        <span className={S.infoText}>
                            O desconto concedido e o valor a pagar poderá mudar conforme a debt de vencimento e a forma de pagamento
                        </span>
                    </div>
                </div>
            </div>

            <div className={S.cardButtons}>

                {debt.segundaVia ? (
                    <Button label='Segunda Via' type='secondary' size='large' />
                ) : (
                    <Button label='Pagar à vista' onClick={handlePay} size='large' />
                )}
                {/* <Button label='Simular parcelamento' type='secondary' /> */}
            </div>
        </div>
    )
}

export default CardMyDebts