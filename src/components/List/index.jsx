import "./style.css"

import { BsTrash } from 'react-icons/bs'

export const List = ({element_list, setFiltro, filtro}) => {


    function filtrar_todos (){
        const todos = element_list.map(element => {
            return element
        })
        setFiltro(todos)
    }

    function filtrar_entradas (){
        const entradas = element_list.filter(element => {
            if(element.tipo === 'Entrada'){ return element}
        })
        setFiltro(entradas)
    }

    function filtrar_despesas (){
        const despesas = element_list.filter(element => {
            if(element.tipo === 'Despesas'){ return element}
        })
        setFiltro(despesas)
    }

    const excluir = (event) => {
        if(event.target.tagName === 'BUTTON'){
            console.log(event.target.id)
        }
    }

    return (
        <div className="list">
            <section className="list_header">
                <p>Resumo financeiro</p>
                <div>
                    <button onClick={filtrar_todos} >Todos</button>
                    <button onClick={filtrar_entradas} >Entradas</button>
                    <button onClick={filtrar_despesas} >Despesas</button>
                </div>
            </section>
            
            <ul className="element_list">
                
                {
                    element_list ? (
                        filtro.map((element, index) => {
                            return (
                                
                            <li id={index} key={index} className={`element ${element.tipo}`}>
                                <div className="element_div1">
                                    <p>{element.description}</p>
                                    <span>{element.tipo}</span>
                                </div>
                                <div className="element_div2">
                                    <p>R$ {element.value}</p>
                                    <button id={index} onClick={excluir}><BsTrash/></button>
                                </div>
                            </li>
                            )
                        })
            
                      ) : (

                        <h1>teste</h1>
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