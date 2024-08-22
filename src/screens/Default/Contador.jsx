import { useEffect, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(10);
    
    const handleContador = () => {
        setContador(contador + 1);
    };
    const handleContadorM = () => {
        setContador(contador - 1);
    };

    //CUANDO CONTADOR TENGA VALOR DE 15 MOSTRAR UNA ALTERTA
    //SE HAYA MONTADO
    //[]
    useEffect(() => {
        setContador(12);
    }, []);
    
    useEffect(() => {
        if (contador === 15) {
            alert('Contador llegó a 15');
        }
    }, [contador]);
    
    useEffect(() => {

        return () => {
            console.log('El componente se desmonto');
        }
    });

    return (
        <>
            <h1>Componente Contador</h1>
            <h3>{contador}</h3>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleContadorM}>Reducir</button>
            </div>
        </>
    );
};

export default Contador;