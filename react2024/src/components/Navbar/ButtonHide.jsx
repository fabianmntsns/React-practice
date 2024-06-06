import Counter from "../Counter/Counter"
import { useState } from "react"



const ButtonHide = () => {
    const [show, setShow] = useState(false)
    return (
        <><button onClick={() => setShow( prev => !prev)}>Mostrar Contador</button>
        {show ? <Counter/> : null} </>
    )
    
}

export default ButtonHide