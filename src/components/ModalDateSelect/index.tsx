import React from 'react'
import S from './modalDateSelect.module.css'
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import DateSelect from '../DateSelect';
import Button from '../Button';

import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';


interface ModalDateSelectProps {
    setOpen: (open: boolean) => void;
}


const ModalDateSelect = ({ setOpen }: ModalDateSelectProps) => {
    const { selectedDate, setSelectedDate } = useAppContext()

    const router = useRouter();

    const onConfirm = () => {
        if (selectedDate) {
            setOpen(false);
            router.push('/confirmacao');
        }
    }

    return (
        <div className={S.container}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    className={S.modalContent}>
                    <div className={S.modalHeader}>
                        <h2>Data de vencimento</h2>
                        <IoClose size={24} onClick={() => setOpen(false)} />
                    </div>
                    <div className={S.modalBody}>
                        <div className={S.dateSelect}>
                            <DateSelect
                                initialDate={new Date()}
                                numberOfDays={10}
                                selectedDate={selectedDate}
                                onSelectDate={setSelectedDate}
                            />
                        </div>

                        <div className={S.warnings}>
                            <div className={S.warning}>
                                <IoInformationCircleOutline size={20} />
                                <span>Você ainda poderá trocar o vencimento</span>
                            </div>

                        </div>
                        {selectedDate && (
                            <Button
                                label={`Pagar à vista`}
                                onClick={onConfirm}
                                size='large'
                            />
                        )}

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ModalDateSelect