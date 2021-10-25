import {useState} from 'react'

function Input({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {                
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInput.trim() !== '') {                               
            addTask(userInput)
        } 
        setUserInput("")
    }



    return (
        <form className="enter" onSubmit={(e) => handleSubmit(e)}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                
                placeholder="I want to..."
                className="input"
                autoFocus
                ref={input => input && input.focus()}
            /> 
            <button className="save">Save</button>
        </form>
    )
}

export default Input;