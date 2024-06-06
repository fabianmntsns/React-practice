const Layaout = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}


export default Layaout