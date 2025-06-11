import React from 'react'
import S from './popUp.module.css'
import { motion } from 'framer-motion'
import { CiCircleAlert, CiCircleQuestion, CiCircleCheck } from "react-icons/ci";

interface PopupProps {
    msg?: string;
    type?: 'success' | 'error' | 'info';
}

const Popup = ({ msg, type }: PopupProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${S.popup} ${type === 'success' ? S.success : type === 'error' ? S.error : S.info}`}>
            <div className={S.icon}>
                {type === 'success' ? <CiCircleCheck size={24} /> : type === 'error' ? <CiCircleAlert size={24} /> : <CiCircleQuestion size={24} />}
            </div>
            <p>{msg}</p>
        </motion.div>
    )
}

export default Popup