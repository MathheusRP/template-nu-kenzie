
import { useState } from "react"
import "./style.css"

export const Saldo = ({valores}) => {
// console.log

    

    const entrada = valores.map(entradas => {
        if(entradas.tipo === 'Entrada'){
         return entradas.value
         }else {
            return 0
        }
    })

    const saida = valores.map(saidas => {
        if(saidas.tipo === 'Despesas'){
            return saidas.value
        }else {
            return 0
        }
    })

    
    console.log(entrada)
    console.log(saida)


    const value_saida = saida.reduce((anterior, atual) => anterior + atual,0)
    const value_entrada = entrada.reduce((anterior, atual) => anterior + atual,0)

    console.log(value_saida)
    console.log(value_entrada)

    const [saldoTotal, setSaldo] = useState(value_entrada - value_saida)
    
    console.log(saldoTotal)
    function teste (){
        
    }

    console.log(teste())
    return (
        <div className="saldo">
            <h3>Valor:</h3>
            <p>R$ saldoTotal</p>
        </div>
    )
}