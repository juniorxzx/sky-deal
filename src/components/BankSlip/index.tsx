import React from 'react'
import S from './bankSlip.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo-vermelho.jpg'
import atn from '@/assets/images/atn-logo-reverse.png'
import Barcode from '../BarCode'
import { FiSmartphone } from "react-icons/fi";
import { TbClover } from "react-icons/tb";
import { formatBarCode } from '@/utils/formtBarCode'
interface BankSlipProps {
    data?: {
        nome: string,
        titulo: {
            titulo: string,
            contrato: string,
            descricao: string,
            valor: string,
            fvalor: string,
            vencimento_original: string,
            status: number,
            codigo_barras: string,
            linha_digitavel: string
        }
    }
}

const BankSlip = ({ data }: BankSlipProps) => {

    return (
        <div className={S.bankSlip}>
            <div className={S.bankSlipHeader}>
                <div className={S.logoSection}>
                    <div className={S.logoText}>
                        <Image src={atn} width={150} alt='Logo da empresa ATN' />
                    </div>

                </div>

            </div>

            <div className={S.clientGreeting}>
                Olá, {data?.nome.split(' ')[0]}.
            </div>

            <div className={S.amountSection}>
                <div className={S.amountInfo}>
                    <div className={S.amountLabel}>Valor total</div>
                    <div className={S.amountValue}>{data?.titulo.fvalor}</div>
                </div>
                <div className={S.divider}></div>
                <div className={S.dueInfo}>
                    <div className={S.dueLabel}>Vencimento</div>
                    <div className={S.dueValue}>{data?.titulo.vencimento_original}</div>
                </div>
            </div>

            <div className={S.sectionDivider}></div>

            <div className={S.mainContent}>
                <div className={S.easySection}>
                    <h2 className={S.easyTitle}>Veja como é fácil.</h2>
                </div>

                <div className={S.instructionsGrid}>
                    <div className={S.instructionItem}>
                        <FiSmartphone size={80} />
                        <div className={S.instructionText}>
                            É só acessar o aplicativo da sua instituição financeira ou banco e informar o código de barras
                        </div>
                    </div>

                    <div className={S.instructionItem}>
                        <TbClover size={80} />
                        <div className={S.instructionText}>
                            Você pode ir até uma lotérica e com CPF do titular e informar o valor exato
                        </div>
                    </div>
                </div>
            </div>


            <div className={S.sectionDivider}></div>

            <div className={S.footerInfo}>
                <p className={S.protectionNotice}>
                    Pagando o boleto você evita que seu nome seja enviado para órgãos de proteção ao crédito (SPC e Serasa).
                </p>



                <p className={S.paymentMethods}>
                    O pagamento pode ser feito através dos bancos ou nas casas lotéricas, com o CPF do titular.
                </p>

                <p className={S.contactInfo}>
                    Caso você tenha dúvidas, ligue para 10611* em qualquer horário.
                </p>

                <div className={S.bottomSection}>
                    <div className={S.barcodeLabel}>
                        <h3>Linha digitável</h3>
                        <span className={S.barcodeValue}>
                            {formatBarCode(data?.titulo.linha_digitavel ?? "")}
                        </span>
                    </div>
                    <div className={S.barcodeSection}>
                        <Barcode value={data?.titulo.codigo_barras} />

                        <div className={S.companyInfo}>
                            <div className={S.serviceLabel}>EMPRESA A SERVIÇO DA</div>
                            <Image src={logo} width={100} alt='Logo da SKY' />
                        </div>
                    </div>


                    <div className={S.paymentNotice}>
                        <p>Caso o pagamento já tenha sido regularizado, por favor, desconsidere esta carta.</p>
                        <p className={S.serviceNotice}>*Atendimento exclusivo para deficientes auditivos: 0800 701 1200.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BankSlip

