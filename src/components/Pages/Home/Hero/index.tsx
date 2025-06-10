'use client'
import React from 'react'
import S from './hero.module.css'
import { motion } from 'framer-motion'

import HeroImage from '@/assets/images/hero-bg.png'
import Image from 'next/image'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/context/AppContext'

const HeroSection = () => {

    const { userCpf, setUserCpf, setUser } = useAppContext()

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
        <section className={S.hero}>
            <motion.div
                className={S.container}>
                <div className={S.heroContent}>
                    <div className={S.heroTitle}>
                        <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Transforme suas dívidas em <span>oportunidades</span></motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 0.8, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >Soluções personalizadas para reorganizar sua vida financeira com condições exclusivas e processo 100% digital.
                        </motion.p>
                    </div>
                    <motion.div className={S.heroForm} initial={{ opacity: 0, x: -50 }}
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
                    <motion.div className={S.heroBadges} initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className={S.badge}>
                            <i className="fas fa-shield-alt"></i>
                            <span>Dados protegidos</span>
                        </div>
                        <div className={S.badge}>
                            <i className="fas fa-check-circle"></i>
                            <span>Aprovação imediata</span>
                        </div>
                        <div className={S.badge}>
                            <i className="fas fa-bolt"></i>
                            <span>Processo rápido</span>
                        </div>
                    </motion.div>
                </div>
                <div className={S.heroImage}>
                    <motion.div className={`${S.floatingCard} ${S.card1}`} initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>

                        <span>Até 50% de desconto</span>
                    </motion.div>
                    <motion.div className={`${S.floatingCard} ${S.card2}`} initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>

                        <span>Limpe seu nome</span>
                    </motion.div>
                    <motion.div className={`${S.floatingCard} ${S.card3}`} initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>

                        <span>Oportunidade</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>

                        <Image src={HeroImage} alt="Pessoa organizando finanças" className={S.img} />
                    </motion.div>
                </div>
            </motion.div>
        </section >
    )
}

export default HeroSection