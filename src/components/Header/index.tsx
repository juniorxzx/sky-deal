'use client'

import React from 'react'
import S from './header.module.css'
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
const Header = () => {
    const [auth, setAuth] = React.useState(true);
    const path = usePathname()

    console.log('path', path)
    return (
        <div className={S.header}>
            <div className={S.top}>
                <div className={S.logo}>
                    <span>SKY</span>
                </div>
                <div className={S.user}>

                    <FaRegUserCircle />


                    <span>Olá, Allan</span>

                </div>
            </div>
            {auth && (

                <div className={S.bottom}>
                    <div className={S.menu}>
                        <div className={`${S.menuItem} ${path === '/minhas-dividas' ? S.active : ''}`} >
                            <span>Minhas Dívidas</span>
                            {path === '/minhas-dividas' && (
                                <div className={S.icon} />
                            )}
                        </div>

                        <div className={`${S.menuItem} ${path === '/' ? S.active : ''}`}>
                            <span>Meus Contatos</span>
                        </div>
                        <div className={`${S.menuItem} ${path === '/' ? S.active : ''}`}>
                            <span>Dúvidas</span>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Header