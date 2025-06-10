'use client'

import React from 'react'
import S from './callToAction.module.css'
import { motion } from 'framer-motion'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'


const CallToAction = () => {
    const { setUserCpf, userCpf, setUser } = useAppContext()


    const router = useRouter()

    async function searchClient(cpf: string) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes/${cpf}`)
        const data = await res.json()
        setUser(data)
    }

    const handleClick = () => {
        if (!userCpf || userCpf.length < 11) {
            alert('Por favor, insira um CPF válido.')
            return
        }
        else {

            searchClient(userCpf)
            router.push(`/minhas-dividas`)
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
                            <Input label='Digite seu CPF para consultar' mask='cpf' value={userCpf ?? ''} onChange={setUserCpf} />
                            <div className={S.formButton}>
                                <Button type='primary' label='Consultar' className={S.button} size='large' onClick={handleClick} />
                            </div>
                        </div>
                        <small>Consulta gratuita e sem compromisso</small>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction