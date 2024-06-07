import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }


    return(
        <div>
            <div>
                <button onClick={increment}> + </button>
                <h2>{quantity}</h2>
                <button onClick={decrement}> - </button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity) } disabled={!stock}> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

// import { useState } from "react"


// const ItemCount = ({initial, stock, onAdd}) => {
//     const [quantity, setQuantity] = useState(initial)

//     const increment = () => {
//         if (quantity < stock) {
//             setQuantity(quantity+1)
//         }
//     }

//     const decrement = () => {
//         if (quantity > 1) {
//             setQuantity(quantity-1)
//         }
//     }

//     return(
//     <div>
//         <div>
//             <h2>Contador</h2>
//             <button onClick={increment}> + </button>
//             <h3>{quantity}</h3>
//             <button onClick={decrement}> - </button>
//         </div>
//         <div>
//             <button onClick={() => onAdd(quantity)} disabled={!stock} > Agregar al carrito </button>
//         </div>



//     </div>
   
//     )

// }


// export default ItemCount
