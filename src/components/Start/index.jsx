
import "./style.css"
import Img from '../../img/illustration.png'

export const Start = ({setHome}) => {

    function home () {
        setHome((valorAtual) => !valorAtual)
    }

    return (
        <div className="container">
            <section>
                <p className="logo"><b>Nu</b> Kenzie</p>
                <h1>Centralize o controle das suas finanças</h1>
                <span>de forma rápida e segura</span>
                <button onClick={home}>Iniciar</button>
            </section>

            <figure className="imagem">
                <img src={Img} alt="" />
            </figure>
        </div>
    )
}