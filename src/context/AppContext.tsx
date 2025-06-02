'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type AppContextType = {
    user: string | null
    setUser: (user: string | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null)

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) throw new Error('useAppContext must be used inside AppProvider')
    return context
}
