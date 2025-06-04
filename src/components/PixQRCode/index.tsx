'use client'

import { useMemo, useState } from 'react'
import { createStaticPix, hasError } from 'pix-utils'
import { QRCodeSVG } from 'qrcode.react'
import S from './pixQRCode.module.css'
import Button from '../Button'

interface PixQRCodeProps {
    pixKey: string
    merchantName: string
    merchantCity: string
    transactionAmount: number
}

const PixQRCode = ({ pixKey, merchantName, merchantCity, transactionAmount }: PixQRCodeProps) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        if (!payload) return
        try {
            await navigator.clipboard.writeText(payload)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Erro ao copiar', err)
        }
    }
    const payload = useMemo(() => {
        const pix = createStaticPix({
            merchantName: merchantName,
            merchantCity: merchantCity,
            pixKey: pixKey,
            infoAdicional: 'Teste de pagamento via PIX',
            transactionAmount: transactionAmount,
        });

        if (!hasError(pix)) {
            const brCode = pix.toBRCode();
            return brCode;
        }
    }, [pixKey, merchantName, merchantCity, transactionAmount])

    return (
        <div className={S.container}>
            <QRCodeSVG value={payload ?? ''} size={170} />
            <div className={S.codeContainer}>

                <div className={S.info}>
                    <span>{payload}</span>
                </div>
                <Button label={`${copied ? 'Copiado' : 'Copiar'}`} onClick={handleCopy} size='large' type='primary' />
            </div>
        </div>
    )
}

export default PixQRCode
