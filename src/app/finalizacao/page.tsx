'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import S from './page.module.css'
import { useAppContext } from '@/context/AppContext'
import CardDetailsBill from '@/components/CardDetailsBill'
import Button from '@/components/Button'

const Finish = () => {
    const { selectedDate, debtSelected } = useAppContext();
    const [copied, setCopied] = useState(false)
    const digitableLine =
        '34191.79001 01043.510047 91020.150008 8 000000120600'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(digitableLine.replace(/\s/g, ''))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            setCopied(false)
        }
    }


    return (
        <main className={S.container}>
            <CardDetailsBill debtSelected={debtSelected} />

            <motion.div
                className={S.paymentContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div>
                    <h1>Realize o pagamento até {selectedDate?.toLocaleString().split(',')[0]} e garanta seu desconto </h1>
                </div>
                <h3>Copie o código da linha digitável</h3>
                <span>Atente-se a data de vencimento, o não pagamento no prazo irá cancelar a proposta. </span>

                <div className={S.payment}>
                    {/* <PixQRCode merchantCity='São Paulo' merchantName='Allan Souza' pixKey='120312031231' transactionAmount={1206} /> */}

                    <div className={S.codeContainer}>
                        <div className={S.info}>

                            <h2 className={S.digitableLine}>34191.79001 01043.510047 91020.150008 8 000000120600</h2>
                        </div>
                    </div>
                    <Button label={`${copied ? 'Copiado' : 'Copiar'}`} onClick={handleCopy} size='large' type='primary' />

                </div>

            </motion.div>
        </main>
    )
}

export default Finish