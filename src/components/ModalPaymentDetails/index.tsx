"use client"

import React, { useEffect, useRef, useState } from 'react'
import S from './modalPaymentDetails.module.css'
import { IoClose } from 'react-icons/io5';
import { useAppContext } from '@/context/AppContext';
import { motion } from 'framer-motion';
import Button from '../Button';
import { api } from '@/lib/axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BankSlip from '../BankSlip';
import { BsCopy, BsFileText } from 'react-icons/bs';
import { formatBarCode } from '@/utils/formtBarCode';

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

interface ModalPaymentDetailsProps {
    setOpen: (open: boolean) => void;

}

const ModalPaymentDetails = ({ setOpen }: ModalPaymentDetailsProps) => {
    const { debtSelected } = useAppContext()
    const boletoPreviewRef = useRef<HTMLDivElement>(null)
    const boletoFullRef = useRef<HTMLDivElement>(null)
    const [copied, setCopied] = useState(false)
    const [digitableLine, setDigitableLine] = useState('')
    const [secondVia, setSecondVia] = useState<SecondViaResponse>()
    useEffect(() => {

        async function searchSecond() {
            const token = localStorage.getItem('token')

            if (!token) {
                alert('Token não encontrado. Recarregue a página.')
                return false
            }

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



    return (
        <div className={S.container}>
            <div className={S.modalContent}>
                <div className={S.modalHeader}>
                    <h2>Segunda via</h2>
                    <IoClose size={24} onClick={() => setOpen(false)} />
                </div>

                <div className={S.modalBody}>
                    <h3 className={S.serviceType}>{debtSelected?.descricao}</h3>
                    <motion.div
                        className={S.infoGrid}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}>
                        <div className={S.infoItem}>
                            <span className={S.label}>Valor:</span>
                            <span className={S.value}>{debtSelected?.fvalor}</span>
                        </div>
                        <div className={S.infoItem}>
                            <span className={S.label}>Vencimento Original:</span>
                            <span className={S.value}>{debtSelected?.vencimento_original}</span>
                        </div>
                    </motion.div>
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
                        className={S.paymentContainer}
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
                </div>


            </div>
        </div>
    )
}

export default ModalPaymentDetails