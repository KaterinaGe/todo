import {useState} from 'react'
import 'antd/dist/antd.css';
import { Input, Button } from 'antd'

function Add({ addTask, filteredTodos }) {
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

    const keyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <section  className="enter" onSubmit={(e) => handleSubmit(e)}>
            <p className="sum">{filteredTodos.length} tasks</p>
            <Input 
                value={userInput}
                type="text"
                onKeyPress={keyPress}
                onChange={handleChange}
                placeholder="I want to..."
                className="input"
                autoFocus
                ref={input => input && input.focus()}
            /> 
            <Button onClick={(e)=> handleSubmit(e)} className="save">Add</Button>
        </section>
    )
}

export default Add;