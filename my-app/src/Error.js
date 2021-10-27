function Error ({error, errorWindow, message}) {
    if (!error) return null
    return (
        <div className="error" onClick={errorWindow}>
            <h1 className="title"> Error! </h1>
            <div className="message"> {message} </div>
        </div>
    )    
}

export default Error;