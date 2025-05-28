import React from 'react'
import S from './refpage.module.css'

interface RefPageProps {
    path?: string;
}


const RefPage = ({ path }: RefPageProps) => {
    return (
        <div className={S.container}>
            <span>{path}</span>
        </div>
    )
}

export default RefPage