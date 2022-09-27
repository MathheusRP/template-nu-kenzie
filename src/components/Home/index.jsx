import { useState } from "react"

import "./style.css"
import { Form } from "../Form"
import { List } from "../List"
import { Saldo } from "../Saldo"
import { useEffect } from "react"

export const HomePage = ({setHome}) => {

    function home () {
        setHome((valorAtual) => !valorAtual)
    }

    const [element_list, setElement] = useState('')


    const [filtro, setfiltro] = useState (element_list)

    useEffect(() => {
        setfiltro(element_list)
    },[,element_list])

    const [saldo, setSaldo] = useState(0)

    
    

    
    // let saldo = valorTotal.reduce ((anterior, atual) => anterior + atual,0)
    
    return (

        <div>
            <header>
                <div>
                <p className="logo"><b>Nu</b> Kenzie</p>
                <button onClick={home}> Inicio </button>
                </div>
            </header>
            <section className="body">
                <div>
                    <Form setElement={setElement} setSaldo={setSaldo} />
                    <Saldo saldo={saldo} />
                </div>
                <div className="div_list">
                    <List element_list={element_list} setElement={setElement} setFiltro={setfiltro} filtro={filtro} />
                </div>
            </section>
        </div>
    )
}