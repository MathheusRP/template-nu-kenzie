
import { useState } from "react"
import "./style.css"

export const Saldo = ({saldo}) => {


    

    

    return (
        <div className="saldo">
            <h3>Valor:</h3>
            <p>R$ {saldo}</p>
        </div>
    )
}