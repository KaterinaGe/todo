import {useState} from 'react'

function TodoList({ editText }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editText(userInput)
        setUserInput("")
    }
    
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="enter">
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Now I want to..."
                className="edit"
                ref={input => input && input.focus()}
            /> 
        </form>
    )
}

export default TodoList;