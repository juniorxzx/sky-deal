'use client'

import React from 'react'
import S from './header.module.css'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
const Header = () => {
    return (
        <motion.div className={S.header} initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>

            <div className={S.container}>


                <motion.div className={S.logo}>
                    <Image src={Logo} alt='Logo SKY' width={100} height={100} />
                </motion.div>

                <motion.nav className={S.menu}>
                    <motion.div className={S.menuItem}>
                        <Link href='#como-funciona'>Como funciona</Link>
                    </motion.div>
                    <motion.div className={S.menuItem}>
                        <Link href='#como-funciona'>Sobre Nós</Link>
                    </motion.div>
                    <motion.div className={S.menuItem}>
                        <Link href='#como-funciona'>Contato</Link>
                    </motion.div>
                </motion.nav>
            </div>
        </motion.div>
    )
}

export default Header