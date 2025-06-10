'use client'

import { DebtData } from '@/@types/debt.type'
import { createContext, useContext, useState, ReactNode } from 'react'

type PaymentMethod = 'pix' | 'boleto' | null


type AppContextType = {
    user: string | null
    setUser: (user: string | null) => void
    selectedDate: Date
    setSelectedDate: (date: Date) => void
    userCpf: string | null
    setUserCpf: (cpf: string | null) => void
    paymentMethod: PaymentMethod
    setPaymentMethod: (method: PaymentMethod) => void

    debtSelected?: DebtData
    setDebtSelected?: (debt: DebtData) => void
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [userCpf, setUserCpf] = useState<string | null>(null)
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('boleto')
    const [debtSelected, setDebtSelected] = useState<DebtData>()

    const contextValue = {
        user,
        setUser,
        selectedDate,
        setSelectedDate,
        userCpf,
        setUserCpf,
        paymentMethod,
        setPaymentMethod,
        debtSelected, setDebtSelected
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useAppContext deve ser usado dentro de um AppProvider')
    return context
}
