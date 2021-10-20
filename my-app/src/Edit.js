import {useState} from 'react'

function Edit({ editText, id, setEdit }) {
    const [userEdit, setUserEdit] = useState('')

    const handleChange = (e) => {
        setUserEdit(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editText(id, userEdit)
        setEdit(false)
    }
    
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const cancel = (e) => {
        if(e.key === "Escape") {
            setEdit(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="enter">
            <input 
                value={userEdit}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                onKeyDown={cancel}
                placeholder="Now I want to..."
                className="edit"
                ref={input => input && input.focus()}
            /> 
        </form>
    )
}

export default Edit;