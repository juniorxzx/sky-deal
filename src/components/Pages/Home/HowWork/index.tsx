import React from 'react'
import S from './howWork.module.css'

import { IoIosSearch } from "react-icons/io";
import { LuBadgePercent, LuHandshake } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";

const HowWork = () => {
    return (

        <section id="como-funciona" className={S.howWork}>
            <div className={S.container}>
                <div className={S.sectionHeader}>
                    <h2>Como funciona</h2>
                    <p>Processo simples e transparente para você resolver suas pendências financeiras</p>
                </div>
                <div className={S.steps}>
                    <div className={S.step}>
                        <div className={S.stepHeader}>
                            <IoIosSearch color='#f7f7f7' size={48} />
                        </div>
                        <h3>Consulta gratuita</h3>
                        <p>Digite seu CPF e descubra todas as oportunidades disponíveis para você em segundos.</p>
                    </div>
                    <div className={S.stepConector}></div>
                    <div className={S.step}>
                        <div className={S.stepHeader}>
                            <LuBadgePercent color='#f7f7f7' size={48} />
                        </div>
                        <h3>Escolha a melhor oferta</h3>
                        <p>Analise as condições disponíveis e selecione a que melhor se encaixa no seu orçamento.</p>
                    </div>
                    <div className={S.stepConector}></div>
                    <div className={S.step}>
                        <div className={S.stepHeader}>
                            <LuHandshake color='#f7f7f7' size={48} />
                        </div>
                        <h3>Negocie online</h3>
                        <p>Faça sua negociação 100% online, sem burocracia e com total segurança.</p>
                    </div>
                    <div className={S.stepConector}></div>
                    <div className={S.step}>
                        <div className={S.stepHeader}>
                            <MdOutlineVerified color='#f7f7f7' size={48} />
                        </div>
                        <h3>Confirme o acordo</h3>
                        <p>Pague a primeira parcela ou o valor à vista e garanta seu acordo imediatamente.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWork