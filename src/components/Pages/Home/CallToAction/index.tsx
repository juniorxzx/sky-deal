'use client'

import React, { useState } from 'react'
import S from './callToAction.module.css'
import { motion } from 'framer-motion'
// import Button from '@/components/Button'
import Input from '@/components/Input'


const CallToAction = () => {
    const [cpf, setCpf] = useState('');

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
                            <Input label='Digite seu CPF para consultar' mask='cpf' value={cpf} onChange={setCpf} />
                        </div>
                        <small>Consulta gratuita e sem compromisso</small>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction