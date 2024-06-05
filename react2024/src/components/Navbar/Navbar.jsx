import Button from "./Button.jsx"


const Navbar = ({label, color}) => {
    return(
        <header>
            <h1>E Commerce</h1>
            <section>
                <Button label={"Mi boton"} color={"yellow"}/>
                <Button label={"Mi boton 2"} color={"blue"}/>
                <Button label={"Mi boton 3"} color={"red"}/>
            </section>
        </header>
    )
 
}
export default Navbar