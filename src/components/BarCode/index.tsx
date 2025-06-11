'use client'

import { useEffect, useRef } from 'react'
import JsBarcode from 'jsbarcode'

interface BarcodeProps {
    value?: string
    width?: number
    height?: number
}

export default function Barcode({ value, width = 1, height = 80 }: BarcodeProps) {
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (svgRef.current && value) {
            JsBarcode(svgRef.current, value, {
                format: 'CODE128',
                lineColor: '#000',
                width,
                height,
                displayValue: false,
            })
        }
    }, [value, width, height])

    return (
        <div>
            <svg ref={svgRef}></svg>

        </div>
    )

}
