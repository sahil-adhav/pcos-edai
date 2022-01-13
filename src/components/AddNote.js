import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import styleAddNote from './CSS/styleAddNote.css'

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2 className="AddBlog_heading">Add a Blog</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label font_label">Title</label>
                    <input type="text" className="form-control form_input"  name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label font_label">Your Story</label>
                    <input type="text" className="form-control form_input" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                    {/* <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required rows="14" cols="50"/> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label font_label">Image Url</label>
                    <input type="text" className="form-control form_input" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                    
                </div>
               
                <button class="publish_text" disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn  btn-publish" onClick={handleClick}>Publish</button>
            </form>
        </div>
    )
}

export default AddNote
