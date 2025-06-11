'use client'

import React, { useEffect, useState } from 'react'
import S from './page.module.css'
import Button from '@/components/Button'
import { useAppContext } from '@/context/AppContext'
import { AnimatePresence, motion } from 'framer-motion'
import { IoBarcodeOutline } from 'react-icons/io5'
import ModalUserDetails from '@/components/ModalUserDetails'
import { useRouter } from 'next/navigation'
import { BiCalendar, BiCreditCard } from 'react-icons/bi'
import Loading from '@/components/Loading'
import { api } from '@/lib/axios'
import Popup from '@/components/PopUp'

const ConfirmationPage = () => {
    const [accepted, setAccepted] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const { userCpf, selectedDate, setPaymentMethod, paymentMethod, debtSelected, user } = useAppContext()
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState<string | ''>()
    const [email, setEmail] = useState<string | ''>()
    const [isFormValid, setIsFormValid] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [])

    const handleNext = () => {
        if (accepted) {
            setOpen(true)
        }
    }


    const handleSubmit = async () => {
        const token = localStorage.getItem('token')

        if (!isFormValid) return

        if (!token) {
            alert('Token não encontrado. Recarregue a página.')
            return
        }
        setIsLoading(true)

        try {
            await api.put(
                '/negociacao/sky/atualiza-contato',
                {
                    documento: userCpf,
                    telefone: phone,
                    email: email,
                },
                {
                    headers: {
                        'X-Token': token,
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
                    },
                }
            )

            await api.post('/negociacao/sky/acordo', {
                documento: userCpf,
                titulo: debtSelected?.titulo,
            }, {
                headers: {
                    'X-Token': token,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
                },
            })

            setOpen(false)
            router.push('/finalizacao')
        } catch (error) {
            console.error('Erro ao consultar cliente:', error)
            setError(true)
            setTimeout(() => {
                setError(false)
                router.push('/')
            }, 5000)
        } finally {
            setIsLoading(false)
        }
    }

    const handleIgnore = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            alert('Token não encontrado. Recarregue a página.')
            return
        }
        setIsLoading(true)

        try {

            await api.post('/negociacao/sky/acordo', {
                documento: userCpf,
                titulo: debtSelected?.titulo,
            }, {
                headers: {
                    'X-Token': token,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
                },
            })

            setOpen(false)
            router.push('/finalizacao')
        } catch (error) {
            console.error('Erro ao consultar cliente:', error)
            setError(true)
            setTimeout(() => {
                setError(false)
                router.push('/')
            }, 5000)
        } finally {
            setIsLoading(false)
        }

    }
    if (isLoading) {
        return (
            <Loading message='Estamos confimando uns dados, aguarde' />
        )
    }

    return (
        <main className={S.container}>
            <motion.div
                className={S.detailsContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div className={S.details}>
                    <p>{debtSelected?.titulo}</p>
                    <h3>Negociação referente a quitação total do contrato</h3>
                    <div className={S.detailsInfo}>
                        <h1>{debtSelected?.descricao}</h1>
                    </div>

                </div>
                <div className={S.cardValue}>
                    <div className={S.values}>
                        <div className={S.valueLabel}>Valor a pagar</div>

                        {/* {debt.valor !== debt.fValor && (
                        <div className={S.originalValue}>
                            De: {debt.valor}
                        </div>
                    )} */}
                        <div className={S.currentValue}>
                            {debtSelected?.fvalor}
                        </div>
                    </div>
                </div>

                <div className={S.paymentDetails}>
                    <div className={S.dateSection}>
                        <div className={S.dateLabel}>
                            <BiCalendar size={16} />
                            <span>Vencimento Original</span>
                        </div>
                        <div className={S.dateValue}>
                            {selectedDate && selectedDate.toLocaleDateString('pt-BR')}
                        </div>
                    </div>

                    <div className={S.paymentMethod}>
                        <div className={S.dateLabel}>
                            <BiCreditCard size={16} />
                            <span>Selecione uma forma de pagamento</span>
                        </div>
                        <div className={S.radioContainer}>
                            {/* <div className={`${S.radio} ${S.disabled} ${paymentMethod === 'pix' ? S.selected : ''}`} >

                                <div className={S.icon}>
                                    <MdPix size={34} />
                                </div>
                                <span>Pix</span>
                            </div> */}
                            <div className={`${S.radio} ${paymentMethod === 'boleto' ? S.selected : ''}`} onClick={() => setPaymentMethod('boleto')}>
                                <div className={S.icon}>
                                    <IoBarcodeOutline size={34} />
                                </div>
                                <span>Boleto</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className={S.termsContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div className={S.header}>
                    <h1>Confirmação e aceite dos termos</h1>
                </div>
                <div className={S.terms}>
                    <h2>TERMO DE RENEGOCIAÇÃO CONTRATUAL SKY - Nº 0123456789</h2>
                    <p><strong>CONTRATANTE:</strong> [NOME COMPLETO DO CLIENTE]</p>
                    <p><strong>CPF/CNPJ:</strong> [NÚMERO DO DOCUMENTO DO CLIENTE]</p>
                    <p><strong>ENDEREÇO:</strong> [ENDEREÇO COMPLETO DO CLIENTE]</p>
                    <p><strong>CONTRATADA:</strong> SKY SERVIÇOS DE BANDA LARGA LTDA., com sede na Av. das Nações Unidas, nº 12.901, Torre Norte, 28º andar, Brooklin Paulista, São Paulo/SP, CEP 04578-910, inscrita no CNPJ/MF sob o nº 00.497.373/0001-10.</p>

                    <br />
                    <p>Pelo presente instrumento particular, as partes acima qualificadas, doravante denominadas simplesmente CONTRATANTE e CONTRATADA, resolvem, de comum acordo, renegociar as cláusulas e condições do contrato de prestação de serviços de TV por Assinatura e/ou outros serviços, anteriormente firmado, nos seguintes termos e condições:</p>

                    <h3>CLÁUSULA PRIMEIRA – DO OBJETO DA RENEGOCIAÇÃO</h3>
                    <p>1.1. A presente renegociação tem por objeto a alteração das condições comerciais do plano de serviço [NOME DO PLANO ANTIGO] para o novo plano [NOME DO NOVO PLANO FICTÍCIO], com as seguintes características:</p>
                    <ul>
                        <li>Valor mensal: R$ [NOVO VALOR MENSAL]</li>
                        <li>Franquia de dados (se aplicável): [NOVA FRANQUIA]</li>
                        <li>Canais inclusos (se aplicável): [LISTA DE NOVOS CANAIS OU PACOTES]</li>
                        <li>Período de fidelidade: [NOVO PERÍODO DE FIDELIDADE, ex: 12 meses a partir desta data]</li>
                    </ul>
                    <p>1.2. O CONTRATANTE declara ter pleno conhecimento e concordância com as características, limitações e franquias do novo plano ora contratado.</p>

                    <h3>CLÁUSULA SEGUNDA – DAS CONDIÇÕES DE PAGAMENTO</h3>
                    <p>2.1. O CONTRATANTE pagará à CONTRATADA o valor mensal estipulado na Cláusula Primeira, item 1.1, por meio de [FORMA DE PAGAMENTO, ex: débito automático em conta, boleto bancário].</p>
                    <p>2.2. Eventuais valores pendentes referentes ao contrato anterior foram quitados/renegociados conforme acordo apartado nº [NÚMERO DO ACORDO ANTERIOR, se houver], sendo este termo válido para as futuras cobranças.</p>
                    <p>2.3. Em caso de atraso no pagamento, incidirão multa de 2% (dois por cento) e juros de mora de 1% (um por cento) ao mês, calculados pro rata die sobre o valor devido, sem prejuízo da possibilidade de suspensão dos serviços conforme contrato original.</p>

                    <h3>CLÁUSULA TERCEIRA – DA VIGÊNCIA E FIDELIDADE</h3>
                    <p>3.1. As novas condições ora pactuadas passarão a vigorar a partir da data de aceite eletrônico deste termo, substituindo as condições anteriores do contrato original no que se refere ao objeto desta renegociação.</p>
                    <p>3.2. O prazo de vigência desta renegociação, respeitando o novo período de fidelidade, se houver, é o estipulado na Cláusula Primeira, item 1.1. Caso o CONTRATANTE opte pelo cancelamento antecipado durante o período de fidelidade, estará sujeito à multa rescisória proporcional ao tempo restante do contrato, conforme política da CONTRATADA e legislação vigente.</p>

                    <h3>CLÁUSULA QUARTA – DAS DISPOSIÇÕES GERAIS</h3>
                    <p>4.1. Permanecem inalteradas e em pleno vigor todas as demais cláusulas e condições do contrato original que não conflitarem com o disposto neste Termo de Renegociação.</p>
                    <p>4.2. O CONTRATANTE declara que leu, compreendeu e concorda integralmente com todos os termos e condições aqui estabelecidos, tendo recebido todas as informações necessárias de forma clara e precisa.</p>
                    <p>4.3. Este termo é gerado eletronicamente e o aceite se dará por meio de [MECANISMO DE ACEITE, ex: clique no botão &quot;Concordo&quot;, confirmação via SMS, etc.], o qual terá validade jurídica como assinatura das partes para todos os fins de direito.</p>

                    <h3>CLÁUSULA QUINTA – DO ACEITE</h3>
                    <p>5.1. Ao clicar em &quot;LI E ACEITO OS TERMOS&quot; ou realizar o procedimento de confirmação indicado, o CONTRATANTE manifesta sua concordância expressa e inequívoca com todas as cláusulas e condições desta renegociação, reconhecendo-as como válidas e eficazes.</p>

                    <br />
                    <p>Local e Data: [GERADO AUTOMATICAMENTE PELO SISTEMA - Ex: Valinhos, 02 de junho de 2025]</p>
                    <br />
                    <p><strong>CONTRATANTE:</strong> (Aceite eletrônico)</p>
                    <p>[NOME COMPLETO DO CLIENTE]</p>
                    <br />
                    <p><strong>CONTRATADA:</strong> (Representação eletrônica)</p>
                    <p>SKY SERVIÇOS DE BANDA LARGA LTDA.</p>
                    <br />
                    <p><em>Este é um documento gerado para fins de demonstração e não possui validade legal.</em></p>

                </div>
                <div className={S.checkboxContainer}>
                    <input type="checkbox" id="terms" checked={accepted} onChange={() => setAccepted(!accepted)} className={S.checkbox} />
                    <label htmlFor="terms">Li e aceito os termos de renegociação contratual</label>
                </div>
                <div className={S.confirmationButton}>
                    <Button label="Voltar" type="secondary" onClick={() => router.push('/minhas-dividas')} />
                    <Button label="Confirmar" type="primary" disabled={!accepted} onClick={handleNext} />
                </div>
            </motion.div>
            <AnimatePresence>
                {open && (
                    <ModalUserDetails
                        setOpen={setOpen}
                        onIgnore={handleIgnore}
                        onSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        setIsFormValid={setIsFormValid}
                    />
                )}
            </AnimatePresence>

            {error && (
                <Popup msg='Tivemos um erro ao confirmar seu contrato' type='error' />
            )}
        </main>
    )
}

export default ConfirmationPage