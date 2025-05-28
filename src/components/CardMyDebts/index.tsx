import React from 'react'
import S from './page.module.css'
import { MdOutlineVerified } from "react-icons/md";

const CardMyDebts = () => {
    return (
        <div className={S.card}>
            <div className={S.cardHeader}>
                <h1>Tv por assinatura</h1>
                <span>12309123912</span>
            </div>
            <div className={S.cardValue}>
                <div className={S.values}>
                    <span >
                        De <span className={S.textDefault}>R$ 2.679,63</span>
                    </span>
                    <span className={S.textValue}>
                        Por <span className={S.textAlert}>R$ 1.339.81</span>
                    </span>
                </div>

                <div className={S.discount}>
                    <span>Desconto de até 50%</span>
                </div>
            </div>

            <div className={S.cardBody}>
                <div className={S.dateExpires}>
                    <span>Vencimento</span>
                    <span>10/06/2025</span>
                </div>
                <div className={S.msgExpires}>
                    <span>Você ainda poderá trocar o vencimento</span>
                    <span> O desconto concedido e o valor a pagar poderá mudar conforme a data de vencimento e a forma de pagamento</span>
                </div>
            </div>

            <div className={S.cardButtons}>
                <button className={S.buttonPay}>
                    Pagar à vista
                </button>
                <button className={S.buttonSimulate}>
                    Simular parcelamento
                </button>
            </div>
        </div>
    )
}

export default CardMyDebts