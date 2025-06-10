'use client'

import React from 'react'
import CardMyDebts from '@/components/CardMyDebts'
import S from './page.module.css'
import ModalDateSelect from '@/components/ModalDateSelect'
import DebtCardSkeleton from '@/components/Skeleton/DebtCardSkeleton'
import { useAppContext } from '@/context/AppContext'


const MinhasDividas = () => {
    const [open, setOpen] = React.useState(false);

    const { setDebtSelected } = useAppContext()


    const debts = [
        {
            titulo: "22065",
            contrato: "18416",
            descricao: "SUPER HD II 2022 - P",
            valor: "119.95",
            fValor: "R$ 119,95",
            vencimentoOriginal: "11/04/2025",
            status: 1,
            segundaVia: false
        },
        {
            titulo: "22069",
            contrato: "18420",
            descricao: "SUPER HD II 2022 - P",
            valor: "58.81",
            fValor: "R$ 58,81",
            vencimentoOriginal: "20/03/2025",
            status: 1,
            segundaVia: false
        },
    ]



    return (
        <main className={S.container}>
            <div className={S.header}>
                <h1>Minhas Dívidas</h1>
                <p>Veja aqui as dívidas que você tem com a empresa e aproveite os descontos para quitar.</p>
            </div>

            <div className={S.cards}>
                {debts && debts.length > 0 ? (
                    debts.map((debt) => (
                        <CardMyDebts key={debt.contrato} setOpen={setOpen} debt={debt} setSelectedDebt={setDebtSelected} />
                    ))

                ) : (


                    <DebtCardSkeleton numberOfCards={3} />

                )}
            </div>

            {open && (
                <ModalDateSelect setOpen={setOpen} />
            )}
        </main >

    )
}

export default MinhasDividas