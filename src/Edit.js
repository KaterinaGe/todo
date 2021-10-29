import {useState} from 'react'
import 'antd/dist/antd.css';

function Edit({ editText, setEdit, todo }) {
    const [userEdit, setUserEdit] = useState(todo.name)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editText(todo.uuid, userEdit, todo.done)
        setEdit(false)
    }
    
    const handleEdit = (e) => {
        setUserEdit(e.currentTarget.value)
        if(e.key === "Enter") {
            e.preventDefault()
            if(userEdit.trim() !== '') {                               
                handleSubmit(e)
            } 
        }
        if(e.key === "Escape") {
            setEdit(false)
        }  
    }

    const handleBlur = () => {setEdit(false)}

    return (
        <form onSubmit={handleSubmit} className="enter">
            <input 
                value={userEdit}
                type="text"
                onBlur={handleBlur}
                onChange={handleEdit}
                onKeyDown={handleEdit}
                className="edit"
                ref={input => input && input.focus()}
            /> 
        </form>
    )
}

export default Edit;