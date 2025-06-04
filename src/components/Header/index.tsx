'use client'

import React, { useEffect, useRef, useState } from 'react'
import S from './header.module.css'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatePresence, motion } from 'framer-motion'
const Header = () => {

    const [open, setOpen] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [setOpen])

    return (
        <motion.div
            className={S.header}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >

            <div className={S.container}>
                <motion.div className={S.logo}>
                    <Image src={Logo} alt='Logo SKY' width={100} height={100} />
                </motion.div>

                <motion.nav className={S.menu}>
                    <motion.div className={S.menuItem}>
                        <Link href='/minhas-dividas'>Minhas Dividas</Link>
                    </motion.div>
                    <motion.div className={S.menuItem}>
                        <Link href='/meus-acordos'>Meus Acordos</Link>
                    </motion.div>
                    <motion.div className={S.menuItem}>
                        <Link href='/'>Contato</Link>
                    </motion.div>
                </motion.nav>

                <motion.div className={S.menuIcon} onClick={() => setOpen(!open)}>
                    <motion.span className={S.line}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                    ></motion.span>
                    <motion.span className={S.line}
                        initial={{ opacity: 1, rotate: 0 }}
                        animate={{ opacity: open ? 0 : 1, rotate: open ? 0 : 0 }}
                    ></motion.span>
                    <motion.span className={S.line}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                    ></motion.span>
                </motion.div>

                <AnimatePresence>

                    {open && (
                        <motion.div className={S.menuMobileContainer}>
                            <motion.div className={S.menuMobile}
                                ref={containerRef}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ease: 'easeIn', duration: 0.3, delay: 0.2 }}
                                exit={{ opacity: 0, x: 20 }}

                            >
                                <div className={S.menuMobileHeader}>
                                    <Image src={Logo} alt='Logo SKY' width={70} height={70} />
                                    <motion.div className={S.menuIcon} onClick={() => setOpen(!open)}>
                                        <motion.span className={S.line}
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                                        ></motion.span>
                                        <motion.span className={S.line}
                                            initial={{ opacity: 1, rotate: 0 }}
                                            animate={{ opacity: open ? 0 : 1, rotate: open ? 0 : 0 }}
                                        ></motion.span>
                                        <motion.span className={S.line}
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                                        ></motion.span>
                                    </motion.div>
                                </div>
                                <div className={S.menuMobileList}>
                                    <h3>Olá Allan</h3>
                                    <Link href='/minhas-dividas' onClick={() => setOpen(false)}>Minhas Dívidas</Link>
                                    <Link href='/meus-acordos' onClick={() => setOpen(false)}>Meus Acordos</Link>
                                    <Link href='/contato' onClick={() => setOpen(false)}>Contato</Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Header