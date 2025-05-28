import React from 'react'
// import { Container } from './styles'
import CardMyDebts from '@/components/CardMyDebts'
import S from './page.module.css'
import RefPage from '@/components/RefPage'
const MinhasDividas = () => {
    return (
        <div className={S.container}>
            <div className={S.header}>
                <h1>Minhas Dívidas</h1>
                <p>Veja aqui as dívidas que você tem com a empresa e aproveite os descontos para quitar.</p>
            </div>
            <CardMyDebts />
        </div >

    )
}

export default MinhasDividas