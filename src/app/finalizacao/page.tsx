'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import S from './page.module.css'
import { useAppContext } from '@/context/AppContext'
import CardDetailsBill from '@/components/CardDetailsBill'
import Button from '@/components/Button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { api } from '@/lib/axios'
import BankSlip from '@/components/BankSlip'
import { BsCopy, BsFileText } from 'react-icons/bs'
import { formatBarCode } from '@/utils/formtBarCode'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Loading'

type SecondViaResponse = {
    nome: string,
    titulo: {
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


const Finish = () => {
    const { debtSelected, user } = useAppContext()
    const boletoPreviewRef = useRef<HTMLDivElement>(null)
    const boletoFullRef = useRef<HTMLDivElement>(null)
    const [copied, setCopied] = useState(false)
    const [digitableLine, setDigitableLine] = useState('')
    const [secondVia, setSecondVia] = useState<SecondViaResponse>()
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [])


    useEffect(() => {

        async function searchSecond() {
            const token = localStorage.getItem('token')

            if (!token) {
                alert('Token não encontrado. Recarregue a página.')
                return false
            }
            setIsLoading(true)

            try {
                const response = await api.get(
                    `/negociacao/sky/consulta/segunda-via/${debtSelected?.titulo}`,
                    {
                        headers: {
                            'X-Token': token,
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
                        },
                    }
                )
                setSecondVia(response.data)
                if (response.data.titulo) {
                    setDigitableLine(response.data.titulo.linha_digitavel)
                }
            } catch (error) {
                console.error('Erro ao consultar cliente:', error)
            } finally {
                setIsLoading(false)
            }
        }

        searchSecond()
    }, [debtSelected])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(digitableLine.replace(/\s/g, ''))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            setCopied(false)
        }
    }


    const gerarPDF = async () => {
        if (!boletoFullRef.current) return
        const canvas = await html2canvas(boletoFullRef.current)
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4',
        })
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('boleto.pdf')
    }

    if (isLoading) {
        return (
            <Loading message='Estamos confimando uns dados, aguarde' />
        )
    }

    return (
        <main className={S.container}>
            <CardDetailsBill titulo={secondVia?.titulo} />
            <motion.div
                className={S.paymentContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>

                <h3>Copie o código da linha digitável</h3>
                <motion.div
                    ref={boletoPreviewRef}
                    className={S.bankSlipContainer}
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <BankSlip data={secondVia} />
                </motion.div>

                <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
                    <div ref={boletoFullRef}>
                        <BankSlip data={secondVia} />
                    </div>
                </div>

                <div className={S.actions}>
                    <Button label='Gerar PDF' onClick={gerarPDF} size='large' type='primary' icon={<BsFileText size={18} />} />
                </div>

                <motion.div
                    className={S.paymentDetailsContainer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>

                    <h4 className={S.digitableTitle}>Copie o código da linha digitável</h4>

                    <div className={S.digitableContainer}>
                        <input type='text' readOnly className={S.digitableLabel} value={formatBarCode(digitableLine)} />
                        <Button
                            label={`${copied ? 'Copiado' : 'Copiar'}`}
                            onClick={handleCopy}
                            size='large'
                            type='primary'
                            icon={copied ? <BsCopy size={18} /> : <BsCopy size={18} />}
                        />
                    </div>


                </motion.div>

            </motion.div>

        </main>
    )
}

export default Finish