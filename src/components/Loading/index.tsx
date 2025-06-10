'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Img from '@/assets/images/loading-image.png'
import S from './loading.module.css'

interface LoadingProps {
    stop?: boolean;

}

const Loading = ({ stop }: LoadingProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (stop) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevProgress + 1;
                });
            }, 30);
            return () => clearInterval(interval);
        }
        else {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 90) {
                        clearInterval(interval);
                        return 90;
                    }
                    return prevProgress + 1;
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [stop]);
    return (
        <div className={S.container}>
            <div className={S.loadingContainer}>

                <Image
                    alt='Pessoa feliz pela proposta'
                    src={Img}
                    height={200}
                    width={200}
                />
                <h1>Aguarde, estamos preparando sua oferta</h1>
                <div className={S.loading}>
                    <motion.div
                        className={S.loader}
                        initial={{ width: "0%" }}
                        animate={{
                            width: `${progress}%`,
                            opacity: progress === 90 ? [0.7, 1, 0.7] : 1
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                            opacity: progress === 90 ? { repeat: Infinity, duration: 1.5 } : undefined
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Loading