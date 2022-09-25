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

    const [element_list, setElement] = useState([
        {
            description: 'Teste',
            tipo: 'Entrada',
            value: 300
        },
        {
            description: 'Teste',
            tipo: 'Entrada',
            value: 250
        },
        {
            description: 'Teste',
            tipo: 'Despesas',
            value: 200
        }
    ])


    const [filtro, setfiltro] = useState (element_list)

    useEffect(() => {
        setfiltro(element_list)
    },[,element_list])

    
    

    
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
                    <Form setElement={setElement} />
                    <Saldo valores={filtro} />
                </div>
                <div>
                    <List element_list={element_list} setFiltro={setfiltro} filtro={filtro} />
                </div>
            </section>
        </div>
    )
}