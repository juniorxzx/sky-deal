'use client'

import React from 'react'
import S from './whoWe.module.css'
import { motion } from 'framer-motion';
const WhoWe = () => {
    return (
        <section className={S.whoWe}>
            <div className={S.container}>

                <motion.div className={S.sectionHeader}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}>
                    <div className={S.sectionHeaderTitle}>
                        <div className={S.line}></div>
                        <h3>Quem somos</h3>
                        <div className={S.line}></div>
                    </div>
                    <h1>Há mais de 26 anos promovendo uma <span>melhor conexão</span> entre pessoas e marcas</h1>
                </motion.div>

                <motion.div className={S.sectionContent}>
                    <p>
                        Fundada em 1997, a ATN Contact Center desenvolve tecnologias, pessoas e métodos para promover
                        melhores relacionamentos comerciais, através dos serviços nos segmentos: Recuperação de Créditos,
                        Vendas, SAC e Seguros.
                    </p>
                    <p>
                        Possui mais de 1.000 colaboradores empenhados em soluções que ajudam as Instituições/Empresas a
                        terem melhores resultados junto aos seus clientes. Está Instalada em 6 andares, sendo 2 próprios,
                        com mais de 2.200 m² no Centro do Rio de Janeiro.
                    </p>
                    <p>
                        Atender, Transformar e Negociar é a base para ATN Contact Center aumentar seus resultados.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default WhoWe