'use client'

import React from 'react'
import { motion } from 'framer-motion'
import S from './page.module.css'
import { useAppContext } from '@/context/AppContext'
import CardDetailsBill from '@/components/CardDetailsBill'
import PixQRCode from '@/components/PixQRCode'

const Finish = () => {
    const { selectedDate } = useAppContext();

    const mockContractInfo = {
        contractNumber: '593120024',
        description: 'Negociação referente a quitação total do contrato',
        serviceType: 'TV por assinatura',
        originalValue: 2412.00,
        discountedValue: 1206.00,
        discountPercentage: 50,
        dueDate: new Date(selectedDate)
    }

    return (
        <main className={S.container}>
            <CardDetailsBill contractInfo={mockContractInfo} />

            <motion.div
                className={S.paymentContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div>
                    <h1>Realize o pagamento até {selectedDate?.toLocaleString().split(',')[0]} e garanta seu desconto </h1>
                </div>
                <h3>Copie o código da linha digitável ou escaneie o QRcode para realizar o pagamento via PIX</h3>
                <span>Atente-se a data de vencimento, o não pagamento no prazo irá cancelar a proposta. </span>

                <div className={S.payment}>
                    <PixQRCode merchantCity='São Paulo' merchantName='Allan Souza' pixKey='120312031231' transactionAmount={1206} />
                </div>

            </motion.div>
        </main>
    )
}

export default Finish