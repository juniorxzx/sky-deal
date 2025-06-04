'use client'

import React from 'react'
import S from './footer.module.css'
import Image from 'next/image'

import logoInverted from '@/assets/images/logo-inverted.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { RiTwitterXFill, RiFacebookBoxFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <motion.footer className={S.footer}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}

        >
            <div className={S.container}>
                <div className={S.menuSky}>
                    <div className={S.logo}>
                        <Image src={logoInverted} alt='Logo da SKY' width={100} />
                    </div>

                    <div className={S.socialLinks}>
                        <div className={S.socialLink}>
                            <Link href='https://facebook.com/sky' target='_blank' >
                                <RiFacebookBoxFill size={24} />
                            </Link>
                        </div>
                        <div className={S.socialLink}>
                            <Link href='https://x.com/sky' target='_blank' >
                                <RiTwitterXFill size={24} />
                            </Link>
                        </div>
                        <div className={S.socialLink}>
                            <Link href='https://youtube.com/sky' target='_blank' >
                                <RiYoutubeFill size={24} />
                            </Link>
                        </div>
                        <div className={S.socialLink}>
                            <Link href='https://instagram.com/sky' target='_blank' >
                                <RiInstagramFill size={24} />
                            </Link>
                        </div>





                    </div>
                </div>
                <div className={S.footerContent}>
                    <div className={S.footerLinks}>
                        <Link href='/'>Home</Link>
                        <Link href='/sobre'>Sobre</Link>
                        <Link href='/contato'>Contato</Link>
                        <Link href='/politica-de-privacidade'>Política de Privacidade</Link>
                    </div>

                    <div className={S.footerText}>
                        <p>© 2025 ATN - Autorizada SKY. Todos os direitos reservados.</p>
                    </div>
                </div>

            </div>
        </motion.footer>
    )
}

export default Footer