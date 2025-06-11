'use client'

import React, { useEffect } from 'react'
import CardMyDebts from '@/components/CardMyDebts'
import S from './page.module.css'
import ModalDateSelect from '@/components/ModalDateSelect'
import DebtCardSkeleton from '@/components/Skeleton/DebtCardSkeleton'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'
import ModalPaymentDetails from '@/components/ModalPaymentDetails'


const MinhasDividas = () => {
    const [openPayment, setOpenPayment] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const { debtData, setDebtSelected, user } = useAppContext()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [])


    return (
        <main className={S.container}>
            <div className={S.header}>
                <h1>Minhas Dívidas</h1>
                <p>Veja aqui as dívidas que você tem com a empresa e aproveite os descontos para quitar.</p>
            </div>

            <div className={S.cards}>
                {debtData && debtData.length > 0 ? (
                    debtData.map((debt) => (
                        <CardMyDebts
                            key={debt.contrato}
                            setOpen={setOpen}
                            debt={debt}
                            setSelectedDebt={setDebtSelected}
                            setOpenPayment={setOpenPayment}
                        />
                    ))

                ) : (

                    <DebtCardSkeleton numberOfCards={3} />
                )}
            </div>

            {open && (
                <ModalDateSelect setOpen={setOpen} />
            )}
            {openPayment && (
                <ModalPaymentDetails setOpen={setOpenPayment} />
            )}
        </main >

    )
}

export default MinhasDividas