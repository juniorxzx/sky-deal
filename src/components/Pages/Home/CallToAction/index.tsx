'use client'

import React from 'react'
import S from './callToAction.module.css'
import { motion } from 'framer-motion'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/axios'


const CallToAction = () => {
    const { userCpf, setUserCpf, setUser, setDebtData } = useAppContext()
    const [error, setError] = React.useState(false)
    const router = useRouter()

    async function searchClient(cpf: string) {
        const token = localStorage.getItem('token')

        if (!token) {
            alert('Token não encontrado. Recarregue a página.')
            return false
        }

        try {
            const response = await api.post(
                '/negociacao/sky/consulta',
                { documento: cpf },
                {
                    headers: {
                        'X-Token': token,
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
                    },
                }
            )

            setUser(response.data.nome)
            setDebtData?.(response.data.titulos)

            return true
        } catch (error) {
            console.error('Erro ao consultar cliente:', error)
            return false
        }
    }

    const handleClick = async () => {
        if (!userCpf || userCpf.length < 11) {
            alert('Por favor, insira um CPF válido.')
            return
        }

        const sucess = await searchClient(userCpf)

        if (sucess) {
            router.push('/minhas-dividas')
        }
        else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }
    return (
        <section className={S.cta}>
            <div className={S.container}>
                <div className={S.ctaContent}>
                    <h2>Pronto para reorganizar sua vida financeira?</h2>
                    <p>Consulte agora suas oportunidades e comece a negociar com condições exclusivas.</p>
                    <motion.div className={S.ctaForm} initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        <div className={S.formGroup}>
                            <Input label='Digite seu CPF ou CNPJ para consultar' mask='cpf' value={userCpf ?? ''} onChange={setUserCpf} />
                            <div className={S.formButton}>
                                <Button type='primary' label='Consultar' className={S.button} size='large' onClick={handleClick} />
                            </div>
                        </div>
                        {error && (
                            <div className={S.errorMessage}>
                                <p>CPF/CNPJ inválido ou não encontrado.</p>
                            </div>
                        )}
                        <small>Consulta gratuita e sem compromisso</small>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction