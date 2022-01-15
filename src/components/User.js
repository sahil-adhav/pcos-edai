import React, { useEffect } from 'react'
import AddNote from './AddNote'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom';




export default function User() {
    const navigate = useNavigate();
    useEffect(() => {
        
        if(!localStorage.getItem('inside')){
            navigate("/login");
        }
        
        
        // eslint-disable-next-line
    }, [])
    return (
        <div className='container'>
        <AddNote/>
            {/* <div className="container"><Notes/></div> */}
        </div>
    )
}
