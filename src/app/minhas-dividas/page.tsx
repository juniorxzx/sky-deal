'use client'

import React, { useEffect, useState } from 'react'
import CardMyDebts from '@/components/CardMyDebts'
import S from './page.module.css'
import ModalDateSelect from '@/components/ModalDateSelect'
import DebtCardSkeleton from '@/components/Skeleton/DebtCardSkeleton'


type DebtData = {
    id: string;
    title: string;
    originalValue: string;
    discountedValue: string;
    dueDate: string;
    discountPercentage: string;
}

const MinhasDividas = () => {
    const [open, setOpen] = React.useState(false);
    const [debts, setDebts] = useState<DebtData[] | null>(null)

    useEffect(() => {
        const fetchDebts = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))

            const array: DebtData[] = [
                {
                    id: '13209123',
                    title: 'TV por assinatura',
                    originalValue: '2.412,00',
                    discountedValue: '1.206,00',
                    dueDate: '10/06/2025',
                    discountPercentage: '50%',
                },
            ]
            setDebts(array)
        }

        fetchDebts()
    }, [])

    return (
        <main className={S.container}>
            <div className={S.header}>
                <h1>Minhas Dívidas</h1>
                <p>Veja aqui as dívidas que você tem com a empresa e aproveite os descontos para quitar.</p>
            </div>
            {debts && debts.length > 0 ? (
                debts.map((debt) => (
                    <CardMyDebts key={debt.id} setOpen={setOpen} debt={debt} />
                ))

            ) : (
                <DebtCardSkeleton />
            )}

            {open && (
                <ModalDateSelect setOpen={setOpen} />
            )}
        </main >

    )
}

export default MinhasDividas