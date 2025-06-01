'use client'

import React from 'react'
import S from './advantages.module.css'
import { motion } from 'framer-motion'
import { GoVerified } from "react-icons/go";
import Image from 'next/image';

import AdvantageImage from '@/assets/images/advantages.png';

const Advantages = () => {
    return (
        <section id="vantagens" className={S.advantages}>
            <div className={S.container}>
                <motion.div className={S.sectionHeader}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}>
                    <div className={S.sectionHeaderTitle}>
                        <div className={S.line}></div>
                        <h3>Vantagens exclusivas</h3>
                        <div className={S.line}></div>
                    </div>
                    <h1>Benefícios que só a <span>SKY</span> oferece para você</h1>
                </motion.div>
                <div className={S.cards}>
                    <motion.div className={S.card}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}>
                        <h2 className={S.title}>
                            Vantagens exclusivas para você
                        </h2>
                        <ul className={S.list}>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div className={S.image}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image src={AdvantageImage} alt='' />
                    </motion.div>
                    <motion.div className={S.card2}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={S.title}>
                            Vantagens exclusivas para você
                        </h2>
                        <ul className={S.list}>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                            <li className={S.listItem}>
                                <GoVerified color='#ffffff' size={24} />
                                <span>50% de desconto</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Advantages