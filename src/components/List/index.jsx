import "./style.css"

import { BsTrash } from 'react-icons/bs'
import { useState } from "react"

export const List = ({element_list, setElement, setFiltro, filtro}) => {


    function filtrar_todos (valor,){
        if(valor === 'Todos'){
            const todos = element_list.map(element => {
                return element
            })
            setFiltro(todos)
        } else {
            const filter = element_list.filter(element => {
                if(element.tipo === valor){
                    return element}
            })
            setFiltro(filter)
        }
        
    }


    const excluir = (valor) => {
        const neweArray = element_list.filter(element => {
            if(element !== valor){
                return element
            }
        })
        // console.log(teste)
        setElement(neweArray)
    }


    return (
        <div className="list">
            

            <section className="list_header">
                <p>Resumo financeiro</p>
                <div>
                    <button className="teste1" onClick={() => filtrar_todos('Todos')} >Todos</button>
                    <button className="teste" onClick={() => filtrar_todos('Entrada')} >Entradas</button>
                    <button className="teste" onClick={() => filtrar_todos('Despesas')} >Despesas</button>
                </div>
            </section>
            
            <ul className="element_list">
                
                {
                    filtro ? (
                        
                        
                        filtro.map((element, index) => {
                            return (
                                
                            <li key={index} className={`element ${element.tipo}`}>
                                <div className="element_div1">
                                    <p>{element.description}</p>
                                    <span>{element.tipo}</span>
                                </div>
                                <div className="element_div2">
                                    <p>R$ {element.value}</p>
                                    <button onClick={() => excluir(element)} ><BsTrash/></button>
                                </div>
                            </li>
                            )
                        })
            
                      ) : (

                        <h3> Você ainda não possui nenhum lançamento </h3>
                        
                    )

                }
                
            </ul>
        </div>
    )
}

// element_list.map((element, index) => {
//     return (
        
//     <li key={index} className={`element ${element.tipo}`}>
//         <div className="element_div1">
//             <p>{element.description}</p>
//             <span>{element.tipo}</span>
//         </div>
//         <div className="element_div2">
//             <p>R$ {element.value}</p>
//             <button><BsTrash/></button>
//         </div>
//     </li>
//     )
// })