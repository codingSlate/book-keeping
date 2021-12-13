import { useState } from 'react'
import uniqid from 'uniqid'

const Form = ({onAdd}) => {

    const [form, setForm] = useState('')
    
    const onChangeHandler = (e) => {
        // console.log(e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        // console.log("from from submit",  form)
        onAdd({id: uniqid(), ...form})
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="bookName">Book Name</label>
            <input type="text" name="bookName" id="bookName" onChange={onChangeHandler} />
            <label htmlFor="authorName">Book Name</label>
            <input type="text" name="authorName" id="authorName" onChange={onChangeHandler} />
            <label htmlFor="description">Book Name</label>
            <textarea type="text" name="description" id="description" onChange={onChangeHandler} ></textarea>
            <button type="submit">Add</button>
        </form>
    )
}
export default Form