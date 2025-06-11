'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Img from '@/assets/images/loading-image.png'
import S from './loading.module.css'

interface LoadingProps {
    stop?: boolean
    message?: string
}

const Loading = ({ stop = false, message }: LoadingProps) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const target = stop ? 100 : 90

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= target) {
                    clearInterval(interval)
                    return target
                }
                return prev + 1
            })
        }, 30)

        return () => clearInterval(interval)
    }, [stop])

    return (
        <div className={S.container}>
            <div className={S.loadingContainer}>
                <Image
                    alt="Pessoa feliz pela proposta"
                    src={Img}
                    height={200}
                    width={200}
                />
                <h1>{message || 'Aguarde, estamos preparando sua oferta'}</h1>
                <div className={S.loading}>
                    <motion.div
                        className={S.loader}
                        initial={{ width: '0%' }}
                        animate={{
                            width: `${progress}%`,
                            opacity:
                                progress === 90
                                    ? [0.6, 1, 0.6]
                                    : 1
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'linear',
                            ...(progress === 90
                                ? { repeat: Infinity, repeatType: 'loop', duration: 1.5 }
                                : {})
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Loading
