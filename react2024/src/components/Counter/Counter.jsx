import { useEffect, useState } from "react"

const Counter = () => {

    let [count, setCount] = useState(1)
    let [title, setTitle] = useState('Contador')


    useEffect(() => {
        document.title= 'Contador: '+ count
        return() => {
            document.title="Titulo Principal"
        }
    }, [count])

    const increment = () => {
        setCount(count => count + 1)
    }

    const sumar5 = () => {
        for (let i = 0; i < 5; i++) {
            console.log(sumar5)
            setCount(prev => prev + 1)
            
        }
        
    }

    const decrement = () => {
        setCount(count => count - 1)
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={increment}> incrementar </button>
            <button onClick={decrement}> decrementar  </button>
            <button onClick={sumar5}> sumar 5 </button>
            <button onClick={reset}> resetear </button>
            <button onClick={() => setTitle('otro titulo')}> Otro titulo</button>
            

        </>
    )
}

export default Counter