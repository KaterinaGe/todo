import {useState} from 'react'

function Edit({ editText, id, setEdit }) {
    const [userEdit, setUserEdit] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        editText(id, userEdit)
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
                placeholder="Now I want to..."
                className="edit"
                ref={input => input && input.focus()}
            /> 
        </form>
    )
}

export default Edit;