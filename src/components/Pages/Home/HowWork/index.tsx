'use client'

import React from 'react'
import S from './howWork.module.css'

import { IoIosSearch } from "react-icons/io";
import { LuBadgePercent, LuHandshake } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";

import { motion } from 'framer-motion';

const HowWork = () => {
    return (

        <section id="como-funciona" className={S.howWork}>
            <div className={S.container}>
                <motion.div className={S.sectionHeader}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}>
                    <div className={S.sectionHeaderTitle}>
                        <div className={S.line}></div>
                        <h3>Como funciona</h3>
                        <div className={S.line}></div>
                    </div>
                    <h1>Processo simples e transparente para você <span>resolver</span> suas pendências financeiras</h1>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={S.steps} >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className={S.step}>
                        <div className={S.stepHeader}>
                            <IoIosSearch color='#f7f7f7' size={48} />
                        </div>
                        <h3>Consulta gratuita</h3>
                        <p>Digite seu CPF e descubra todas as oportunidades disponíveis para você em segundos.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className={S.step}>
                        <div className={S.stepHeader}>
                            <LuBadgePercent color='#f7f7f7' size={48} />
                        </div>
                        <h3>Escolha a melhor oferta</h3>
                        <p>Analise as condições disponíveis e selecione a que melhor se encaixa no seu orçamento.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className={S.step}>
                        <div className={S.stepHeader}>
                            <LuHandshake color='#f7f7f7' size={48} />
                        </div>
                        <h3>Negocie online</h3>
                        <p>Faça sua negociação 100% online, sem burocracia e com total segurança.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className={S.step}>
                        <div className={S.stepHeader}>
                            <MdOutlineVerified color='#f7f7f7' size={48} />
                        </div>
                        <h3>Confirme o acordo</h3>
                        <p>Pague a primeira parcela ou o valor à vista e garanta seu acordo imediatamente.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowWork