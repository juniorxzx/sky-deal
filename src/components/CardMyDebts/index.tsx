'use client'

import React from 'react'
import S from './cardMyDebts.module.css'
import Button from '../Button';

type DebtData = {
    id: string;
    title: string;
    originalValue: string;
    discountedValue: string;
    dueDate: string;
    discountPercentage: string;
}

interface CardMyDebtsProps {
    setOpen: (open: boolean) => void;
    debt?: DebtData
}

const CardMyDebts = ({ setOpen, debt }: CardMyDebtsProps) => {


    const handlePay = () => {
        setOpen(true);
    }
    return (
        <div className={S.card}>
            <div className={S.cardHeader}>
                <h1>{debt?.title}</h1>
                <span>{debt?.id}</span>
            </div>
            <div className={S.cardValue}>
                <div className={S.values}>
                    <span >
                        De <span className={S.textDefault}>R$ {debt?.originalValue}</span>
                    </span>
                    <span className={S.textValue}>
                        Por <span className={S.textAlert}>R$ {debt?.discountedValue}</span>
                    </span>
                </div>

                <div className={S.discount}>
                    <span>Desconto de até {debt?.discountPercentage}</span>
                </div>
            </div>

            <div className={S.cardBody}>
                <div className={S.dateExpires}>
                    <span>Vencimento</span>
                    <span>{debt?.dueDate}</span>
                </div>
                <div className={S.msgExpires}>
                    <span>Você ainda poderá trocar o vencimento</span>
                    <span> O desconto concedido e o valor a pagar poderá mudar conforme a data de vencimento e a forma de pagamento</span>
                </div>
            </div>

            <div className={S.cardButtons}>
                <Button label='Pagar à vista' onClick={handlePay} size='large'/>
                {/* <Button label='Simular parcelamento' type='secondary' /> */}
            </div>
        </div>
    )
}

export default CardMyDebts