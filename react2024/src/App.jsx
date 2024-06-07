


import ItemCount from './components/ItemCount'
import Layaout from './components/Layaout/Layaout'
import ButtonHide from './components/Navbar/ButtonHide'
import Navbar from './components/Navbar/Navbar'

function App() {

 

  return (
    <>
      <Navbar />
      <Layaout title={'titulo del componente'}>
      <ButtonHide/>
        <p>Este parrafo se mostrara dentro del componente</p>
       
      </Layaout>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Producto agregado,',quantity)}/>
      
    </>
  )
}

export default App
