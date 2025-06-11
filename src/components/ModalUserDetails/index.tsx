import React, { useState } from 'react'
import S from './modalUserDetails.module.css'
import { IoClose } from "react-icons/io5";
import Button from '../Button';
import InputNumber from '../Input/InputNumber';
import InputEmail from '../Input/InputEmail';



interface ModalUserDetailsProps {
    setOpen: (open: boolean) => void;
    onIgnore?: () => void;
    onSubmit?: () => void;
    phone?: string;
    email?: string;
    setPhone?: (phone: string) => void;
    setEmail?: (email: string) => void;
    setIsFormValid?: (isValid: boolean) => void;
}
const ModalUserDetails = ({ setOpen, onIgnore, onSubmit, phone, setPhone, email, setEmail, setIsFormValid }: ModalUserDetailsProps) => {
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const isFormValid = phone && email && isPhoneValid && isEmailValid
    if (isFormValid) {
        setIsFormValid?.(true)
    }
    return (
        <div className={S.container}>
            <div className={S.modalContent}>
                <div className={S.modalHeader}>
                    <h2>Insira seus dados</h2>
                    <IoClose size={24} onClick={() => setOpen(false)} />
                </div>

                <div className={S.modalBody}>
                    <p>Precisamos do seu telefone e email para prosseguir</p>
                    <div className={S.formGroup}>
                        <InputNumber label='Número de telefone' onChange={setPhone} value={phone} placeholder='(xx) xxxx-xxxx' setValid={setIsPhoneValid} />
                        <InputEmail label='Email' onChange={setEmail} value={email} placeholder='xxxx@xxxx.com' setValid={setIsEmailValid} />
                    </div>
                    <Button disabled={!isFormValid} size='large' label='Continuar' onClick={onSubmit} />
                    <Button size='large' label='Pular etapa' onClick={onIgnore} type='secondary' />
                </div>

            </div>

        </div >
    )
}

export default ModalUserDetails