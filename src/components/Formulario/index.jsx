import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState(0);

    useEffect(() => {
        console.log("O componente iniciou")
    }, [])

    useEffect(() => {
        console.log("O nome mudou para: " + nome)
    }, [nome])

    useEffect(() => {
        console.log("A nota da matéria A mudou para: " + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3;

        if (media >= 7) {
            return (
                <p>Olá, {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Olá, {nome} não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" onChange={alteraNome}/>
            <input type="number" placeholder="Nota da matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario