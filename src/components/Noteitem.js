import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="row-md-3">
            <div  className="card my-3">
            <img src={note.tag} class="img-fluid" alt=""></img>
                <div style={{backgroundColor:"white"}} className="card-body">
                    <div style={{backgroundColor:"white"}} className="d-flex align-items-center">
                        <h5 style={{backgroundColor:"white"}} className="card-title">{note.title}</h5>
                        <i style={{backgroundColor:"white"}} className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i style={{backgroundColor:"white"}} className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    
                    <p style={{backgroundColor:"white"}} className="card-text">{note.date}</p>
                    <p style={{backgroundColor:"white"}} className="card-text">{note.description}</p>


                    

                    
                </div>
            </div>
        </div>
    )
}

export default Noteitem