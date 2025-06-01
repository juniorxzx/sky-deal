import React from 'react'
import S from './modalDateSelect.module.css'
import { IoClose } from "react-icons/io5";
import DateSelect from '../DateSelect';


const ModalDateSelect = () => {
    // eslint-disable-next-line
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const mockDate = new Date();

    return (
        <div className={S.container}>
            <div className={S.modalContent}>
                <div className={S.modalHeader}>
                    <h2>Data de vencimento</h2>
                    <IoClose size={24} />
                </div>
                <div className={S.modalBody}>
                    <div className={S.dateSelect}>
                        <DateSelect date={selectedDate ?? mockDate} />
                    </div>
                    <div className={S.warnings}>
                        <span>Você pode selecionar uma outra data para o vencimento</span>
                        <span>O desconto concedido e o valor a pagar poderá mudar conforme a data de vencimento e a forma de pagamento</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalDateSelect