
import { useState } from "react"
import "./style.css"


export const Form = ({setElement, setSaldo}) => {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState ('')
    const [tipo, setTipo] = useState ('')

    function data(event){
        event.preventDefault()

        // console.log(description, value, tipo)
        setElement((list) => [...list, {description: description, tipo: tipo, value: value}])

        if(tipo === 'Entrada'){
            setSaldo((saldo) => saldo + Number(value))
            console.log(value)
        } else {
            setSaldo((saldo) => saldo - Number(value))
            console.log(value)
        }
    }

    return (

        <div className="form_container">
            
            <form onSubmit={data}>
                <div className="description">
                    <label htmlFor="description">Digite aqui sua descrição</label>
                    <input required id="description" type="text" placeholder="Digite aqui sua descrição" onChange={event => setDescription(event.target.value)} />
                    <span>Ex: Compra de roupas</span>
                </div>
                
                <section className="input_container">

                <div className="input">
                    <label htmlFor="valor">Valor</label>
                    <input required id="valor" type="text" placeholder="1" onChange={event => setValue(event.target.value)}/>
                    <p>R$</p>
                </div>

                <div className="input">
                    <label htmlFor="tipo">Valor</label>
                    <select required id="tipo" onChange={event => setTipo(event.target.value)}>
                    {/* <option selected value={'Tipo'}>Tipo</option> */}
                        <option  >Tipo</option>
                        <option  value="Despesas">Despesas</option>
                        <option  value="Entrada">Entrada</option>
                    </select>
                </div>

                </section>

                <button type="submit">Inserir valor</button>

            </form>
        </div>
    )
}